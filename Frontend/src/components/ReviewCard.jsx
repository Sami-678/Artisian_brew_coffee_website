export default function ReviewCard({ review }) {
  const name = review.guestName || review.name || review.user?.fullName || "Anonymous";
  const role = review.role || "Verified Buyer";
  const rating = review.rating ?? 5;

  // Uses a specific photo if the review has one, otherwise falls back to a
  // deterministic generated portrait based on the review's own id.
  const seed = review._id ? parseInt(review._id.slice(-4), 16) % 99 : 0;
  const gender = seed % 2 === 0 ? "women" : "men";
  const avatarUrl = review.photo || `https://randomuser.me/api/portraits/${gender}/${seed}.jpg`;

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_24px_rgba(63,46,38,0.05)] flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full bg-secondary-container object-cover"
          />
          <div>
            <h4 className="text-headline-sm font-bold text-primary">{name}</h4>
            <span className="text-body-sm text-on-surface-variant">{role}</span>
          </div>
        </div>
        <p className="text-body-lg text-on-surface italic">"{review.text}"</p>
        <div className="flex items-center gap-1 text-on-secondary-container pt-2 border-t border-outline-variant/10">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: `'FILL' ${i < rating ? 1 : 0}` }}
            >
              star
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}