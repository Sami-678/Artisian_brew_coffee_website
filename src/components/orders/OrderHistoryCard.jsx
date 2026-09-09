export default function OrderHistoryCard({ order }) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-surface-container-highest overflow-hidden shrink-0">
          <img className="w-full h-full object-cover" src={order.image} alt={order.items} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-headline-sm font-semibold text-on-surface">{order.id}</span>
            <span className="text-body-sm text-on-surface-variant">• {order.date}</span>
          </div>
          <p className="text-body-md text-on-surface-variant mt-0.5">{order.items}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-0.5 rounded-full text-body-sm bg-surface-container-high text-on-surface">
              {order.status}
            </span>
            <span className="text-body-sm font-semibold text-primary">{order.total}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
        <button className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-label-md rounded-lg transition-colors flex items-center gap-1.5">
          {order.rated ? (
            <>
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              Rated {order.rated}
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[16px]">rate_review</span>
              Rate
            </>
          )}
        </button>
        <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-on-primary text-label-md rounded-lg transition-colors flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">refresh</span>
          Reorder
        </button>
      </div>
    </div>
  );
}
