import { Link } from "react-router";
import { User, ArrowRight } from "lucide-react";

function SantriCard({ santri }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <User size={28} />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-gray-800">
            {santri.nama}
          </h3>

          <p className="text-sm text-gray-500">
            NIS: {santri.nis}
          </p>

          <p className="text-sm text-gray-500">
            Kelas: {santri.kelas}
          </p>
        </div>
      </div>

      <Link
        to={`/santri/${santri.id}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Lihat Detail
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default SantriCard;