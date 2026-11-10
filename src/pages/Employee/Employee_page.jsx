import { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────
const IconBolt    = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconSend    = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
const IconCheck   = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
const IconX       = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>;
const IconLogout  = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IconFilter  = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconCal     = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconClock   = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconTag     = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;

const Employee_page = (props) => {
  const [sdata, setsdata] = useState(JSON.parse(localStorage.getItem("Selected")).sdata);

  const ATcount  = sdata.tasks.filter((t) => t.status === "active").length;
  const SBcount  = sdata.tasks.filter((t) => t.status === "submitted").length;
  const APccount = sdata.tasks.filter((t) => t.status === "accepted").length;
  const RJcount  = sdata.tasks.filter((t) => t.status === "rejected").length;

  const stats = [
    { label: 'Active',    count: ATcount,  color: 'text-blue-600',    bg: 'bg-blue-50',    border: 'border-blue-200',    icon: <IconBolt />  },
    { label: 'Submitted', count: SBcount,  color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-200',   icon: <IconSend />  },
    { label: 'Accepted',  count: APccount, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: <IconCheck /> },
    { label: 'Rejected',  count: RJcount,  color: 'text-red-500',     bg: 'bg-red-50',     border: 'border-red-200',     icon: <IconX />     },
  ];

  const priorityConfig = {
    High:   { badge: 'bg-amber-100 text-amber-700 border border-amber-300',         border: 'border-l-amber-400'   },
    Medium: { badge: 'bg-blue-100 text-blue-700 border border-blue-300',            border: 'border-l-blue-400'    },
    Low:    { badge: 'bg-emerald-100 text-emerald-700 border border-emerald-300',   border: 'border-l-emerald-400' },
  };

  const statusConfig = {
    active:    'bg-blue-100 text-blue-700',
    submitted: 'bg-amber-100 text-amber-700',
    accepted:  'bg-emerald-100 text-emerald-700',
    rejected:  'bg-red-100 text-red-600',
  };

  const filters = ['All', 'active', 'submitted', 'accepted', 'rejected'];

  const completehandler = (taskid, condition) => {
    const updatedtasks = sdata.tasks.map((t) => t.id === taskid ? { ...t, status: condition } : { ...t });
    const updatedsdata = { ...sdata, tasks: updatedtasks };
    setsdata(updatedsdata);
    localStorage.setItem("Selected", JSON.stringify({ role: "employee", sdata: updatedsdata }));
    const employees    = JSON.parse(localStorage.getItem("employee"));
    const updatedemp   = employees.map((e) => e.id === updatedsdata.id ? updatedsdata : e);
    localStorage.setItem("employee", JSON.stringify(updatedemp));
  };

  const [Activefilter, setActivefilter] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',system-ui,sans-serif]" style={{color:'#1e293b'}}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-3.5 bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center font-black text-white text-base">E</div>
          <span className="font-bold text-slate-800 text-[17px] tracking-tight">WorkFlow EMS</span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold tracking-wider uppercase ml-1">Employee</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">Hello, <span className="font-semibold text-slate-700">{sdata.name}</span></span>
          <div className="w-px h-5 bg-slate-200" />
          <button
            onClick={() => props.handleLogout()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-semibold border border-red-200 hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <IconLogout /> Log Out
          </button>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-[1100px] mx-auto px-8 py-8 pb-20">

        {/* Page header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Good day, {sdata.name}</h1>
          <p className="text-slate-500 text-sm">Here's an overview of your assigned tasks.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 rounded-2xl bg-white border ${s.border} flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-default animate-fade-in-up stagger-${i + 1}`}
            >
              <div className={`w-11 h-11 rounded-xl ${s.bg} ${s.color} flex items-center justify-center border ${s.border} shrink-0`}>{s.icon}</div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5">{s.label}</p>
                <p className={`text-3xl font-bold ${s.color} leading-none`}>{s.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section header + filters */}
        <div className="flex items-center justify-between mb-5 animate-fade-in-up" style={{animationDelay:'0.2s'}}>
          <h2 className="text-lg font-semibold text-slate-800">Assigned Tasks</h2>
          <div className="flex items-center gap-2">
            <IconFilter />
            {filters.map((f) => (
              <span
                key={f}
                onClick={() => setActivefilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 capitalize
                  ${f === Activefilter
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Task Cards */}
        <div className="flex flex-col gap-3">
          {sdata.tasks.map((task, idx) => {
            const pc = priorityConfig[task.priority];
            if (Activefilter !== "All" && task.status !== Activefilter) return null;
            return (
              <div
                key={task.id}
                className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${pc.border} shadow-sm hover:shadow-md transition-all duration-200 p-5 px-6 animate-fade-in-up`}
                style={{ animationDelay: `${0.05 * idx + 0.25}s` }}
              >
                <div className="flex justify-between items-start">

                  {/* Left */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-slate-800">{task.taskTitle}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${pc.badge}`}>
                        {task.priority}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize ${statusConfig[task.status]}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">{task.taskDescription}</p>
                    <div className="flex gap-4 items-center flex-wrap">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5"><IconCal /> {task.assignedDate}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1.5"><IconClock /> {task.deadline}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200 flex items-center gap-1"><IconTag /> {task.category}</span>
                    </div>
                  </div>

                  {/* Right actions */}
                  <div className="flex flex-col items-end gap-2 ml-6 shrink-0">
                    {task.status === 'active' && (
                      <button
                        onClick={() => completehandler(task.id, "submitted")}
                        className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0 whitespace-nowrap select-none"
                      >
                        Submit Task
                      </button>
                    )}
                    {task.status === 'submitted' && (
                      <>
                        <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200 whitespace-nowrap">
                          Awaiting Review
                        </span>
                        <button
                          onClick={() => completehandler(task.id, "active")}
                          className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-600 text-red-600 hover:text-white text-xs font-semibold border border-red-200 hover:border-red-600 transition-all duration-200 cursor-pointer whitespace-nowrap select-none"
                        >
                          Cancel Submit
                        </button>
                      </>
                    )}
                    {task.status === 'accepted' && (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 whitespace-nowrap flex items-center gap-1.5">
                        Completed
                      </span>
                    )}
                    {task.status === 'rejected' && (
                      <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-semibold border border-red-200 whitespace-nowrap flex items-center gap-1.5">
                        <IconX /> Rejected
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Employee_page
