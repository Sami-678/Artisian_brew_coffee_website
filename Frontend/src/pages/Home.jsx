import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ComboDeal from "../components/ComboDeal";
import ReviewCard from "../components/ReviewCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { api } from "../services/api";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        setLoading(true);
        const query = category === "all" ? "" : `?category=${category}`;
        const data = await api.get(`/products${query}`);
        if (!cancelled) setProducts(data);
        setError(null);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, [category]);

  useEffect(() => {
    api
      .get("/reviews")
      .then(setReviews)
      .catch(() => setReviews([])); // reviews are non-critical, fail silently
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CategoryFilter active={category} onChange={setCategory} />

      {/* Featured Coffees & Items */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full" id="menu">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-body-sm font-bold uppercase tracking-widest text-on-secondary-container">
              Handcrafted Selection
            </span>
            <h2 className="text-headline-lg text-primary font-extrabold mt-1">Featured Coffees &amp; Treats</h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md">
            Each cup is crafted with precision, highlighting the unique terroir and flavor notes of our seasonal
            beans.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}
        {error && <p className="text-error">Couldn't load the menu: {error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      <ComboDeal />

      {/* Customer Reviews */}
      {reviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-body-sm font-bold uppercase tracking-widest text-on-secondary-container">
              Community Love
            </span>
            <h2 className="text-headline-lg text-primary font-extrabold mt-1">What Our Coffee Lovers Say</h2>
            <p className="text-body-md text-on-surface-variant mt-2">
              Read honest reviews from our daily regulars and weekend visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <>
              <ReviewCard key={review._id} review={review} />
              </>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}