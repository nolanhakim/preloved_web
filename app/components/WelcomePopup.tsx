"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tampil setelah 800ms — beri waktu halaman render dulu
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const close = () => setIsVisible(false);

  const waUrl =
    "https://wa.me/62895422854189?text=Halo%20Nul%2C%20saya%20lihat%20promo%20di%20website%20dan%20ingin%20tanya%20lebih%20lanjut.";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 bg-black/50 cursor-pointer"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full max-w-[300px] sm:max-w-[380px] bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center bg-white/90 border border-[#e5e7eb] rounded-full hover:bg-[#f3f4f6] transition-colors cursor-pointer shadow-sm"
              aria-label="Tutup"
            >
              <X className="w-3.5 h-3.5 text-[#0f0f0f]" />
            </button>

            {/* Banner Image as Link to WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="relative block w-full aspect-[1414/2000] bg-[#f9fafb]"
            >
              <Image
                src="/iklan.png"
                alt="Promo ReLove — diskon spesial koleksi preloved"
                fill
                priority
                sizes="(max-width: 640px) 300px, 380px"
                className="object-cover cursor-pointer hover:opacity-95 transition-opacity"
              />
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
