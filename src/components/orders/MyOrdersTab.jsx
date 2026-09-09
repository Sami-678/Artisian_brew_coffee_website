import OrderHistoryCard from "./OrderHistoryCard";

const orderHistory = [
  {
    id: "Order #AB-4882",
    date: "Oct 14, 2:15 PM",
    items: "Double Cortado, Blueberry Scone, Oat Milk Upgrade",
    status: "Picked Up",
    total: "$11.50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAV0L9x8fcpS0fSep8uOesQWucy1NunGSmzZ_6C9twHyOZdi5aKWcxtJO_AFSUBZcbuPaJMZo0E2n8mHnD60w8oMTdEHyvcvqV46-t1JnnIcSZPV2zG1d0u_Fm1koymdrBfmNWxsjXIC_ViSOlE6PMxa5798x9-4_T4wz7CTiaF3l_M7dtttaEW254faF42UNBQ46ifFerVsS1ozNgslOIra-RJQCdkpUu2rUhaH3iR3RJGpbfzRi8",
  },
  {
    id: "Order #AB-4710",
    date: "Oct 10, 9:30 AM",
    items: "Iced Vanilla Bean Latte, Avocado Toast on Sourdough",
    status: "Picked Up",
    total: "$15.75",
    rated: "5.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtCD0M2nnLEYQFcEaSdMS6Lu_aNLgEWZYPNfh_UVV429fHOB2GC3yQ9GK77nUgKYrE04k5lYR0rWKURihYF72YRUeiiV_G-8R4aJoZEzcTDGuuBf17k2nnBJGJX96FTMGnafUlRWZ69ynis4qZCg7kK0_pvIY1m6-yTE88knqx1z6sJE9yVm909h5m_Qi-yOYu-qpQy9Aujnec9u-kFpxAJmHDVJslLs9dMWBZZlJKaOl7TnSOZHo",
  },
  {
    id: "Order #AB-4522",
    date: "Sep 28, 11:00 AM",
    items: "Ethiopian Yirgacheffe Whole Bean (12oz)",
    status: "Shipped",
    total: "$18.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6AbhStG-48-xsn0Q2IWPi8rksG91eYuLCKidom6iHxvpQtfiNWbxRVUfcCHrh1BLzh2PumUZqgFYCzQ_pqPdJBCqjbLaYe3WEQWQQnp0HaUFF1MYSOdKQn4fqNSNOL1Q8CRc8AZv0V2km0VzhFqekNAr3SRWVzvPEPD7nVI9PZh1nTbxhil4JnVM1Rxp8PD4Tf8nE_q-sPBogPdoMTcthfano9l4IX9VCO3F_XTCIbRxVNNWpaK4",
  },
];

const favorites = [
  { emoji: "☕", bg: "bg-primary-fixed text-on-primary-fixed", name: "Morning Pour-over", meta: "Ordered 14 times" },
  { emoji: "🥐", bg: "bg-secondary-container text-on-secondary-container", name: "Almond Croissant", meta: "Ordered 9 times" },
  { emoji: "🧊", bg: "bg-tertiary-fixed text-on-tertiary-fixed", name: "Cold Brew Nitro", meta: "Ordered 7 times" },
];

export default function MyOrdersTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-md font-bold text-on-surface">Order History</h2>
          <span className="text-body-sm text-on-surface-variant">Showing last 30 days</span>
        </div>
        <div className="flex flex-col gap-4">
          {orderHistory.map((order) => (
            <OrderHistoryCard key={order.id} order={order} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-headline-md font-bold text-on-surface">Quick Favorites</h2>
        <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col gap-4">
          {favorites.map((fav, i) => (
            <div
              key={fav.name}
              className={`flex items-center justify-between ${
                i < favorites.length - 1 ? "pb-4 border-b border-outline-variant/20" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${fav.bg}`}>
                  {fav.emoji}
                </div>
                <div>
                  <h4 className="text-headline-sm font-semibold text-on-surface">{fav.name}</h4>
                  <p className="text-body-sm text-on-surface-variant">{fav.meta}</p>
                </div>
              </div>
              <button className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-primary text-on-primary p-6 rounded-xl shadow-md relative overflow-hidden flex flex-col gap-4">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-surface/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex justify-between items-center">
            <span className="text-label-md uppercase tracking-wider text-inverse-primary">Artisan Rewards</span>
            <span className="text-headline-sm font-bold text-on-primary">340 pts</span>
          </div>
          <p className="text-body-md text-inverse-primary">
            You are only 60 points away from a free artisanal pastry or bag of roasted beans!
          </p>
          <div className="w-full bg-surface/20 rounded-full h-2.5 overflow-hidden">
            <div className="bg-secondary-fixed h-full rounded-full" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
