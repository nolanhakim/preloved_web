"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Share2, Check, User, MapPin, ShieldCheck } from "lucide-react";
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

        {/* Modal Container: Stacks vertically on mobile, row side-by-side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 240 }}
          className="relative w-full sm:max-w-3xl bg-white rounded-t-3xl sm:rounded-2xl overflow-hidden z-10 flex flex-col sm:flex-row max-h-[92dvh] sm:max-h-[85vh] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] sm:shadow-2xl"
        >
          {/* Drag Handle (Mobile only) */}
          <div className="flex justify-center pt-3 pb-1 shrink-0 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-[#e5e7eb]" />
          </div>

          {/* Close Button — Pinned at top-right of the entire modal */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full border border-black/5 hover:bg-white active:scale-95 shadow-sm transition-all cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-4 h-4 text-[#0f0f0f]" />
          </button>

          {/* Left: Image Container */}
          <div className="relative w-full sm:w-[48%] h-64 sm:h-auto bg-gray-50 overflow-hidden shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Gradient overlay + badges on the image (visible on mobile and desktop image bottom) */}
            <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 bg-gradient-to-t from-black/65 via-black/25 to-transparent flex items-end gap-1.5 flex-wrap">
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

          {/* Right: Info / Description Area */}
          <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-white h-[50dvh] sm:h-auto">
            {/* Scrollable details */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-6 pb-28 sm:pb-6 flex flex-col gap-4">
              {/* Price + Share */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-2xl font-extrabold text-[#0f0f0f] tracking-tight">
                  {product.price}
                </p>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e5e7eb] text-xs font-semibold text-[#4b5563] hover:bg-[#f9fafb] active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 animate-scale" />
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
              <h3 className="text-base font-bold text-[#1f2937] leading-tight pr-8">
                {product.name}
              </h3>

              <div className="h-px bg-[#f3f4f6]" />

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] uppercase">
                  Deskripsi
                </span>
                <p className="text-[13px] text-[#4b5563] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="h-px bg-[#f3f4f6]" />

              {/* Seller */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] uppercase">
                  Penjual
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f3f4f6] border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    <User className="w-4.5 h-4.5 text-[#6b7280]" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-[#0f0f0f] leading-tight">
                        {product.sellerName}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        <ShieldCheck className="w-3 h-3" />
                        Terverifikasi
                      </span>
                    </div>
                    {product.whatsapp && (
                      <span className="text-xs text-[#9ca3af] mt-0.5">
                        WhatsApp Active
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pinned CTA Button Container */}
            <div className="absolute sm:static bottom-0 inset-x-0 z-20 border-t border-[#f3f4f6] bg-white/95 backdrop-blur-xs p-4 sm:p-6 flex flex-col gap-2 shadow-[0_-8px_24px_rgba(0,0,0,0.03)] sm:shadow-none">
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