"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, PackageX } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "../data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedSize, setSelectedSize] = useState<string>("Semua");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const productId = params.get("product");
      if (productId) {
        const found = PRODUCTS.find((p) => p.id === Number(productId));
        if (found) {
          setSelectedProduct(found);
        }
      }
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sellerName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Semua" || product.category === selectedCategory;
      const matchesSize =
        selectedSize === "Semua" || product.size === selectedSize;
      return matchesSearch && matchesCategory && matchesSize;
    });
  }, [searchQuery, selectedCategory, selectedSize]);

  return (
    <section id="catalog" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
          <div>
            <h2 className="text-2xl font-bold text-[#0f0f0f] tracking-tight">Koleksi</h2>
            <p className="text-sm text-[#9ca3af] mt-1">
              {filteredProducts.length} dari {PRODUCTS.length} barang
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" />
            <input
              type="text"
              placeholder="Cari barang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-full text-sm text-[#0f0f0f] placeholder-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] focus:border-[#0f0f0f] transition-all"
            />
          </div>
        </div>

        {/* Filters Group (Category + Size) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-[#f3f4f6] pb-8">
          {/* Category pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mr-1">
              Kategori:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0f0f0f] text-white"
                    : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb] hover:text-[#0f0f0f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Size pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mr-1">
              Ukuran:
            </span>
            {["Semua", "S", "M", "L", "XL", "27", "28", "29", "30", "31", "32"].map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSize === sz
                    ? "bg-[#0f0f0f] text-white border border-[#0f0f0f]"
                    : "bg-[#f9fafb] border border-[#e5e7eb] text-[#6b7280] hover:bg-[#e5e7eb] hover:text-[#0f0f0f]"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard
                    product={product}
                    onClick={(p) => setSelectedProduct(p)}
                    priority={index < 4}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#f3f4f6] flex items-center justify-center">
              <PackageX className="w-5 h-5 text-[#9ca3af]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0f0f0f]">Tidak ditemukan</p>
              <p className="text-xs text-[#9ca3af] mt-1">Coba kata kunci lain atau reset filter.</p>
            </div>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); setSelectedSize("Semua"); }}
              className="text-xs font-semibold text-[#0f0f0f] underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Reset
            </button>
          </motion.div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          if (typeof window !== "undefined") {
            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          }
        }}
      />
    </section>
  );
}
