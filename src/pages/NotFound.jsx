import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        Halaman Tidak Ditemukan
      </h2>

      <p className="mt-2 text-gray-500">
        Halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}

export default NotFound;