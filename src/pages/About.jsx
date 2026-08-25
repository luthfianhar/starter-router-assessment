function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800">
        About
      </h1>

      <div className="mt-5 rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Santri Management System
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          Aplikasi ini dibuat sebagai latihan penggunaan React
          Router untuk membuat beberapa halaman yang saling
          terhubung.
        </p>

        <p className="mt-3 leading-7 text-gray-600">
          Aplikasi memiliki halaman Home, daftar Santri, detail
          Santri, About, serta halaman 404 untuk route yang tidak
          ditemukan.
        </p>
      </div>
    </div>
  );
}

export default About;