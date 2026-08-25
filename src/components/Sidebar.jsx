import { NavLink } from "react-router";
import { Home, Users, Info } from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  const menu = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Santri",
      path: "/santri",
      icon: Users,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r bg-white transition-transform md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-xl font-bold text-blue-600">SANTRI APP</h2>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <p className="text-xs text-gray-400">
            Santri Management System
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;