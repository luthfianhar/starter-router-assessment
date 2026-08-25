import { Link } from "react-router";
import { Users, ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-blue-600 p-8 text-white">
        <p className="mb-2 text-sm text-blue-100">
          Selamat datang 👋
        </p>

        <h1 className="text-3xl font-bold">
          Santri Management System
        </h1>

        <p className="mt-3 max-w-xl text-blue-100">
          Aplikasi sederhana untuk melihat dan mengelola informasi
          santri.
        </p>

        <Link
          to="/santri"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
        >
          Lihat Data Santri
          <ArrowRight size={17} />
        </Link>
      </section>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6">
          <Users className="mb-4 text-blue-600" size={28} />

          <p className="text-sm text-gray-500">
            Total Santri
          </p>

          <h2 className="mt-1 text-3xl font-bold text-gray-800">
            4
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;