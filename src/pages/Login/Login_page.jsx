
import { useState } from "react";
import Snowfall from "react-snowfall";

// ── Inline SVG icons (no emoji, no library needed) ──────────────────
const IconMail = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconLock = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const IconUsers = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBarChart = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const IconShield = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const Login_page = ({handlelogin}) => {

  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const submithandler = (e) => {
    e.preventDefault(e);
    handlelogin(e.target[0].value, e.target[1].value);
    setEmail("");
    setPass("");
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row font-['Inter',system-ui,sans-serif] relative overflow-x-hidden scroll-smooth"
      style={{
        background:
          "linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 50%, #e8f4fd 100%)",
      }}
    >
      {/* Snowflake Falling Effect */}
      <Snowfall
        color="#7fb2eb"
        snowflakeCount={200}
        speed={[0.6, 2.2]}
        wind={[-0.5, 2.5]}
        radius={[0.8, 2.5]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      {/* Left branding panel: sticky beneath on mobile so login sheet slides over it */}
      <div className="w-full lg:w-[45%] min-h-screen min-h-[100dvh] flex flex-col justify-between bg-blue-700 p-7 sm:p-12 lg:p-14 sticky top-0 lg:static z-0 overflow-hidden shrink-0 animate-fade-in">
        <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full bg-blue-600 opacity-40 pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[260px] h-[260px] rounded-full bg-blue-800 opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-blue-700 text-lg shadow-sm">
              E
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              WorkFlow EMS
            </span>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 my-auto py-8">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-4">
            Manage your team<br />with clarity.
          </h2>
          <p className="text-blue-200 text-sm sm:text-[15px] leading-relaxed max-w-sm mb-8">
            Streamline task assignment, track progress, and keep your workforce aligned — all in one place.
          </p>

          {/* Feature bullets */}
          <div className="flex flex-col gap-3.5">
            {[
              { icon: <IconCheck />, text: "Real-time task tracking" },
              { icon: <IconUsers />, text: "Employee performance overview" },
              { icon: <IconBarChart />, text: "Instant status updates" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <span className="text-blue-100 text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile scroll-down prompt */}
        <div className="relative z-10 lg:hidden pt-4 pb-2">
          <button
            type="button"
            onClick={() => {
              document.getElementById("login-form-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/30 text-white text-sm font-semibold transition-all backdrop-blur-md border border-white/20 shadow-sm animate-bounce cursor-pointer select-none"
          >
            <span>Scroll down to sign in</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right login panel: sheet that slides above the blue background on mobile */}
      <div
        id="login-form-section"
        className="w-full flex-1 min-h-screen min-h-[100dvh] flex flex-col items-center justify-center p-5 sm:p-8 lg:p-12 relative z-20 rounded-t-[36px] sm:rounded-t-[44px] lg:rounded-none shadow-[0_-25px_60px_rgba(0,0,0,0.35)] lg:shadow-none border-t border-white/60 lg:border-t-0"
        style={{
          background:
            "linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 50%, #e8f4fd 100%)",
        }}
      >
        {/* Subtle sheet drag indicator for mobile */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300/80 mb-6 lg:hidden shrink-0" />

        <div className="w-full max-w-[420px] bg-white sm:bg-transparent p-6 sm:p-0 rounded-3xl sm:rounded-none shadow-xl sm:shadow-none border border-slate-200/80 sm:border-none">

          {/* Header on form */}
          <h1 className="text-2xl sm:text-[28px] font-bold text-slate-800 mb-1 tracking-tight">
            Welcome back
          </h1>
          <p className="text-slate-500 text-sm mb-6 sm:mb-8">
            Sign in to your account to continue
          </p>

          <form onSubmit={submithandler} className="flex flex-col gap-4 sm:gap-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide uppercase">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <IconMail />
                </span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full py-3 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2 tracking-wide uppercase">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <IconLock />
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-3 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-500">
                <div className="w-4 h-4 rounded border border-slate-300 bg-white" />
                Remember me
              </label>
            </div>

            {/* Sign in */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 tracking-wide mt-1"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Admin login */}
          <button className="w-full py-3 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 shadow-sm">
            <IconShield />
            Login as Admin
          </button>

          <p className="text-center text-xs text-slate-400 mt-6 sm:mt-7">
            Secured by <span className="text-blue-600 font-semibold">WorkFlow EMS</span> Enterprise
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login_page
