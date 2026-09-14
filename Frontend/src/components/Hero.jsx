export default function Hero() {
  return (
    <section className="relative w-full h-[520px] bg-primary-container overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnyzCTZ9d8WDStCV92Do12AVJseaDyUWzVjehVwpnkgcWMFXnE03hdnJBzo1OnHA2jgCuyH-RZQwwztKn5lcPS4jW4gUZM6pv6spCU_hbKGyhMZXy34o5X22fCG7lh5P9uZ7wSL2ZFPUtvudXQHAn12SUruaHqeUHtVytk6dv6adUDctNcLbOInG6E9tQuE5GgzWRctC0qc2UznVJftkYUiqsR99RVNMq4hS838o5Z_ZSVie4_J-A')",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-transparent z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 bg-primary/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-variant/20">
          <span className="material-symbols-outlined text-inverse-primary text-[16px]">local_cafe</span>
          <span className="text-body-sm font-semibold tracking-wider uppercase text-inverse-primary">
            Single Origin &amp; Handcrafted
          </span>
        </div>
        <h1 className="text-headline-lg lg:text-6xl font-extrabold text-inverse-on-surface max-w-2xl leading-tight">
          Sip the Art of <span className="text-inverse-primary">Morning Comfort</span>
        </h1>
        <p className="text-body-lg text-on-primary-container max-w-xl">
          Immerse yourself in our carefully curated selection of sustainably sourced beans, expertly roasted and
          brewed to elevate your daily ritual.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a
            className="bg-inverse-primary text-primary font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-surface-bright transition-all flex items-center gap-2"
            href="#menu"
          >
            <span>Explore Menu</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            className="bg-primary/50 backdrop-blur-md text-inverse-on-surface border border-outline/30 font-semibold px-6 py-3 rounded-lg hover:bg-primary/70 transition-all"
            href="#combo"
          >
            Today's Special
          </a>
        </div>
      </div>
    </section>
  );
}
