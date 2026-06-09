"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Share2, Check, User, ShieldCheck } from "lucide-react";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const conditionColors: Record<Product["condition"], string> = {
  "Like New": "text-emerald-700 bg-emerald-50 border border-emerald-100",
  "Sangat Baik": "text-blue-700 bg-blue-50 border border-blue-100",
  "Baik": "text-amber-700 bg-amber-50 border border-amber-100",
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const messageText = `Halo ${product.sellerName}, saya tertarik dengan *${product.name}* (${product.price}) yang Anda pasang di ReLove. Apakah masih tersedia?`;
  const whatsappUrl = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(messageText)}`;

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/?product=${product.id}`;
    const shareText = `Lihat ${product.name} (${product.price}) di ReLove!`;

    if (navigator.share) {
      navigator
        .share({ title: product.name, text: shareText, url: shareUrl })
        .catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/45 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Sheet — mobile: full-height flex column, no outer scroll */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 240 }}
          className="
            relative w-full z-10 bg-white
            /* Mobile: fills 88% of viewport height, flex column, no overflow */
            rounded-t-3xl h-[88dvh] flex flex-col overflow-hidden
            /* Desktop: side-by-side sheet layout */
            sm:max-w-3xl sm:rounded-2xl sm:h-auto sm:max-h-[85vh] sm:flex-row
            shadow-[0_-8px_30px_rgb(0,0,0,0.12)] sm:shadow-2xl
          "
        >
          {/* Drag Handle (mobile only) */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-1 rounded-full bg-white/50 z-20 sm:hidden" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full border border-black/5 hover:bg-white active:scale-95 shadow-sm transition-all cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-4 h-4 text-[#0f0f0f]" />
          </button>

          {/* ── IMAGE ZONE ─────────────────────────────────────────── */}
          {/* Mobile: fixed 44% of modal height | Desktop: 48% width */}
          <div className="relative flex-[0_0_44%] sm:flex-none sm:w-[48%] sm:min-h-[320px] overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Gradient + badges */}
            <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-10 bg-gradient-to-t from-black/65 via-black/20 to-transparent flex items-end gap-1.5 flex-wrap">
              <span className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                {product.category}
              </span>
              <span className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                Size {product.size}
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${conditionColors[product.condition]}`}>
                {product.condition}
              </span>
            </div>
          </div>

          {/* ── INFO ZONE ──────────────────────────────────────────── */}
          {/* Mobile: flex-1 flex-col, no overflow on this container */}
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-white sm:justify-between">

            {/* Scrollable content — only this inner div scrolls on mobile */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-2 sm:p-6 flex flex-col gap-3 sm:gap-4">

              {/* Price + Share */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-2xl font-extrabold text-[#0f0f0f] tracking-tight leading-none">
                  {product.price}
                </p>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e5e7eb] text-xs font-semibold text-[#4b5563] hover:bg-[#f9fafb] active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Disalin!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      Bagikan
                    </>
                  )}
                </button>
              </div>

              {/* Product Name */}
              <h3 className="text-[13.5px] font-bold text-[#1f2937] leading-snug pr-2">
                {product.name}
              </h3>

              <div className="h-px bg-[#f3f4f6]" />

              {/* Description */}
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] uppercase">
                  Deskripsi
                </span>
                <p className="text-[12.5px] text-[#4b5563] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="h-px bg-[#f3f4f6]" />

              {/* Seller */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] uppercase">
                  Penjual
                </span>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#6b7280]" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-[13px] font-bold text-[#0f0f0f] leading-tight">
                        {product.sellerName}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        Terverifikasi
                      </span>
                    </div>
                    {product.whatsapp && (
                      <span className="text-[11px] text-[#9ca3af] mt-0.5">
                        WhatsApp Active
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA — pinned at bottom, never scrolls away ────── */}
            <div className="shrink-0 border-t border-[#f3f4f6] bg-white px-4 pt-3 pb-7 sm:px-6 sm:pb-6 flex flex-col gap-1.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25d366] hover:bg-[#1ebd54] active:scale-[0.98] text-white text-sm font-bold rounded-full transition-all shadow-md shadow-emerald-500/10"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Tanyakan Lewat WhatsApp
              </a>
              <p className="text-[10px] text-[#9ca3af] text-center font-medium">
                Silahkan negosiasi dan atur pengiriman langsung dengan seller.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}