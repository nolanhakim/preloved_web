"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../data/products";

import { User } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  priority?: boolean;
}

const conditionColors: Record<Product["condition"], string> = {
  "Like New": "text-emerald-700 bg-emerald-50",
  "Sangat Baik": "text-blue-700 bg-blue-50",
  "Baik": "text-amber-700 bg-amber-50",
};

export default function ProductCard({ product, onClick, priority = false }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className="group cursor-pointer flex flex-col bg-white"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full bg-[#f9fafb] overflow-hidden rounded-xl mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Condition badge */}
        <span
          className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full ${conditionColors[product.condition]}`}
        >
          {product.condition}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-0.5">
        <div className="flex items-center justify-between text-[11px] text-[#9ca3af] font-medium tracking-wide uppercase">
          <span>{product.category} · Sz {product.size}</span>
          <span className="normal-case font-normal text-[#6b7280] flex items-center gap-1">
            <User className="w-3 h-3 text-[#9ca3af]" />
            {product.sellerName}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-[#0f0f0f] leading-snug line-clamp-1 group-hover:text-[#374151] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-[#0f0f0f]">{product.price}</p>
      </div>
    </div>
  );
}
