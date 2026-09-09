import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Account created! Let's get you signed in.");
    setTimeout(() => navigate("/login"), 900);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center w-full bg-surface">
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-surface w-full">
          <div className="w-full max-w-md bg-surface-container-low rounded-xl p-8 sm:p-10 shadow-xl flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-headline-lg text-on-surface">Create an Account</h2>
              <p className="text-body-md text-on-surface-variant">
                Enter your details below to start your coffee journey.
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-label-md text-on-surface" htmlFor="signup-fullname">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-outline">badge</span>
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md py-3 pl-11 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="signup-fullname"
                    placeholder="Jane Doe"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-md text-on-surface" htmlFor="signup-email">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-outline">mail</span>
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md py-3 pl-11 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="signup-email"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-md text-on-surface" htmlFor="signup-password">
                  Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-outline">lock</span>
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md py-3 pl-11 pr-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="signup-password"
                    placeholder="Create a secure password"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute right-3.5 text-outline hover:text-on-surface"
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label-md text-on-surface" htmlFor="signup-confirm-password">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-outline">
                    lock_reset
                  </span>
                  <input
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md py-3 pl-11 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="signup-confirm-password"
                    placeholder="Confirm your password"
                    required
                    type="password"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 py-1">
                <input
                  className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                  id="signup-terms"
                  required
                  type="checkbox"
                />
                <label className="text-body-sm text-on-surface-variant leading-relaxed select-none cursor-pointer" htmlFor="signup-terms">
                  I agree to the{" "}
                  <a className="text-primary font-medium hover:underline" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-primary font-medium hover:underline" href="#">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                className="w-full bg-primary text-on-primary text-label-md py-3.5 px-4 rounded-lg hover:opacity-95 transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Create Account</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>

            <div className="text-center pt-2">
              <p className="text-body-md text-on-surface-variant">
                Already have an account?{" "}
                <Link className="text-primary font-semibold hover:underline ml-1 cursor-pointer" to="/login">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
