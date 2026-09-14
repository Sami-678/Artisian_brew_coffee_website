import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBr1ohmIsNo5LifZIz0bmXafYIOboGl1AcHoglCHj6zqekRM9gVjFU7zm0X3l9uzVtxP9DwSwtpienZiYCbLlonbIF8UGY4agpRbwj2NHCG9heDhrO9t49T80OoG2ahWGWD0hqvp0XUI6svz0K-P4h0Q5N_Nmw5508ds1qi_HbgJbzDpbtDjM7J4BSU_Df9pgS8HQVB-dCmoznYnTqAgy4-ts0S5Bs3IJFcH7lKY3Zi8Zd72ytZDS0";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#menu", label: "Our Menu" },
  { to: "/contact", label: "Contact" },
  { to: "/orders", label: "Orders" },
];

function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function NavItem({ to, label, onClick }) {
  const isHashLink = to.includes("#");
  const navigate = useNavigate();

  if (isHashLink) {
    return (
      <a
        className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick();
          navigate("/");
          setTimeout(() => {
            document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        }}
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-body-md transition-colors cursor-pointer ${
          isActive ? "nav-active" : "text-on-surface-variant hover:text-on-surface"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src={LOGO} alt="Artisan Brew Logo" className="h-8 w-auto object-contain rounded-md" />
            <span className="text-headline-sm font-bold tracking-tight text-primary">Artisan Brew</span>
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-body-md text-on-surface-variant">Hi, {user.fullName?.split(" ")[0]}</span>
                <button
                  onClick={handleLogout}
                  className="text-body-md font-semibold text-primary hover:text-on-surface transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link to="/login" className="text-body-md font-semibold text-primary hover:text-on-surface transition-colors">
                Log in
              </Link>
            )}
            <Link
              to="/orders"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
              title={user ? user.fullName : "My Account"}
            >
              {user ? (
                <span className="text-on-primary text-[13px] font-bold">{getInitials(user.fullName)}</span>
              ) : (
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              )}
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              aria-label="Open Menu"
              className="p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-surface shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img alt="Artisan Brew Logo" className="h-8 w-auto object-contain rounded-md" src={LOGO} />
              <span className="text-headline-sm font-bold tracking-tight text-primary">Artisan Brew</span>
            </div>
            <button
              aria-label="Close Menu"
              className="p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                {...link}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        </div>
        <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-3">
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileOpen(false);
              }}
              className="w-full text-left text-body-md font-semibold text-primary py-2"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full text-left text-body-md font-semibold text-primary py-2"
            >
              Log in / Sign up
            </Link>
          )}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              {user ? (
                <span className="text-on-primary text-[15px] font-bold">{getInitials(user.fullName)}</span>
              ) : (
                <span className="material-symbols-outlined text-on-primary text-[20px]">person</span>
              )}
            </div>
            <div>
              <h4 className="text-headline-sm font-bold text-primary text-sm">
                {user ? user.fullName : "Account"}
              </h4>
              <span className="text-body-sm text-on-surface-variant">
                {user ? user.email : "View Profile & Orders"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}