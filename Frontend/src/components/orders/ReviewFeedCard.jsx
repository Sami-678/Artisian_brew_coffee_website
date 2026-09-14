export default function ReviewFeedCard({ review }) {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center text-body-md">
            {review.initials}
          </div>
          <div>
            <h4 className="text-headline-sm font-semibold text-on-surface">{review.name}</h4>
            <span className="text-body-sm text-on-surface-variant">{review.meta}</span>
          </div>
        </div>
        <div className="flex items-center text-secondary-fixed">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          ))}
        </div>
      </div>
      <p className="text-body-md text-on-surface">"{review.text}"</p>
      <div className="flex items-center gap-4 pt-2 text-body-sm text-on-surface-variant">
        <button className="flex items-center gap-1 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[16px]">thumb_up</span>
          Helpful ({review.helpful})
        </button>
        <button className="hover:text-primary transition-colors">Reply</button>
      </div>
    </div>
  );
}
