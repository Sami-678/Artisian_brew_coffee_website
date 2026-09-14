const statusStyles = {
  ready: "bg-tertiary-fixed text-on-tertiary-fixed",
  completed: "bg-surface-container-high text-on-surface-variant",
  preparing: "bg-primary-fixed text-on-primary-fixed",
};

export default function LockerCard({ locker, onAction }) {
  return (
    <div
      className={`bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between gap-6 ${
        locker.status === "completed" ? "opacity-75" : ""
      } ${locker.highlight ? "border-2 border-primary/20" : ""}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className={`text-body-sm font-mono ${locker.highlight ? "text-primary font-bold" : "text-on-surface-variant"}`}>
            {locker.locker}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-body-sm font-semibold ${statusStyles[locker.status]}`}>
            {locker.statusLabel}
          </span>
        </div>
        <h3 className="text-headline-sm font-bold text-on-surface">{locker.orderId}</h3>
        <p className="text-body-md text-on-surface-variant">{locker.items}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-b border-outline-variant/10">
        <span className="text-body-sm text-on-surface-variant">{locker.metaLabel}</span>
        {locker.pin ? (
          <span className="text-headline-sm font-mono font-bold text-primary">{locker.pin}</span>
        ) : (
          <span className={`text-headline-sm font-bold ${locker.status === "preparing" ? "text-primary" : "text-on-surface"}`}>
            {locker.metaValue}
          </span>
        )}
      </div>
      <button
        disabled={locker.status === "completed"}
        onClick={onAction}
        className={`w-full py-2.5 font-label-md rounded-lg transition-colors ${
          locker.status === "ready"
            ? "bg-primary text-on-primary hover:bg-primary/90"
            : locker.status === "completed"
            ? "bg-surface-container-high text-on-surface-variant cursor-not-allowed"
            : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"
        }`}
      >
        {locker.action}
      </button>
    </div>
  );
}