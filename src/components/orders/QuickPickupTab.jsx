import LockerCard from "./LockerCard";

const lockers = [
  {
    locker: "Locker A-12",
    status: "ready",
    statusLabel: "Ready Now",
    orderId: "Order #AB-4915",
    items: "1x Cappuccino, 1x Ham & Cheese Panini",
    metaLabel: "PIN Code",
    pin: "4 8 2 9",
    action: "Open Locker Remotely",
  },
  {
    locker: "Locker B-04",
    status: "completed",
    statusLabel: "Completed",
    orderId: "Order #AB-4810",
    items: "2x Cold Brew, 1x Avocado Toast",
    metaLabel: "Picked Up",
    metaValue: "Today, 8:15 AM",
    action: "Collected",
  },
  {
    locker: "Smart Locker #4",
    status: "preparing",
    statusLabel: "Preparing",
    orderId: "Order #AB-4921",
    items: "Ethiopian Yirgacheffe, Almond Croissant",
    metaLabel: "Est. Arrival",
    metaValue: "10:45 AM",
    action: "Notify When Ready",
    highlight: true,
  },
];

export default function QuickPickupTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Express Pickup Shelf</h2>
          <p className="text-body-md text-on-surface-variant">
            Skip the line. Grab your ready order directly from Smart Locker #4.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-xl">
          <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          <span className="text-body-md font-medium text-on-surface">Downtown Café (123 Roasted Bean Way)</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lockers.map((locker) => (
          <LockerCard key={locker.locker} locker={locker} />
        ))}
      </div>
    </div>
  );
}
