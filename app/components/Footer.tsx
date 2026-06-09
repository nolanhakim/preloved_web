"use client";

import React from "react";
import { ShoppingBag, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-[#e5e7eb] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-semibold text-base text-[#0f0f0f]">
              <div className="w-6 h-6 bg-[#0f0f0f] rounded-md flex items-center justify-center">
                <ShoppingBag className="w-3.5 h-3.5 text-white" />
              </div>
              ReLove
            </div>
            <p className="text-xs text-[#9ca3af] max-w-[200px] leading-relaxed">
              Katalog preloved bersama. Kualitas terjamin, dari berbagai penjual pilihan.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af]">
              Navigasi
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#6b7280]">
              {[
                { label: "Home", id: "home" },
                { label: "Koleksi", id: "catalog" },
                { label: "Tentang", id: "about" },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left hover:text-[#0f0f0f] transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af]">
              Bantuan Admin
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="https://wa.me/62895422854189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25d366] hover:text-[#1ebd54] font-medium transition-colors"
              >
                +62 895-422-854-189
              </a>
              <span className="text-xs text-[#9ca3af]">09:00 – 21:00 WIB, setiap hari</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#f3f4f6]">
          <p className="text-[11px] text-[#9ca3af]">
            © {new Date().getFullYear()} ReLove. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#9ca3af] hover:text-[#0f0f0f] transition-colors"
            aria-label="Ke atas"
          >
            Kembali ke atas
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
