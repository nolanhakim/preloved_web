"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ConsignmentCTA() {
  const waUrl =
    "https://wa.me/62895422854189?text=Halo%20ReLove%2C%20saya%20tertarik%20untuk%20menitipkan%20barang%20preloved%20saya%20untuk%20dijual.";

  return (
    <section className="py-20 bg-white border-t border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9ca3af]">
          Ingin Menjual Barangmu?
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] leading-tight tracking-tight max-w-xl">
          Punya barang preloved yang butuh dijual? Titip di ReLove saja!
        </h2>
        <p className="text-sm text-[#6b7280] max-w-md leading-relaxed">
          Hubungi admin kami untuk mendaftarkan pakaian, kemeja, celana, atau jaket bekas layak pakai Anda agar bisa dipajang di platform katalog bersama ini.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0f0f0f] text-white text-sm font-semibold rounded-full hover:bg-[#1f1f1f] transition-colors cursor-pointer mt-2"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          Hubungi 0895422854189 via WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
