const values = [
  {
    icon: "eco",
    title: "Ethically Sourced Beans",
    text: "We partner exclusively with farms that practice sustainable agriculture, fair wages, and environmental stewardship to protect both land and community.",
  },
  {
    icon: "local_fire_department",
    title: "Master Roasters",
    text: "Roasting is an art and a science. Our master roasters monitor temperature profiles meticulously to unlock the complex flavor notes inherent in every bean.",
  },
  {
    icon: "groups",
    title: "Cozy Community Hub",
    text: "Our café is designed as an extension of your living room—a warm, welcoming sanctuary where neighbors connect, ideas spark, and conversations flow.",
  },
];

const facts = [
  "Batches are roasted in small 15kg drums to ensure absolute heat control and consistency.",
  "Every single roast day begins with a sensory cupping session at 6:00 AM sharp.",
  "Beans rest for precisely 48 hours to degas before hitting our coffee bar and shelves.",
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden -mt-16 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjISPptHaOG2W0PYU6dvcTGqSuylbOU9rQU2N3B1gox8hkggqX-xduuqksd1LmSJsaCTtCRRNc-DDAcunH0ogzo4wit8Q6KgAHLxSasJPfMDDShVHLyjj1WQyJ6OXAGoZhtaQ95pSkKem6PvIBm2uSxLEL1XU95IonuxPwRP69ReeAHu95PbESV6UlNKwfLZ3eW8tErz1SyJx037PbEL6gNrK2sHVwGMgEhR0_e-eHRI_FxndFCTA')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <span className="text-secondary-fixed text-body-sm uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full bg-surface/10 backdrop-blur-md">
            Est. 2018 · Seattle
          </span>
          <h1 className="text-headline-lg md:text-5xl font-bold text-inverse-on-surface tracking-tight">
            Our Artisan Story
          </h1>
          <p className="text-body-lg text-inverse-primary max-w-2xl font-light">
            From humble backyard roasts to a sanctuary for coffee lovers, discover the passion, people, and precision
            poured into every single cup.
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-12 h-0.5 bg-secondary" />
            <span className="text-secondary text-body-sm font-semibold uppercase tracking-wider">
              Rooted in Craft &amp; Care
            </span>
          </div>
          <h2 className="text-headline-lg text-on-surface font-bold">
            Every bean tells a story of origin, dedication, and respect.
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            We believe exceptional coffee is not merely manufactured—it is cultivated through enduring partnerships
            with independent farmers across high-altitude regions. Every batch is roasted in small quantities to
            honor the unique flavor notes gifted by the earth.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col gap-1">
              <span className="text-headline-lg font-bold text-primary">100%</span>
              <span className="text-body-md text-on-surface-variant">Direct Trade Sourcing</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col gap-1">
              <span className="text-headline-lg font-bold text-primary">12+</span>
              <span className="text-body-md text-on-surface-variant">Single Origin Selections</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5B7DMqyeMnIX29R92zfmhyHCi2EZQCAOP8bCtpemk81sgDDl6ycIDKlWYM-0-QXoA8dzosIhAZtsMPR_ntI8Hc0rVepxzTYVw4WDAKfHFAN_hRK-tPOZdHOh6zrpzOnxbHVWiI4P54V_8Ih_giDoMtMBI4vuPy5Td-oTM4QN0lSh8iXunG-BBzTLjvr6WLl3uZDRgFCSLHCLljQoJRF_O4EjKS65G25fL7G3duPoygpLavF6QqWI')",
              }}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary-container text-on-primary-container p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
            <p className="text-body-md italic">"Coffee is a moment of pause in a rushing world."</p>
            <span className="text-body-sm text-on-primary-container/80 mt-2 block">— Master Roaster</span>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-secondary text-body-sm font-semibold uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-headline-lg text-on-surface font-bold">The Pillars of Artisan Brew</h2>
            <p className="text-body-md text-on-surface-variant">
              Our commitment goes beyond the brew. These three core tenets shape everything from our bean selection
              to our community space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface p-8 rounded-xl shadow-md flex flex-col gap-4 transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {v.icon}
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface font-bold">{v.title}</h3>
                <p className="text-body-md text-on-surface-variant">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Roasting Facts */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="bg-primary-container text-on-primary-container rounded-2xl p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl">
          <div className="flex flex-col gap-6">
            <span className="text-inverse-primary text-body-sm font-semibold uppercase tracking-wider">
              Behind The Scenes
            </span>
            <h2 className="text-headline-lg text-inverse-on-surface font-bold">
              Daily Roasting Facts &amp; Craftsmanship
            </h2>
            <p className="text-body-lg text-on-primary-container">
              Roasting isn't just about heat and time; it's a sensory dance. Here is a glimpse into our daily routine
              at the roastery:
            </p>
            <ul className="space-y-4 text-body-md text-inverse-on-surface">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed mt-0.5">check_circle</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface/10 backdrop-blur-sm p-6 rounded-xl flex flex-col justify-between h-48">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">thermostat</span>
              <div>
                <span className="text-headline-lg font-bold text-inverse-on-surface block">210°C</span>
                <span className="text-body-sm text-inverse-primary">Peak First Crack Temp</span>
              </div>
            </div>
            <div className="bg-surface/10 backdrop-blur-sm p-6 rounded-xl flex flex-col justify-between h-48 mt-8">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">schedule</span>
              <div>
                <span className="text-headline-lg font-bold text-inverse-on-surface block">12 Min</span>
                <span className="text-body-sm text-inverse-primary">Average Roast Duration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
