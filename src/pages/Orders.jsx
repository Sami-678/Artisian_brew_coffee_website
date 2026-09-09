import { useState } from "react";
import MyOrdersTab from "../components/orders/MyOrdersTab";
import QuickPickupTab from "../components/orders/QuickPickupTab";
import ReviewsTab from "../components/orders/ReviewsTab";

const tabs = [
  { id: "orders", label: "My Orders", icon: "receipt_long" },
  { id: "pickup", label: "Quick Pickup", icon: "bolt" },
  { id: "reviews", label: "Reviews & Ratings", icon: "star" },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Active Order Status Banner */}
      <section className="w-full bg-surface-container-low px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-primary-container text-on-primary-container p-6 lg:p-8 rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4 z-10">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                coffee_maker
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-body-sm font-semibold bg-secondary-container text-on-secondary-container">
                  Live Status
                </span>
                <span className="text-body-sm text-on-primary-container/80 font-mono">Order #AB-4921</span>
              </div>
              <h1 className="text-headline-md lg:text-headline-lg font-bold text-on-primary mt-1">Preparing Now</h1>
              <p className="text-body-md text-on-primary-container/90 mt-0.5">
                Your Ethiopian Yirgacheffe pour-over and Almond Croissant are being carefully crafted.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 z-10 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col items-start md:items-end">
              <span className="text-body-sm text-on-primary-container/70">Estimated Pickup</span>
              <span className="text-headline-sm font-bold text-on-primary">8 mins (10:45 AM)</span>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-on-primary text-label-md px-5 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">qr_code</span>
              Pickup Pass
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="w-full border-b border-outline-variant/20 bg-surface sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-body-lg flex items-center gap-2 transition-all border-b-2 ${
                activeTab === tab.id
                  ? "font-bold text-primary border-primary"
                  : "font-medium text-on-surface-variant border-transparent hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        {activeTab === "orders" && <MyOrdersTab />}
        {activeTab === "pickup" && <QuickPickupTab />}
        {activeTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
}
