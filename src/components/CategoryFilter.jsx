import { categories } from "../data/products";

export default function CategoryFilter({ active, onChange }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-8 relative z-30 w-full">
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-[0_12px_32px_rgba(63,46,38,0.08)] flex items-center justify-between gap-4 overflow-x-auto">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`flex-1 min-w-[140px] py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isActive
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
