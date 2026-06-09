"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Pilih Barang", desc: "Jelajahi katalog bersama kami dan klik produk yang menarik minatmu." },
  { n: "02", title: "Hubungi Penjual", desc: "Klik tombol WA di detail produk untuk langsung chat dengan penjual barang tersebut." },
  { n: "03", title: "Nego & Bayar", desc: "Sepakati harga dan ongkir, lalu transfer langsung ke rekening/e-wallet penjual." },
  { n: "04", title: "Kirim & Terima", desc: "Penjual akan mengemas rapi barang dan mengirimkannya ke alamat Anda." },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f9fafb] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9ca3af]">
              Tentang ReLove
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] leading-tight tracking-tight">
              Platform katalog bersama<br />preloved terpercaya.
            </h2>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-sm">
              ReLove memfasilitasi display barang preloved terkurasi dari berbagai penjual mandiri. Kami membantu Anda menemukan item berkualitas langsung dari pemiliknya secara mudah dan transparan.
            </p>

            <div className="flex gap-8 pt-2">
              {[
                { value: "3+", label: "Penjual Aktif" },
                { value: "13", label: "Produk Pilihan" },
                { value: "Direct", label: "Transaksi Lansung" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-[#0f0f0f]">{s.value}</p>
                  <p className="text-xs text-[#9ca3af] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 flex flex-col gap-5">
            <h3 className="text-base font-semibold text-[#0f0f0f]">Kontak Admin Platform</h3>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between items-center py-3 border-b border-[#f3f4f6]">
                <div>
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider font-medium">Layanan Bantuan</p>
                  <p className="font-semibold text-[#0f0f0f] mt-0.5">+62 895-422-854-189</p>
                </div>
                <a
                  href="https://wa.me/62895422854189?text=Halo%20Admin%20ReLove%2C%20saya%20butuh%20bantuan%20mengenai%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#25d366] hover:bg-[#1ebd54] text-white text-xs font-semibold rounded-full transition-colors"
                >
                  Hubungi Admin
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="py-3">
                <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider font-medium">Wilayah Layanan</p>
                <p className="font-semibold text-[#0f0f0f] mt-0.5">Seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#0f0f0f]">Cara Pembelian</h3>
            <p className="text-sm text-[#9ca3af] mt-1">Simpel, aman, dan langsung berhubungan dengan pemilik barang.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white border border-[#e5e7eb] rounded-xl p-5 flex flex-col gap-3 hover:border-[#d1d5db] transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#d1d5db]">{step.n}</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#0f0f0f]">{step.title}</h4>
                  <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
