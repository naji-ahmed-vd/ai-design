export default function HospitalDashboard() {
  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] overflow-hidden h-screen flex font-['Inter',sans-serif]">
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 flex flex-col bg-white border-r border-[#e2e8f0] h-full transition-all duration-300">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-[#6927c9] to-[#521e9c] aspect-square rounded-lg size-10 flex items-center justify-center shadow-lg shadow-[#6927c9]/20">
              <span className="material-symbols-outlined text-white">local_hospital</span>
            </div>
            <h1 className="text-[#1a1a1a] text-lg font-bold tracking-tight">Hospital</h1>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#6927c9] hover:bg-[#5e22b2] text-white py-3 px-4 rounded-lg font-semibold shadow-md shadow-[#6927c9]/10 transition-all mb-6">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Register patient</span>
          </button>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#6927c9]/5 text-[#6927c9] border-l-4 border-[#6927c9] shadow-sm" href="#">
                <span className="material-symbols-outlined filled">dashboard</span>
                <span className="font-semibold text-sm">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#64748b] hover:bg-slate-50 hover:text-[#1a1a1a] transition-colors group" href="#">
                <span className="material-symbols-outlined group-hover:text-[#6927c9] transition-colors">folder</span>
                <span className="font-medium text-sm">Projects</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#64748b] hover:bg-slate-50 hover:text-[#1a1a1a] transition-colors group" href="#">
                <span className="material-symbols-outlined group-hover:text-[#6927c9] transition-colors">check_box</span>
                <span className="font-medium text-sm">Tasks</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#64748b] hover:bg-slate-50 hover:text-[#1a1a1a] transition-colors group" href="#">
                <span className="material-symbols-outlined group-hover:text-[#6927c9] transition-colors">bar_chart</span>
                <span className="font-medium text-sm">Reports</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-[#e2e8f0]">
          <ul className="flex flex-col gap-1">
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#64748b] hover:bg-slate-50 hover:text-[#1a1a1a] transition-colors group" href="#">
                <span className="material-symbols-outlined group-hover:text-[#6927c9] transition-colors">settings</span>
                <span className="font-medium text-sm">Settings</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#64748b] hover:bg-red-50 hover:text-red-600 transition-colors group" href="#">
                <span className="material-symbols-outlined group-hover:text-red-600 transition-colors">logout</span>
                <span className="font-medium text-sm">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8f9fa] relative">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-[#e2e8f0] bg-white/80 backdrop-blur-md z-10 shrink-0">
          <h2 className="text-xl font-bold text-[#1a1a1a] tracking-tight">Dashboard Overview</h2>
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b] group-focus-within:text-[#6927c9] transition-colors material-symbols-outlined">search</span>
              <input
                className="w-full bg-slate-50 border border-[#e2e8f0] rounded-lg py-2.5 pl-10 pr-4 text-sm text-[#1a1a1a] placeholder-[#64748b] focus:outline-none focus:border-[#6927c9] focus:ring-1 focus:ring-[#6927c9]/20 transition-all"
                placeholder="Search patients, doctors, records..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-[#e2e8f0]"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 p-1.5 pr-3 rounded-full transition-colors">
              <img
                alt="Doctor profile"
                className="size-8 rounded-full object-cover ring-2 ring-slate-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZRnUfvxEY2D7qAxzswfKsiF0I8ZHqfB7JiuqlOrVET7f9edqGubm-vvbYdDL65-mca1_ig23PKzOCv-c4LCB84a1UosDm09qbnpjC3T-AaCCZMiIiFzqYsyF1NGJIIrcd7CYLzqYGgrf3wIUODnfh_GawjHq-OdgHq_dtpIyAmbjTiVdIZQq877mu3UAKa2U1ro1AtRttORrVOev9WvBcsOhbSFa1LxJxNaMvSYVAXRq9ZTbvDAQJhXdYhI7Acl2FT8LoeYD1EFYX"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-[#1a1a1a] leading-none">Dr. Sarah C.</p>
                <p className="text-xs text-[#64748b] mt-0.5">Admin</p>
              </div>
              <span className="material-symbols-outlined text-[#64748b] text-sm">expand_more</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#6927c9]/30 transition-all shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#6927c9]/10 rounded-lg text-[#6927c9] group-hover:bg-[#6927c9] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">person_add</span>
                  </div>
                  <span className="flex items-center text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                    +12%
                  </span>
                </div>
                <h3 className="text-[#64748b] text-sm font-medium">Total Patients</h3>
                <p className="text-2xl font-bold text-[#1a1a1a] mt-1">1,240</p>
                <p className="text-xs text-[#64748b] mt-1">vs last month</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#6927c9]/30 transition-all shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <span className="flex items-center text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                    +5%
                  </span>
                </div>
                <h3 className="text-[#64748b] text-sm font-medium">Total Appointments</h3>
                <p className="text-2xl font-bold text-[#1a1a1a] mt-1">3,402</p>
                <p className="text-xs text-[#64748b] mt-1">vs last month</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#6927c9]/30 transition-all shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">prescriptions</span>
                  </div>
                  <span className="flex items-center text-xs font-semibold text-[#f97316] bg-[#f97316]/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span>
                    -2%
                  </span>
                </div>
                <h3 className="text-[#64748b] text-sm font-medium">Total Prescriptions</h3>
                <p className="text-2xl font-bold text-[#1a1a1a] mt-1">5,100</p>
                <p className="text-xs text-[#64748b] mt-1">vs last month</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#6927c9]/30 transition-all shadow-sm group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-teal-50 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <span className="flex items-center text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                    +8%
                  </span>
                </div>
                <h3 className="text-[#64748b] text-sm font-medium">Total Invoices</h3>
                <p className="text-2xl font-bold text-[#1a1a1a] mt-1">$120k</p>
                <p className="text-xs text-[#64748b] mt-1">vs last month</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Trends Chart */}
              <div className="lg:col-span-2 bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Outpatients vs Inpatients Trends</h3>
                    <p className="text-sm text-[#64748b]">Patient visits over time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-[#e2e8f0]">
                      <div className="size-2 rounded-full bg-[#6927c9]"></div>
                      <span className="text-xs text-[#64748b] font-medium">Inpatients</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-[#e2e8f0]">
                      <div className="size-2 rounded-full bg-[#cbd5e1]"></div>
                      <span className="text-xs text-[#64748b] font-medium">Outpatients</span>
                    </div>
                    <select className="bg-white border border-[#e2e8f0] text-[#1a1a1a] text-xs font-medium rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#6927c9] cursor-pointer transition-colors">
                      <option>Last 6 Months</option>
                      <option>Last Year</option>
                    </select>
                  </div>
                </div>
                <div className="relative h-[240px] w-full">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <line stroke="#e2e8f0" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="10" y2="10" />
                    <line stroke="#e2e8f0" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="20" y2="20" />
                    <line stroke="#e2e8f0" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="30" y2="30" />
                    <line stroke="#e2e8f0" strokeDasharray="2" strokeWidth="0.2" x1="0" x2="100" y1="40" y2="40" />
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6927c9" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#6927c9" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 C10,32 20,40 30,25 C40,10 50,15 60,20 C70,25 80,15 90,10 L100,15 L100,50 L0,50 Z" fill="url(#chartGradient)" />
                    <path d="M0,35 C10,32 20,40 30,25 C40,10 50,15 60,20 C70,25 80,15 90,10 L100,15" fill="none" stroke="#6927c9" strokeWidth="1.5" />
                    <path d="M0,40 C10,38 20,42 30,35 C40,28 50,32 60,30 C70,28 80,35 90,25 L100,20" fill="none" stroke="#94a3b8" strokeDasharray="3" strokeWidth="1.5" />
                  </svg>
                  <div className="flex justify-between text-xs text-[#64748b] mt-2 px-1 font-medium">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

              {/* Gender Donut Chart */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">Patients by Gender</h3>
                  <p className="text-sm text-[#64748b]">Demographic distribution</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  <div className="relative size-48">
                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                      <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                      <path className="text-[#6927c9]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="55, 100" strokeWidth="3.8" />
                      <path className="text-blue-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="35, 100" strokeDashoffset="-55" strokeWidth="3.8" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-[#1a1a1a]">1,240</span>
                      <span className="text-xs text-[#64748b] font-medium">Patients</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 w-full mt-6">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="size-2 rounded-full bg-[#6927c9]"></div>
                        <span className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">Female</span>
                      </div>
                      <span className="text-sm font-bold text-[#1a1a1a]">55%</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-[#e2e8f0]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="size-2 rounded-full bg-blue-400"></div>
                        <span className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">Male</span>
                      </div>
                      <span className="text-sm font-bold text-[#1a1a1a]">35%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="size-2 rounded-full bg-slate-200"></div>
                        <span className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">Other</span>
                      </div>
                      <span className="text-sm font-bold text-[#1a1a1a]">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bar Chart */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-base font-bold text-[#1a1a1a]">Admitted vs Discharged</h3>
                  <div className="bg-slate-50 border border-[#e2e8f0] rounded p-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[#64748b] text-sm">more_horiz</span>
                  </div>
                </div>
                <div className="h-[150px] w-full flex items-end gap-2 px-1">
                  {[
                    { top: '40%', bottom: '60%' },
                    { top: '30%', bottom: '50%' },
                    { top: '50%', bottom: '70%' },
                    { top: '45%', bottom: '65%' },
                    { top: '35%', bottom: '45%' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group">
                      <div className="w-full bg-slate-100 rounded-t-sm group-hover:bg-slate-200 transition-all" style={{ height: bar.top }}></div>
                      <div className="w-full bg-[#6927c9]/80 rounded-t-sm group-hover:bg-[#6927c9] transition-all" style={{ height: bar.bottom }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-[#64748b] mt-3 uppercase tracking-wider">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>
              </div>

              {/* Patients by Division */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-base font-bold text-[#1a1a1a]">Patients by Division</h3>
                  <button className="text-xs text-[#6927c9] font-bold hover:underline transition-colors">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Cardiology', pct: 40, color: '#6927c9' },
                    { label: 'Neurology', pct: 25, color: '#8b5cf6' },
                    { label: 'Surgery', pct: 20, color: '#a78bfa' },
                    { label: 'Pediatrics', pct: 15, color: '#c4b5fd' },
                  ].map((item) => (
                    <div key={item.label} className="group">
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-[#1a1a1a] group-hover:text-[#6927c9] transition-colors">{item.label}</span>
                        <span className="text-[#64748b]">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Patients Sparkline */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6927c9]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <h3 className="text-base font-bold text-[#1a1a1a]">New Patients</h3>
                    <p className="text-sm text-[#64748b] font-medium mt-1">April 2024</p>
                  </div>
                  <div className="flex items-end gap-3 my-4">
                    <h2 className="text-4xl font-bold text-[#1a1a1a] tracking-tight">482</h2>
                    <span className="flex items-center text-xs font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full mb-1.5">
                      <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                      +15%
                    </span>
                  </div>
                  <div className="relative h-[60px]">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 30">
                      <path d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,5 75,20 C85,35 90,5 100,0" fill="none" stroke="#6927c9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      <circle className="fill-white stroke-[#6927c9]" cx="100" cy="0" r="3.5" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-8"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
