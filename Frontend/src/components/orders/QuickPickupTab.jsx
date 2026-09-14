import { useEffect, useState } from "react";
import LockerCard from "./LockerCard";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

// Maps a backend order (pickupMethod: "locker") into the shape LockerCard expects
function toLockerViewModel(order) {
  const statusMap = {
    preparing: { status: "preparing", statusLabel: "Preparing", action: "Notify When Ready" },
    ready: { status: "ready", statusLabel: "Ready Now", action: "Open Locker Remotely" },
    picked_up: { status: "completed", statusLabel: "Completed", action: "Collected" },
  };
  const mapped = statusMap[order.status] || statusMap.preparing;

  return {
    locker: order.locker?.code || "Assigning locker...",
    orderId: `Order #${order._id.slice(-6).toUpperCase()}`,
    items: order.items.map((i) => i.name).join(", "),
    metaLabel: mapped.status === "ready" ? "PIN Code" : mapped.status === "completed" ? "Picked Up" : "Est. Arrival",
    pin: mapped.status === "ready" ? order.locker?.pin : undefined,
    metaValue:
      mapped.status === "completed"
        ? new Date(order.updatedAt).toLocaleString([], { hour: "numeric", minute: "2-digit" })
        : order.estimatedPickupAt
        ? new Date(order.estimatedPickupAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
        : "TBD",
    highlight: mapped.status === "preparing",
    _id: order._id,
    ...mapped,
  };
}

export default function QuickPickupTab() {
  const { token } = useAuth();
  const [lockers, setLockers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    api
      .get("/lockers", token)
      .then((data) => setLockers(data.map(toLockerViewModel)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const handleOpen = async (orderId) => {
    try {
      await api.put(`/lockers/${orderId}/open`, {}, token);
      setLockers((prev) =>
        prev.map((l) =>
          l._id === orderId ? { ...l, status: "completed", statusLabel: "Completed", action: "Collected" } : l
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Express Pickup Shelf</h2>
          <p className="text-body-md text-on-surface-variant">
            Skip the line. Grab your ready order directly from a smart locker.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-xl">
          <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          <span className="text-body-md font-medium text-on-surface">Downtown Café (123 Roasted Bean Way)</span>
        </div>
      </div>

      {loading && <p className="text-on-surface-variant">Loading pickups...</p>}
      {error && <p className="text-error">{error}</p>}
      {!loading && !error && lockers.length === 0 && (
        <p className="text-on-surface-variant">No locker pickups right now.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lockers.map((locker) => (
          <LockerCard
            key={locker._id}
            locker={locker}
            onAction={() => locker.status === "ready" && handleOpen(locker._id)}
          />
        ))}
      </div>
    </div>
  );
}