import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ComboDeal from "../components/ComboDeal";
import ReviewCard from "../components/ReviewCard";
import { products, reviews } from "../data/products";

export default function Home() {
  const [category, setCategory] = useState("all");

  const filtered = useMemo(
    () => (category === "all" ? products : products.filter((p) => p.category === category)),
    [category]
  );

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <ComboDeal />

      {/* Customer Reviews */}
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
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
