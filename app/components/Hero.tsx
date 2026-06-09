"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Tag line */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9ca3af] mb-8">
          Preloved · Second · Thrift
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0f0f0f] leading-[1.05] tracking-tight mb-8 max-w-4xl">
          Barang Preloved
          <br />
          <span className="text-[#9ca3af]">Pilihan Terbaik.</span>
        </h1>

        {/* Sub copy */}
        <p className="text-base text-[#6b7280] max-w-lg leading-relaxed mb-12">
          Katalog bersama barang secondhand pilihan dari berbagai penjual terpercaya. Pakaian, kemeja, celana, dan jaket berkualitas yang terawat dan siap pakai.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToCatalog}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f0f0f] text-white text-sm font-semibold rounded-full hover:bg-[#1f1f1f] transition-colors"
          >
            Lihat Koleksi
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#6b7280] border border-[#e5e7eb] rounded-full hover:border-[#d1d5db] hover:text-[#0f0f0f] transition-colors"
          >
            Cara Pembelian
          </button>
        </div>

        {/* Divider + stats */}
        <div className="mt-20 pt-8 border-t border-[#f3f4f6] flex flex-wrap gap-10">
          {[
            { value: "3+", label: "Penjual Terpercaya" },
            { value: "100%", label: "Terawat & Siap Pakai" },
            { value: "Direct", label: "Hubungi via WA" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-[#0f0f0f]">{stat.value}</span>
              <span className="text-xs text-[#9ca3af] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
