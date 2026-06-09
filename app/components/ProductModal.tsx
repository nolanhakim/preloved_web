"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, User, Share2, Check } from "lucide-react";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const conditionColors: Record<Product["condition"], string> = {
  "Like New": "text-emerald-700 bg-emerald-50",
  "Sangat Baik": "text-blue-700 bg-blue-50",
  "Baik": "text-amber-700 bg-amber-50",
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  if (!product) return null;

  const messageText = `Halo ${product.sellerName}, saya tertarik dengan *${product.name}* (${product.price}) yang Anda pasang di ReLove. Apakah masih tersedia?`;
  const whatsappUrl = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(messageText)}`;

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/?product=${product.id}`;
    const shareText = `Lihat ${product.name} (${product.price}) di ReLove!`;

    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: shareText,
        url: shareUrl,
      }).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 cursor-pointer"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full sm:max-w-3xl bg-white sm:rounded-2xl overflow-hidden z-10 grid grid-cols-1 sm:grid-cols-2 max-h-[95dvh] sm:max-h-[85vh]"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white border border-[#e5e7eb] rounded-full hover:bg-[#f3f4f6] transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-4 h-4 text-[#0f0f0f]" />
          </button>

          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full min-h-[260px] bg-[#f9fafb]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Detail */}
          <div className="flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
            <div className="flex flex-col gap-5">
              {/* Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9ca3af] bg-[#f3f4f6] px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0f0f0f] bg-[#f3f4f6] px-2.5 py-1 rounded-full">
                  Size {product.size}
                </span>
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${conditionColors[product.condition]}`}>
                  {product.condition}
                </span>
              </div>

              {/* Name & Price */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-[#0f0f0f] leading-tight">
                  {product.name}
                </h2>
                <p className="text-2xl font-bold text-[#0f0f0f]">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af]">
                  Deskripsi
                </span>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Seller Info */}
              <div className="flex flex-col gap-1 border-t border-[#f3f4f6] pt-4 mt-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af]">
                  Penjual / Pemilik
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#f3f4f6] border border-[#e5e7eb] flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[#6b7280]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0f0f0f]">{product.sellerName}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-5 border-t border-[#f3f4f6] flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25d366] hover:bg-[#1ebd54] text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Penjual via WhatsApp
              </a>

              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#e5e7eb] hover:bg-[#f9fafb] text-[#0f0f0f] text-sm font-semibold rounded-full transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    Tautan Disalin!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    Bagikan Produk
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#9ca3af] text-center">
                Transaksi aman melalui chat WhatsApp langsung.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
