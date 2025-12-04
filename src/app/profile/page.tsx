"use client";

import Image from "next/image";

export default function ProfilePage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        {/* Foto Profil */}
        <div className="flex justify-center mb-8">
          <Image
            src="/foto15.jpg"
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Nama */}
        <h1 className="text-4xl font-bold mb-2">Kafabi Aulia Fasyah</h1>
        <p className="text-blue-400 text-lg mb-6">
          Software Developer — Web & Mobile
        </p>

        {/* Bio */}
        <p className="text-neutral-300 leading-relaxed mb-10 max-w-xl mx-auto">
          Saya adalah seorang software developer yang berfokus pada pembuatan
          aplikasi Web dan Android. Saya suka membangun UI yang halus, animasi
          yang elegan, dan backend yang rapi.
        </p>

        {/* Card Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">Pengalaman</h3>
            <p className="text-neutral-400">3+ tahun membuat aplikasi</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">Keahlian</h3>
            <p className="text-neutral-400">
              React, Next.js, Flutter, Firebase
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
            <p className="text-neutral-400">Indonesia</p>
          </div>
        </div>

        {/* Tombol */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="mailto:kafabi@email.com"
            className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition"
          >
            Hubungi Saya
          </a>
          <a
            href="/"
            className="px-6 py-2 border border-neutral-600 rounded-lg hover:bg-neutral-800 transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </section>
  );
}
