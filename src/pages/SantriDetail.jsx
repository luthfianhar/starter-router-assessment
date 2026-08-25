import { Link, useParams } from "react-router";
import { ArrowLeft, User } from "lucide-react";
import santriData from "../data/santri";

function SantriDetail() {
  const { id } = useParams();

  const santri = santriData.find(
    (item) => item.id === Number(id)
  );

  if (!santri) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <h1 className="text-xl font-bold text-gray-800">
          Santri tidak ditemukan
        </h1>

        <Link
          to="/santri"
          className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600"
        >
          <ArrowLeft size={16} />
          Kembali ke daftar
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/santri"
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={17} />
        Kembali ke daftar
      </Link>

      <div className="rounded-xl border bg-white p-8">
        <div className="flex flex-col items-center gap-5 border-b pb-6 sm:flex-row">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <User size={38} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {santri.nama}
            </h1>

            <p className="mt-1 text-gray-500">
              {santri.kelas} · {santri.nis}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Nama</p>
            <p className="font-medium text-gray-800">
              {santri.nama}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">NIS</p>
            <p className="font-medium text-gray-800">
              {santri.nis}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Kelas</p>
            <p className="font-medium text-gray-800">
              {santri.kelas}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Umur</p>
            <p className="font-medium text-gray-800">
              {santri.umur} tahun
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Alamat</p>
            <p className="font-medium text-gray-800">
              {santri.alamat}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Nilai</p>
            <p className="font-medium text-gray-800">
              {santri.nilai}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SantriDetail;