import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-headline-sm font-bold text-primary">Artisan Brew</span>
          </div>
          <p className="text-body-sm text-on-surface-variant">
            Crafting exceptional coffee experiences with sustainably sourced beans and artisanal care.
          </p>
        </div>
        <div>
          <h4 className="text-headline-sm font-semibold mb-4 text-on-surface">Navigation</h4>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li><Link className="hover:text-on-surface cursor-pointer" to="/">Home</Link></li>
            <li><Link className="hover:text-on-surface cursor-pointer" to="/about">About Us</Link></li>
            <li><Link className="hover:text-on-surface cursor-pointer" to="/#menu">Our Menu</Link></li>
            <li><Link className="hover:text-on-surface cursor-pointer" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-on-surface cursor-pointer" to="/orders">Orders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-headline-sm font-semibold mb-4 text-on-surface">Hours</h4>
          <p className="text-body-sm text-on-surface-variant mb-1">Monday – Friday: 7am – 7pm</p>
          <p className="text-body-sm text-on-surface-variant">Saturday – Sunday: 8am – 6pm</p>
        </div>
        <div>
          <h4 className="text-headline-sm font-semibold mb-4 text-on-surface">Location</h4>
          <p className="text-body-sm text-on-surface-variant mb-1">123 Roasted Bean Way</p>
          <p className="text-body-sm text-on-surface-variant">Café District, Seattle, WA</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 pt-8 border-t border-outline-variant/30 text-center text-on-surface-variant text-body-sm">
        © 2024 Artisan Brew. All rights reserved.
      </div>
    </footer>
  );
}
