import { useState } from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  FileText,
  Settings,
  LogOut,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: FolderKanban, label: "Projects", path: "/projects" },
  { icon: CheckSquare, label: "Tasks", path: "/tasks" },
  { icon: FileText, label: "Reports", path: "/reports" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ backgroundColor: '#6927c9', color: 'white' }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        style={{
          width: "200px",
          backgroundColor: '#6927c9',
          color: 'white',
        }}
      >
        <div className="flex flex-col h-full py-4 px-4">
          {/* Register Patient Button */}
          <Button
            className="w-full mb-6 justify-start gap-2"
            style={{
              backgroundColor: '#5e22b2',
              color: 'white',
            }}
          >
            Register Patient
            <Plus size={16} />
          </Button>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Settings & Logout */}
          <div className="space-y-2 pt-4 border-t border-white/20">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Settings size={18} />
              <span className="text-sm">Settings</span>
            </NavLink>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-white/80 hover:bg-white/10 hover:text-white w-full text-left">
              <LogOut size={18} />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}