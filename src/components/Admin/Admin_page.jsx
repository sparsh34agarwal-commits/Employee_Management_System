

const Admin_page = () => {


  
  
  /* ── Dummy assigned tasks ── */
  const assignedTasks = [
    { id: 1, title: 'Redesign Landing Page', employee: 'John Doe', category: 'Design', priority: 'high', deadline: '02 Oct 2026', status: 'Active' },
    { id: 2, title: 'Fix Authentication Bug', employee: 'Sarah Kim', category: 'Development', priority: 'high', deadline: '28 Sep 2026', status: 'Active' },
    { id: 3, title: 'Write API Documentation', employee: 'Alex Chen', category: 'Documentation', priority: 'medium', deadline: '05 Oct 2026', status: 'Submitted' },
    { id: 4, title: 'Update Onboarding Flow', employee: 'Emily Park', category: 'UX', priority: 'medium', deadline: '30 Sep 2026', status: 'Active' },
    { id: 5, title: 'Database Cleanup Script', employee: 'Mike Ross', category: 'Backend', priority: 'low', deadline: '10 Oct 2026', status: 'Accepted' },
    { id: 6, title: 'Setup CI/CD Pipeline', employee: 'Lisa Wang', category: 'DevOps', priority: 'low', deadline: '25 Sep 2026', status: 'Rejected' },
    { id: 7, title: 'Mobile Responsive Fixes', employee: 'John Doe', category: 'Frontend', priority: 'high', deadline: '01 Oct 2026', status: 'Submitted' },
  ]

  const priorityConfig = {
    high:   { badge: 'bg-amber-400/10 text-amber-400 border border-amber-400/25', border: 'border-l-amber-400' },
    medium: { badge: 'bg-blue-400/10 text-blue-400 border border-blue-400/20', border: 'border-l-blue-400' },
    low:    { badge: 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20', border: 'border-l-emerald-400' },
  }

  const statusConfig = {
    Active:    'bg-blue-500/15 text-blue-500',
    Submitted: 'bg-amber-500/15 text-amber-500',
    Accepted:  'bg-emerald-500/15 text-emerald-500',
    Rejected:  'bg-red-500/15 text-red-500',
  }

  const employees = ['John Doe', 'Sarah Kim', 'Alex Chen', 'Emily Park', 'Mike Ross', 'Lisa Wang']
  const categories = ['Design', 'Development', 'Documentation', 'UX', 'Backend', 'DevOps', 'Frontend', 'Testing']

  const inputClasses = "w-full py-3.5 px-4 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-slate-200 text-sm outline-none transition-all duration-300 focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1),0_0_20px_rgba(99,102,241,0.05)] focus:bg-white/[0.06] placeholder:text-slate-400/35 font-['Inter',system-ui,sans-serif]"

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#111827] to-[#1a1a2e] font-['Inter',system-ui,sans-serif] text-slate-200">

      {/* ── Top Navbar ── */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white/[0.02] border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-extrabold text-base text-white shadow-[0_4px_16px_rgba(99,102,241,0.3)]">E</div>
          <span className="font-bold text-lg text-slate-100 tracking-tight">EMS</span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-500/12 text-red-400 font-semibold tracking-wider uppercase">Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.06] text-[13px] text-slate-400/70">
            🔍 Search...
          </div>
          <div className="relative cursor-pointer">
            <span className="text-lg">🔔</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[9px] font-bold flex items-center justify-center text-white border-2 border-[#111827]">3</div>
          </div>
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-sm font-bold text-white cursor-pointer hover:shadow-[0_4px_16px_rgba(239,68,68,0.4)] transition-shadow">A</div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <div className="max-w-[1300px] mx-auto px-10 py-8 pb-16">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-slate-100 mb-1.5 tracking-tight">
            Admin Dashboard 🛡️
          </h1>
          <p className="text-sm text-slate-400/60">Manage and assign tasks to your team.</p>
        </div>

        {/* ── Quick Stats Row ── */}
        <div className="grid grid-cols-4 gap-4 mb-9">
          {[
            { label: 'Total Tasks', count: 24, icon: '📋', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
            { label: 'Employees', count: 6, icon: '👥', color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { label: 'Pending Review', count: 5, icon: '⏳', color: 'text-amber-500', bg: 'bg-amber-500/10' },
            { label: 'Completed', count: 12, icon: '🎯', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          ].map((s) => (
            <div key={s.label} className="py-5 px-6 rounded-[14px] bg-white/[0.025] border border-white/5 flex items-center gap-4 hover:bg-white/[0.04] transition-colors cursor-default">
              <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center text-xl`}>{s.icon}</div>
              <div>
                <p className="text-xs text-slate-400/50 mb-1 uppercase tracking-wider font-medium">{s.label}</p>
                <p className={`text-[28px] font-bold ${s.color} leading-none`}>{s.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-2 gap-7">

          {/* ═══════ Left: Assign Task Form ═══════ */}
          <div className="p-8 rounded-[20px] bg-white/[0.025] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-base">➕</div>
              <h2 className="text-lg font-semibold text-slate-100">Assign New Task</h2>
            </div>

            <div className="flex flex-col gap-5">

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Task Title</label>
                <input type="text" placeholder="Enter task title..." className={inputClasses} />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Description</label>
                <textarea
                  placeholder="Describe the task in detail..."
                  rows={4}
                  className={`${inputClasses} resize-y min-h-[100px]`}
                />
              </div>

              {/* Two Column: Date & Deadline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Assign Date</label>
                  <input type="date" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Deadline</label>
                  <input type="date" className={inputClasses} />
                </div>
              </div>

              {/* Two Column: Assign To & Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Assign To</label>
                  <select className={`${inputClasses} cursor-pointer appearance-none`}>
                    <option value="" className="bg-[#1a1a2e]">Select Employee</option>
                    {employees.map((e) => (
                      <option key={e} value={e} className="bg-[#1a1a2e]">{e}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Category</label>
                  <select className={`${inputClasses} cursor-pointer appearance-none`}>
                    <option value="" className="bg-[#1a1a2e]">Select Category</option>
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#1a1a2e]">{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Priority Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300/60 mb-2 tracking-wider uppercase">Priority</label>
                <div className="flex gap-3">
                  <div className="flex-1 text-center py-3 rounded-[10px] bg-white/[0.03] border border-white/[0.06] text-slate-400/50 text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-emerald-400/10 hover:text-emerald-400 hover:border-emerald-400/25">
                    Low
                  </div>
                  <div className="flex-1 text-center py-3 rounded-[10px] bg-blue-400/10 border-[1.5px] border-blue-400/25 text-blue-400 text-[13px] font-semibold cursor-pointer transition-all duration-200">
                    Medium
                  </div>
                  <div className="flex-1 text-center py-3 rounded-[10px] bg-white/[0.03] border border-white/[0.06] text-slate-400/50 text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-amber-400/10 hover:text-amber-400 hover:border-amber-400/25">
                    High
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 rounded-xl border-none bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[15px] font-semibold cursor-pointer shadow-[0_8px_24px_rgba(99,102,241,0.3)] transition-all duration-300 mt-1 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] active:translate-y-0">
                Assign Task →
              </button>
            </div>
          </div>

          {/* ═══════ Right: Assigned Tasks Table ═══════ */}
          <div className="p-8 rounded-[20px] bg-white/[0.025] border border-white/5 backdrop-blur-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-[10px] bg-blue-500/15 flex items-center justify-center text-base">📋</div>
                <h2 className="text-lg font-semibold text-slate-100">All Assigned Tasks</h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-lg bg-indigo-500/12 text-indigo-400 font-semibold">
                {assignedTasks.length} Tasks
              </span>
            </div>

            {/* Task list */}
            <div className="flex flex-col gap-2.5 flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/[0.08] scrollbar-track-transparent">
              {assignedTasks.map((task) => {
                const ps = priorityConfig[task.priority]
                return (
                  <div key={task.id} className={`p-4 px-5 rounded-xl bg-white/[0.02] border border-white/[0.04] border-l-[3px] ${ps.border} transition-all duration-200 hover:bg-white/[0.04]`}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold text-slate-100">{task.title}</h4>
                      <div className="flex gap-1.5">
                        <span className={`px-2 py-0.5 rounded-[5px] text-[10px] font-semibold uppercase tracking-wider ${ps.badge}`}>
                          {task.priority}
                        </span>
                        <span className={`px-2 py-0.5 rounded-[5px] text-[10px] font-semibold ${statusConfig[task.status]}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-center">
                        <span className="text-xs text-slate-400/50 flex items-center gap-1">
                          👤 {task.employee}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-[5px] bg-white/[0.04] text-slate-400/50">
                          {task.category}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400/40">⏰ {task.deadline}</span>
                    </div>

                    {/* Action buttons for Submitted tasks */}
                    {task.status === 'Submitted' && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-white/[0.04]">
                        <button className="flex-1 py-2 rounded-lg border-none bg-emerald-500/12 text-emerald-500 text-xs font-semibold cursor-pointer transition-all duration-200 hover:bg-emerald-500/20">
                          ✓ Accept
                        </button>
                        <button className="flex-1 py-2 rounded-lg border-none bg-red-500/12 text-red-500 text-xs font-semibold cursor-pointer transition-all duration-200 hover:bg-red-500/20">
                          ✗ Reject
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_page
