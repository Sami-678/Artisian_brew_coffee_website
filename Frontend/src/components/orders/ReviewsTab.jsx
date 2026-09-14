import ReviewFeedCard from "./ReviewFeedCard";

const ratingBars = [
  { label: "5 star", pct: 88, count: 1130 },
  { label: "4 star", pct: 9, count: 115 },
  { label: "3 star", pct: 2, count: 25 },
  { label: "2 star", pct: 1, count: 10 },
  { label: "1 star", pct: 0, count: 4 },
];

const feedReviews = [
  {
    initials: "JD",
    name: "Jessica Davis",
    meta: "Verified Buyer • 2 days ago",
    text: "The pour-over station here is unmatched. The Ethiopian Yirgacheffe had vibrant floral notes with subtle bergamot finish. Paired with their fresh almond croissant, it's the absolute best way to start a crisp morning in Seattle!",
    helpful: 24,
  },
  {
    initials: "MR",
    name: "Marcus Ross",
    meta: "Verified Buyer • 5 days ago",
    text: "Quick pickup via their smart lockers is a game changer for my morning commute. Ordered my double cortado on the walk over and it was waiting in Locker A-12 piping hot and securely sealed.",
    helpful: 12,
  },
];

export default function ReviewsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center justify-center bg-primary text-on-primary p-6 rounded-xl shadow-sm">
              <span className="text-headline-lg font-bold">4.9</span>
              <div className="flex items-center text-secondary-fixed mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-headline-md font-bold text-on-surface">Overall Rating</h3>
              <p className="text-body-md text-on-surface-variant mt-1">
                Based on 1,284 verified customer reviews from coffee enthusiasts.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {ratingBars.map((bar) => (
              <div key={bar.label} className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                <span className="w-8">{bar.label}</span>
                <div className="flex-1 bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${bar.pct}%` }} />
                </div>
                <span className="w-10 text-right">{bar.count}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-4">
            <h4 className="text-headline-sm font-semibold text-on-surface">Write a Review</h4>
            <p className="text-body-sm text-on-surface-variant">
              Share your experience with our recent blends or pastries to earn 50 bonus rewards points.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-on-primary text-label-md py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Leave Feedback
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-headline-md font-bold text-on-surface">Recent Community Reviews</h3>
          <div className="flex items-center gap-2">
            <span className="text-body-sm text-on-surface-variant">Sort by:</span>
            <select className="bg-surface-container-high text-on-surface text-body-sm px-3 py-1.5 rounded-lg outline-none">
              <option>Most Recent</option>
              <option>Highest Rated</option>
              <option>With Photos</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {feedReviews.map((review) => (
            <ReviewFeedCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
