import { useState } from "react";



const Login_page = ({handlelogin}) => {

  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const submithandler=(e)=>{
              e.preventDefault(e);
              
              handlelogin(e.target[0].value,e.target[1].value);
              setEmail("");
              setPass("");
            }
  return (
    <div className="min-h-screen flex items-center justify-center  font-['Inter',system-ui,sans-serif] relative overflow-hidden">

     
      {/* Login Card */}
      <div className="w-[420px] p-12 rounded-3xl bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.06] shadow-[0_32px_64px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.04)] relative z-10">

        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-violet-400 flex items-center justify-center mx-auto mb-5 shadow-[0_8px_32px_rgba(99,102,241,0.3)] text-3xl">
            <img className="object-cover w-full h-full border-2 border-blue-500" src="https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <h1 className="text-[26px] font-bold text-slate-100 mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400/80 tracking-wide">
            Sign in to Employee Management System
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">

            <form onSubmit={(e)=>{
             submithandler(e);
            }}>
              
          {/* Email Field */}
          <div>
            <label className="block text-[13px] font-medium text-slate-300/70 mb-2 tracking-wider uppercase">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/50 text-base">✉</div>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full py-3.5 pl-11 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-200 text-[15px] outline-none transition-all duration-300 focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1),0_0_20px_rgba(99,102,241,0.05)] focus:bg-white/[0.06] placeholder:text-slate-400/35"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[13px] font-medium text-slate-300/70 mb-2 tracking-wider uppercase">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/50 text-base">🔒</div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-3.5 pl-11 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-200 text-[15px] outline-none transition-all duration-300 focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1),0_0_20px_rgba(99,102,241,0.05)] focus:bg-white/[0.06] placeholder:text-slate-400/35"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-slate-400/70">
              <div className="w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-white/15 bg-white/[0.03]" />
              Remember me
            </label>
            <span className="text-[13px] text-indigo-400 cursor-pointer font-medium hover:text-indigo-300 transition-colors">
              Forgot password?
            </span>
          </div>

          {/* Sign In Button */}
          <button className="w-full py-4 rounded-xl border-none bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[15px] font-semibold cursor-pointer transition-all duration-300 shadow-[0_8px_24px_rgba(99,102,241,0.3)] tracking-wide mt-2 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] active:translate-y-0">
            Sign In →
          </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-1">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-xs text-slate-400/50 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Admin Login */}
          <button className="w-full py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 text-sm font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-slate-300">
            🛡️ Login as Admin
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-[13px] text-slate-400/50 mt-7">
          Secured by <span className="text-indigo-400 font-medium">EMS</span> Enterprise
        </p>
      </div>
    </div>
  )
}

export default Login_page