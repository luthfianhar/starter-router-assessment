import { Menu } from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-gray-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Santri Management
          </h1>
          <p className="text-xs text-gray-500">
            Sistem informasi data santri
          </p>
        </div>
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
        LA
      </div>
    </header>
  );
}

export default Navbar;