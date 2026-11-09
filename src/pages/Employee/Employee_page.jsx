import { useState } from "react";

const Employee_page = (props) => {
  const [sdata, setsdata] = useState(JSON.parse(localStorage.getItem("Selected")).sdata);

  const ATcount = sdata.tasks.filter((t) => t.status === "active").length;
  const SBcount = sdata.tasks.filter((t) => t.status === "submitted").length;
  const APccount = sdata.tasks.filter((t) => t.status === "accepted").length;
  const RJcount = sdata.tasks.filter((t) => t.status === "rejected").length;

  /* ── Stats ── */
  const stats = [
    { label: 'Active', count: ATcount, color: 'text-blue-500', bg: 'bg-blue-500/10', icon: '⚡' },
    { label: 'Submitted', count: SBcount, color: 'text-amber-500', bg: 'bg-amber-500/10', icon: '📤' },
    { label: 'Accepted', count: APccount, color: 'text-emerald-500', bg: 'bg-emerald-500/10', icon: '✅' },
    { label: 'Rejected', count: RJcount, color: 'text-red-500', bg: 'bg-red-500/10', icon: '❌' },
  ]


  const priorityConfig = {
    High:   { badge: 'bg-amber-400/10 text-amber-400 border border-amber-400/25', border: 'border-l-amber-400', dot: 'bg-amber-400' },
    Medium: { badge: 'bg-blue-400/10 text-blue-400 border border-blue-400/20', border: 'border-l-blue-400', dot: 'bg-blue-400' },
    Low:    { badge: 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20', border: 'border-l-emerald-400', dot: 'bg-emerald-400' },
  }

  const statusConfig = {
    active:    'bg-blue-500/15 text-blue-500',
    submitted: 'bg-amber-500/15 text-amber-500',
    accepted:  'bg-emerald-500/15 text-emerald-500',
    rejected:  'bg-red-500/15 text-red-500',
  }
  

  const filters = ['All', 'active', 'submitted', 'accepted', 'rejected'];

  const completehandler=(taskid,condition)=>{
    const updatedtasks=sdata.tasks.map((t)=>t.id===taskid ? {...t, status:condition}:{...t});
    const updatedsdata={...sdata, tasks:updatedtasks};
    setsdata(updatedsdata);

    localStorage.setItem("Selected",JSON.stringify({role:"employee", sdata:updatedsdata}));

    const employees=JSON.parse(localStorage.getItem("employee"));

    const updatedemp=employees.map((e)=>e.id===updatedsdata.id ? updatedsdata : e);

    localStorage.setItem("employee",JSON.stringify(updatedemp));
  }

const [Activefilter, setActivefilter] = useState("All");
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
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-sm font-bold text-white cursor-pointer hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)] transition-shadow"></div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <div className="max-w-[1200px] mx-auto px-10 py-8 pb-16">

        {/* Header */}
        <div className="mb-8 flex justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-slate-100 mb-1.5 tracking-tight">
            Good Evening, <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{sdata.name}</span>
          </h1>
          <p className="text-sm text-slate-400/60">Here's an overview of your tasks and progress.</p>
          </div>
          <div className="px-8 py-4">
            <input onClick={()=>{
              props.handleLogout();
            }} className="text-Xl font-medium bg-red-500 p-2 rounded-2xl " type="button" value="LOG OUT" />
          </div>
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
              <span onClick={()=>{
                setActivefilter(f);
              }}
                key={f}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 
                  ${f === Activefilter
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
          {sdata.tasks.map((task) => {
            const pc = priorityConfig[task.priority];
            
            if (Activefilter === "All" || task.status === Activefilter) {
              return (
              <div key={task.id} className={`p-6 px-7 rounded-2xl bg-white/[0.025] border border-white/5 border-l-[3px] ${pc.border} backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08] cursor-default group`}>
                <div className="flex justify-between items-start">

                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-slate-100">{task.taskTitle}</h3>
                      {/* Priority Badge */}
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider ${pc.badge}`}>
                        {task.priority}
                      </span>
                      {/* Status Badge */}
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${statusConfig[task.status]}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-400/60 mb-3.5 leading-relaxed">{task.taskDescription}</p>
                    <div className="flex gap-5 items-center">
                      <span className="text-xs text-slate-400/50 flex items-center gap-1.5">
                        📅 Assigned: {task.assignedDate }
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
                    {task.status === 'active' && (
                      <button onClick={() => completehandler(task.id,"submitted")}
                        className="px-5 py-2.5 rounded-[10px] border-none bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-semibold cursor-pointer shadow-[0_4px_16px_rgba(99,102,241,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] active:translate-y-0 whitespace-nowrap select-none">
                        Submit Project
                      </button>
                    )}
                    {task.status === 'submitted' && (
                      <div className="flex flex-col align-bottom gap-5 select-none">
                      <span className="px-5 py-2.5 rounded-[10px] bg-amber-500/10 text-amber-500 text-[13px] font-semibold border border-amber-500/20 whitespace-nowrap select-none">
                        Awaiting Review
                      </span>
                      <button onClick={()=>completehandler(task.id,"active")} className="bg-red-500 px-4 py-2 rounded-[10px] flex justify-center font-bold text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(239,68,68,0.45)] active:translate-y-0 whitespace-nowrap cursor-pointer select-none">
                        Cancel Submit
                      </button>
                      </div>
                    )}
                    {task.status === 'accepted' && (
                      <span className="px-5 py-2.5 rounded-[10px] bg-emerald-500/10 text-emerald-500 text-[13px] font-semibold border border-emerald-500/20 whitespace-nowrap select-none">
                        ✅ Accepted
                      </span>
                    )}
                    {task.status === 'rejected' && (
                      <span className="px-5 py-2.5 rounded-[10px] bg-red-500/10 text-red-500 text-[13px] font-semibold border border-red-500/20 whitespace-nowrap select-none">
                        ✗ Rejected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Employee_page
