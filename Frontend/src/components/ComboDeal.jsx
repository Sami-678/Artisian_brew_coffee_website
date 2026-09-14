import { useToast } from "../context/ToastContext";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function ComboDeal() {
  const { showToast } = useToast();
  const { token } = useAuth();

  const handleGrab = async () => {
    if (!token) {
      showToast("Please log in to place an order.");
      return;
    }
    try {
      await api.post(
        "/orders",
        { items: [{ name: "Artisan Breakfast Pairing Combo", quantity: 1, price: 7.5 }] },
        token
      );
      showToast('Added "Artisan Breakfast Pairing Combo" ($7.50) to your order!');
    } catch (err) {
      showToast(err.message || "Couldn't place order");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full" id="combo">
      <div className="bg-primary-container text-inverse-on-surface rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-[0_16px_40px_rgba(63,46,38,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-surface/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-4 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 bg-primary/60 px-3.5 py-1.5 rounded-full border border-outline/20 w-fit">
            <span className="material-symbols-outlined text-inverse-primary text-[16px]">local_fire_department</span>
            <span className="text-body-sm font-semibold tracking-wider uppercase text-inverse-primary">
              Morning Ritual Combo
            </span>
          </div>
          <h2 className="text-headline-lg lg:text-4xl font-extrabold text-inverse-on-surface leading-tight">
            The Artisan Breakfast Pairing
          </h2>
          <p className="text-body-lg text-on-primary-container">
            Start your morning right with any of our signature hot or cold brews paired with your choice of freshly
            baked pastry. Save 15% when bundled together.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-inverse-primary">$7.50</span>
              <span className="text-on-primary-container line-through text-body-md">$9.00</span>
            </div>
            <button
              className="bg-inverse-primary text-primary font-bold px-8 py-3.5 rounded-lg hover:bg-surface-bright transition-all shadow-md flex items-center gap-2"
              onClick={handleGrab}
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Grab Combo Deal</span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-80 rounded-xl overflow-hidden relative shadow-lg z-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA53WXvJFdmPdDkVErJpGrXpTvYkSJeKtCyibLM8kgcpAUJ7xMJYGOZDlPQFH9k6CWpL8bbtPc47DOgzWh_yIph1KtDSdpXe1NReDcYKU-1L6LyFV17I4c2tsg-lo7ZYUfhq5HIgDoPglDYUH0jp1g_nk2_zL_GivtJ8FFZA-BGjNkItspVuh4NsoWOrpGeDFzlH2pG3_uoM8C8vf73Mq9BY29WUArCJMxD_fU89gsutuCIMTXwPCE')",
            }}
          />
        </div>
      </div>
    </section>
  );
}