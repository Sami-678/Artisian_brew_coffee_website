export default function ReviewCard({ review }) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_24px_rgba(63,46,38,0.05)] flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1 text-on-secondary-container">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          ))}
        </div>
        <p className="text-body-lg text-on-surface italic">"{review.text}"</p>
      </div>
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-outline-variant/10">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">
          {review.initials}
        </div>
        <div>
          <h4 className="text-headline-sm font-bold text-primary">{review.name}</h4>
          <span className="text-body-sm text-on-surface-variant">{review.role}</span>
        </div>
      </div>
    </div>
  );
}
