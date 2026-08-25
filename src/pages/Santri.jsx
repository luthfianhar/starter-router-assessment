import { useState } from "react";
import SantriCard from "../components/SantriCard";
import santriData from "../data/santri";

function Santri() {
  const [activeTab, setActiveTab] = useState("daftar");

  const tabs = [
    {
      id: "daftar",
      name: "Daftar",
    },
    {
      id: "nilai",
      name: "Nilai",
    },
    {
      id: "absensi",
      name: "Absensi",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Data Santri
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Informasi seluruh santri yang terdaftar.
        </p>
      </div>

      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === "daftar" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {santriData.map((santri) => (
            <SantriCard key={santri.id} santri={santri} />
          ))}
        </div>
      )}

      {activeTab === "nilai" && (
        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3">Nama</th>
                <th className="px-5 py-3">Kelas</th>
                <th className="px-5 py-3">Nilai</th>
              </tr>
            </thead>

            <tbody>
              {santriData.map((santri) => (
                <tr key={santri.id} className="border-t">
                  <td className="px-5 py-3">{santri.nama}</td>
                  <td className="px-5 py-3">{santri.kelas}</td>
                  <td className="px-5 py-3 font-semibold">
                    {santri.nilai}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "absensi" && (
        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3">Nama</th>
                <th className="px-5 py-3">Kelas</th>
                <th className="px-5 py-3">Kehadiran</th>
              </tr>
            </thead>

            <tbody>
              {santriData.map((santri) => (
                <tr key={santri.id} className="border-t">
                  <td className="px-5 py-3">{santri.nama}</td>
                  <td className="px-5 py-3">{santri.kelas}</td>
                  <td className="px-5 py-3 font-semibold">
                    {santri.kehadiran}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Santri;