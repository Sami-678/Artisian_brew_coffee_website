import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
const from = location.state?.from?.pathname || "/";
  const { showToast } = useToast();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await login(email, password);
      showToast("Welcome back! Redirecting to your account...");
     setTimeout(() => navigate(from, { replace: true }), 600);
    } catch (err) {
      showToast(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-fixed-dim/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-surface-container-low rounded-2xl shadow-[0_12px_32px_rgba(63,46,38,0.06)] p-8 sm:p-10 relative z-10 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm mb-2">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              coffee
            </span>
          </div>
          <h1 className="text-headline-lg text-primary tracking-tight">Welcome Back</h1>
          <p className="text-body-md text-on-surface-variant max-w-[260px]">
            Enter your details to access your artisanal coffee rewards and orders.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md text-on-surface" htmlFor="login-email">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-outline material-symbols-outlined text-[20px]">mail</span>
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-md pl-11 pr-4 py-3 rounded-lg border border-outline-variant/50 focus:outline-none focus:border-primary transition-all shadow-2xs"
                id="login-email"
                placeholder="name@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-label-md text-on-surface" htmlFor="login-password">
                Password
              </label>
              <a className="text-body-sm font-medium text-secondary hover:text-primary transition-colors" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-outline material-symbols-outlined text-[20px]">lock</span>
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-md pl-11 pr-11 py-3 rounded-lg border border-outline-variant/50 focus:outline-none focus:border-primary transition-all shadow-2xs"
                id="login-password"
                placeholder="••••••••"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-3.5 text-outline hover:text-on-surface transition-colors flex items-center"
                type="button"
                onClick={() => setShowPassword((s) => !s)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <input
              className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary accent-primary cursor-pointer"
              id="login-remember"
              type="checkbox"
            />
            <label className="text-body-md text-on-surface-variant cursor-pointer select-none" htmlFor="login-remember">
              Remember me for 30 days
            </label>
          </div>

          <button
            className="w-full mt-2 py-3.5 px-4 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary text-label-md rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            type="submit"
            disabled={submitting}
          >
            <span>{submitting ? "Signing in..." : "Sign In"}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/30" />
          </div>
          <span className="relative px-4 bg-surface-container-low text-body-sm text-outline uppercase tracking-wider">
            or continue with
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md rounded-lg border border-outline-variant/30 transition-all shadow-2xs cursor-pointer"
            type="button"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                fill="#4285F4"
              />
              <path
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.15 21.32 7.23 24 12 24z"
                fill="#34A853"
              />
              <path
                d="M5.27 14.24c-.25-.72-.38-1.5-.38-2.24s.13-1.52.38-2.24V6.6H1.18C.43 8.13 0 9.87 0 11.76s.43 3.63 1.18 5.16l4.09-2.68z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.15 2.68 1.18 6.6l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                fill="#EA4335"
              />
            </svg>
            <span>Google</span>
          </button>
          <button
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md rounded-lg border border-outline-variant/30 transition-all shadow-2xs cursor-pointer"
            type="button"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.12c.64-.78 1.07-1.86.95-2.95-.94.04-2.08.63-2.74 1.41-.58.68-1.09 1.78-.95 2.85 1.05.08 2.11-.53 2.74-1.31z" />
            </svg>
            <span>Apple</span>
          </button>
        </div>

        <div className="text-center pt-2">
          <p className="text-body-md text-on-surface-variant">
            Don't have an account yet?{" "}
            <Link className="font-medium text-secondary hover:text-primary transition-colors underline underline-offset-4 cursor-pointer" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}