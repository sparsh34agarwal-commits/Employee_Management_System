import { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────
const IconClipboard = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
  </svg>
);
const IconUsers = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconClock = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconTarget = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const IconBell = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const IconLogout = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconCheck = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconXmark = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const IconUser = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconCalSmall = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconClockSm = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconPlus = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconFilter = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const Admin_page = (props) => {
  const [employeeData, setEmployeeData] = useState(() => {
    return JSON.parse(localStorage.getItem("employee")) || [];
  });


  const assignhandler = (e) => {
    e.preventDefault();
    const taskTitle = e.target[0].value.trim();
const taskDescription = e.target[1].value.trim();

if (!taskTitle || !taskDescription) {
  alert("Please enter valid text. Spaces alone are not allowed.");
  return;
}
if(newpriority===""){
  alert("Please Select Priority.");
  return;
}

    const FormData = {
      id: Date.now(),
      taskTitle:taskTitle,
      taskDescription: taskDescription,
      assignedDate: e.target[2].value,
      deadline: e.target[3].value,
      employeeID: Number(e.target[4].value),
      category: e.target[5].value,
      status: "active",
      priority: newpriority,
    };

    const updatedEmployees = employeeData.map((employee) => {
      if (employee.id === FormData.employeeID) {
        return {
          ...employee,
          tasks: [...employee.tasks, FormData],
        };
      }

      return employee;
    });

    setEmployeeData(updatedEmployees);

    localStorage.setItem("employee", JSON.stringify(updatedEmployees));

    e.target.reset();
    setnewpriority("");
  };

  const updateTasks = (empID, taskID, updatedstatus) => {
    const updatedemp = employeeData.map((employee) => {
      if (employee.id === empID) {
        return {
          ...employee,
          tasks: employee.tasks.map((task) =>
            task.id === taskID ? { ...task, status: updatedstatus } : task,
          ),
        };
      }
      return employee;
    });
    setEmployeeData(updatedemp);
    localStorage.setItem("employee", JSON.stringify(updatedemp));
  };

  const TotalTasks = employeeData.flatMap((employee) =>
    employee.tasks.map((task) => ({
      ...task,
      employeeName: employee.name,
      employeeId: employee.id,
    })),
  );

  const [newpriority, setnewpriority] = useState("");

  const priorityConfig = {
    High: {
      badge: "bg-amber-100 text-amber-700 border border-amber-300",
      border: "border-l-amber-400",
    },
    Medium: {
      badge: "bg-blue-100 text-blue-700 border border-blue-300",
      border: "border-l-blue-400",
    },
    Low: {
      badge: "bg-emerald-100 text-emerald-700 border border-emerald-300",
      border: "border-l-emerald-400",
    },
  };

  const statusConfig = {
    active: "bg-blue-100 text-blue-700",
    submitted: "bg-amber-100 text-amber-700",
    accepted: "bg-emerald-100 text-emerald-700",
    rejected: "bg-red-100 text-red-600",
  };

  const filters = ["All", "active", "submitted", "accepted", "rejected"];
  const [Activefilter, setActivefilter] = useState("All");

  // const employees  = ['John Doe', 'Sarah Kim', 'Alex Chen', 'Emily Park', 'Mike Ross', 'Lisa Wang'];
  const categories = [
    "Design",
    "Development",
    "Documentation",
    "UX",
    "Backend",
    "DevOps",
    "Frontend",
    "Testing",
  ];

  const inputClasses =
    "w-full py-2.5 px-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 placeholder:text-slate-400 shadow-sm";

  const totalCount = TotalTasks.length;
  const empCount = employeeData.length;
  const pendingCount = TotalTasks.filter(
    (t) => t.status === "submitted",
  ).length;
  const acceptedCount = TotalTasks.filter(
    (t) => t.status === "accepted",
  ).length;

  return (
    <div
      className="select-none min-h-screen bg-slate-50 font-['Inter',system-ui,sans-serif]"
      style={{ color: "#1e293b" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-3.5 bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center font-black text-white text-base">
            E
          </div>
          <span className="font-bold text-slate-800 text-[17px] tracking-tight">
            WorkFlow EMS
          </span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold tracking-wider uppercase ml-1">
            Admin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
            <IconBell />
            {pendingCount > 0 && (
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-[9px] font-bold flex items-center justify-center text-white">
                {pendingCount}
              </div>
            )}
          </div>
          <div className="w-px h-5 bg-slate-200" />
          <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <span className="text-sm font-medium text-slate-700">Admin</span>
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
      <div className="max-w-[1300px] mx-auto px-8 py-8 pb-20">
        {/* Page header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">
            Admin Dashboard
          </h1>
          <p className="text-[#1e293b] text-sm">
            Manage your team's tasks and assignments.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Tasks",
              count: totalCount,
              icon: <IconClipboard />,
              color: "text-blue-600",
              bg: "bg-blue-50",
              border: "border-blue-200",
            },
            {
              label: "Employees",
              count: empCount,
              icon: <IconUsers />,
              color: "text-indigo-600",
              bg: "bg-indigo-50",
              border: "border-indigo-200",
            },
            {
              label: "Pending Review",
              count: pendingCount,
              icon: <IconClock />,
              color: "text-amber-600",
              bg: "bg-amber-50",
              border: "border-amber-200",
            },
            {
              label: "Completed",
              count: acceptedCount,
              icon: <IconTarget />,
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-emerald-200",
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`p-5 rounded-2xl bg-white border ${s.border} flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-default animate-fade-in-up stagger-${i + 1}`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${s.bg} ${s.color} flex items-center justify-center border ${s.border} shrink-0`}
              >
                {s.icon}
              </div>
              <div>
                <p className="text-xs text-[#1e293b] uppercase tracking-wider font-medium mb-0.5">
                  {s.label}
                </p>
                <p className={`text-3xl font-bold ${s.color} leading-none`}>
                  {s.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*filters */}
        <div
          className="flex items-center justify-between mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2">
            <IconFilter />
            {filters.map((f) => (
              <span
                key={f}
                onClick={() => setActivefilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 capitalize
                  ${
                    f === Activefilter
                      ? "bg-blue-700 text-white shadow-sm"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Two column layout, assigned tasks list and assign new task */}
        <div className="grid grid-cols-[1fr_380px] gap-6">
          {/* Left: All Tasks */}
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-sm animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <IconClipboard />
                </div>
                <h2 className="text-base font-semibold text-slate-800">
                  All Assigned Tasks
                </h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                {TotalTasks.length} tasks
              </span>
            </div>

            <div className="flex flex-col max-h-[600px] overflow-y-auto">
              {TotalTasks.map((task, idx) => {
                const ps = priorityConfig[task.priority];
                if (Activefilter !== "All" && task.status !== Activefilter)
                  return null;
                return (
                  <div
                    key={`${task.employeeId}-${task.id}`}
                    className={`p-4 px-6 border-b border-slate-100 border-l-4 ${ps.border} hover:bg-slate-50 transition-colors duration-150 animate-fade-in-up`}
                    style={{ animationDelay: `${0.04 * idx + 0.3}s` }}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {task.taskTitle}
                      </h4>
                      <div className="flex gap-1.5 ml-3 shrink-0">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${ps.badge}`}
                        >
                          {task.priority}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize ${statusConfig[task.status]}`}
                        >
                          {task.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 items-center">
                        <span className="text-xs text-[#1e293b] flex items-center gap-1">
                          <IconUser /> {task.employeeName}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                          {task.category}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#1e293b] flex items-center gap-1">
                        <IconClockSm /> {task.deadline}
                      </span>
                    </div>

                    {task.status === "submitted" && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                        <button
                          onClick={() =>
                            updateTasks(task.employeeId, task.id, "accepted")
                          }
                          className="flex-1 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 cursor-pointer transition-all duration-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 flex items-center justify-center gap-1"
                        >
                          <IconCheck /> Accept
                        </button>
                        <button
                          onClick={() =>
                            updateTasks(task.employeeId, task.id, "rejected")
                          }
                          className="flex-1 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-semibold border border-red-200 cursor-pointer transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600 flex items-center justify-center gap-1"
                        >
                          <IconXmark /> Reject
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Assign Task form */}
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-sm h-fit animate-slide-in-right"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="flex items-center gap-2.5 px-6 py-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <IconPlus />
              </div>
              <h2 className="text-base font-semibold text-slate-800">
                Assign New Task
              </h2>
            </div>

            <form
              onSubmit={(e) => {
                assignhandler(e);
              }}
              className="flex flex-col gap-4 p-6"
            >
              <div>
                <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                  Task Title
                </label>
                <input required
                  type="text"
                  placeholder="Enter task title..."
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                  Description
                </label>
                <textarea required
                  placeholder="Describe the task..."
                  rows={3}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                    Assign Date
                  </label>
                  <input required type="date" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                    Deadline
                  </label>
                  <input required type="date" className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                    Assign To
                  </label>

                  <select required
                    defaultValue=""
                    className={`${inputClasses} cursor-pointer`}
                  >
                    <option disabled value="">
                      Select Employee
                    </option>

                    {employeeData.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                    Category
                  </label>
                  <select required defaultValue="" className={`${inputClasses} cursor-pointer`}>
                    <option disabled value="">
                      Select Category
                    </option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1e293b] mb-1.5 uppercase tracking-wide">
                  Priority
                </label>
                <div className="flex gap-2">
                  {["Low", "Medium", "High"].map((p) => (
                    <div
                      onClick={(e) => {
                        console.log(e);
                        setnewpriority(e.target.innerText);
                      }}
                      key={p}
                      className={`flex-1 text-center py-2 rounded-xl text-xs font-semibold cursor-pointer border transition-all duration-200
                      ${p === "Low" ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" : ""}
                      ${p === "Medium" ? "bg-blue-50 text-blue-700 border-blue-300 " : ""}
                      ${p === "High" ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" : ""}
                      ${p === newpriority ? "ring-2" : ""}
                    `}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 mt-1 flex items-center justify-center gap-2"
              >
                <IconPlus /> Assign Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_page;
