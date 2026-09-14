import { useToast } from "../context/ToastContext";

export default function ProductCard({ product }) {
  const { showToast } = useToast();

  return (
    <div className="product-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(63,46,38,0.06)] hover:shadow-[0_16px_32px_rgba(63,46,38,0.12)] transition-all flex flex-col justify-between">
      <div>
        <div className="relative h-64 overflow-hidden bg-surface-container">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-body-sm font-semibold text-primary">
            {product.badge}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-headline-sm text-primary font-bold">{product.name}</h3>
            <span className="text-headline-sm font-extrabold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant line-clamp-2">{product.description}</p>
        </div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-1 text-on-secondary-container text-body-sm">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span className="font-bold text-primary">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <button
          className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-4 py-2 rounded-lg font-semibold text-body-md transition-all flex items-center gap-2"
          onClick={() => showToast(`Added "${product.name}" ($${product.price.toFixed(2)}) to your order!`)}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
