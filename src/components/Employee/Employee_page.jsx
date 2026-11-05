const Employee_page = () => {

  /* ── Dummy data (hardcoded, no state) ── */
  const stats = [
    { label: 'Active', count: 3, color: 'text-blue-500', bg: 'bg-blue-500/10', icon: '⚡' },
    { label: 'Submitted', count: 5, color: 'text-amber-500', bg: 'bg-amber-500/10', icon: '📤' },
    { label: 'Accepted', count: 8, color: 'text-emerald-500', bg: 'bg-emerald-500/10', icon: '✅' },
    { label: 'Rejected', count: 2, color: 'text-red-500', bg: 'bg-red-500/10', icon: '❌' },
  ]

  const tasks = [
    { id: 1, title: 'Redesign Landing Page', desc: 'Update the hero section and CTA buttons with new brand guidelines.', date: '27 Sep 2026', deadline: '02 Oct 2026', category: 'Design', priority: 'high', status: 'Active' },
    { id: 2, title: 'Fix Authentication Bug', desc: 'Resolve token expiry issue causing logout on page refresh.', date: '25 Sep 2026', deadline: '28 Sep 2026', category: 'Development', priority: 'high', status: 'Active' },
    { id: 3, title: 'Write API Documentation', desc: 'Document all REST endpoints for the employee module.', date: '24 Sep 2026', deadline: '05 Oct 2026', category: 'Documentation', priority: 'medium', status: 'Submitted' },
    { id: 4, title: 'Update User Onboarding Flow', desc: 'Improve the 3-step onboarding wizard for new employees.', date: '22 Sep 2026', deadline: '30 Sep 2026', category: 'UX', priority: 'medium', status: 'Active' },
    { id: 5, title: 'Database Cleanup Script', desc: 'Remove orphaned records from the tasks and logs tables.', date: '20 Sep 2026', deadline: '10 Oct 2026', category: 'Backend', priority: 'low', status: 'Accepted' },
    { id: 6, title: 'Setup CI/CD Pipeline', desc: 'Configure GitHub Actions for auto deploy to staging.', date: '18 Sep 2026', deadline: '25 Sep 2026', category: 'DevOps', priority: 'low', status: 'Rejected' },
  ]

  const priorityConfig = {
    high:   { badge: 'bg-amber-400/10 text-amber-400 border border-amber-400/25', border: 'border-l-amber-400', dot: 'bg-amber-400' },
    medium: { badge: 'bg-blue-400/10 text-blue-400 border border-blue-400/20', border: 'border-l-blue-400', dot: 'bg-blue-400' },
    low:    { badge: 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20', border: 'border-l-emerald-400', dot: 'bg-emerald-400' },
  }

  const statusConfig = {
    Active:    'bg-blue-500/15 text-blue-500',
    Submitted: 'bg-amber-500/15 text-amber-500',
    Accepted:  'bg-emerald-500/15 text-emerald-500',
    Rejected:  'bg-red-500/15 text-red-500',
  }

  const filters = ['All', 'Active', 'Submitted', 'Accepted', 'Rejected']

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#111827] to-[#1a1a2e] font-['Inter',system-ui,sans-serif] text-slate-200">

      {/* ── Top Navbar ── */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white/[0.02] border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-extrabold text-base text-white shadow-[0_4px_16px_rgba(99,102,241,0.3)]">E</div>
          <span className="font-bold text-lg text-slate-100 tracking-tight">EMS</span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 font-semibold tracking-wider uppercase">Employee</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.06] text-[13px] text-slate-400/70">
            🔍 Search tasks...
          </div>
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-sm font-bold text-white cursor-pointer hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)] transition-shadow">JD</div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto px-10 py-8 pb-16">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-slate-100 mb-1.5 tracking-tight">
            Good Evening, <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">John</span> 👋
          </h1>
          <p className="text-sm text-slate-400/60">Here's an overview of your tasks and progress.</p>
        </div>

        {/* ── Stats Cards ── */}
        <div className="grid grid-cols-4 gap-5 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-white/[0.025] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08] cursor-default relative overflow-hidden group">
              <div className={`absolute -top-5 -right-5 w-20 h-20 rounded-full ${s.bg} blur-xl opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="flex items-center justify-between relative">
                <div>
                  <p className="text-[13px] text-slate-400/60 mb-2 uppercase tracking-wider font-medium">{s.label}</p>
                  <p className={`text-4xl font-bold ${s.color} leading-none`}>{s.count}</p>
                </div>
                <div className={`w-12 h-12 rounded-[14px] ${s.bg} flex items-center justify-center text-[22px]`}>{s.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Section Header ── */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-slate-100">Assigned Tasks</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <span
                key={f}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200
                  ${f === 'All'
                    ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/25'
                    : 'bg-white/[0.04] text-slate-400/60 border border-white/5 hover:bg-white/[0.06] hover:text-slate-400'
                  }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* ── Task Cards ── */}
        <div className="flex flex-col gap-3.5">
          {tasks.map((task) => {
            const pc = priorityConfig[task.priority]
            return (
              <div key={task.id} className={`p-6 px-7 rounded-2xl bg-white/[0.025] border border-white/5 border-l-[3px] ${pc.border} backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08] cursor-default group`}>
                <div className="flex justify-between items-start">

                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-slate-100">{task.title}</h3>
                      {/* Priority Badge */}
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider ${pc.badge}`}>
                        {task.priority}
                      </span>
                      {/* Status Badge */}
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${statusConfig[task.status]}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-400/60 mb-3.5 leading-relaxed">{task.desc}</p>
                    <div className="flex gap-5 items-center">
                      <span className="text-xs text-slate-400/50 flex items-center gap-1.5">
                        📅 Assigned: {task.date}
                      </span>
                      <span className="text-xs text-slate-400/50 flex items-center gap-1.5">
                        ⏰ Deadline: {task.deadline}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-400/60 border border-white/[0.06]">
                        {task.category}
                      </span>
                    </div>
                  </div>

                  {/* Right action */}
                  <div className="flex gap-2 ml-5">
                    {task.status === 'Active' && (
                      <button className="px-5 py-2.5 rounded-[10px] border-none bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-semibold cursor-pointer shadow-[0_4px_16px_rgba(99,102,241,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] active:translate-y-0 whitespace-nowrap">
                        Submit Task
                      </button>
                    )}
                    {task.status === 'Submitted' && (
                      <span className="px-5 py-2.5 rounded-[10px] bg-amber-500/10 text-amber-500 text-[13px] font-semibold border border-amber-500/20 whitespace-nowrap">
                        ⏳ Awaiting Review
                      </span>
                    )}
                    {task.status === 'Accepted' && (
                      <span className="px-5 py-2.5 rounded-[10px] bg-emerald-500/10 text-emerald-500 text-[13px] font-semibold border border-emerald-500/20 whitespace-nowrap">
                        ✅ Completed
                      </span>
                    )}
                    {task.status === 'Rejected' && (
                      <span className="px-5 py-2.5 rounded-[10px] bg-red-500/10 text-red-500 text-[13px] font-semibold border border-red-500/20 whitespace-nowrap">
                        ✗ Rejected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Employee_page
