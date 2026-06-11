export interface Product {
  id: number;
  name: string;
  price: string;
  category: "Kaos & Jersey" | "Kemeja" | "Celana" | "Vest & Jaket";
  condition: "Like New" | "Sangat Baik" | "Baik";
  image: string;
  description: string;
  whatsapp: string; // The seller's WhatsApp number
  sellerName: string; // Name of the seller
  size: string; // Size of the item (e.g., "M", "L", "29")
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Crewneck Doraemon Vintage",
    price: "Rp 5.000",
    category: "Vest & Jaket",
    condition: "Sangat Baik",
    image: "/products/crewneck doraemon.jpeg",
    description: "minus noda kuning.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 2,
    name: "Kaos Streetwear Masterpiece",
    price: "Rp 5.000",
    category: "Kaos & Jersey",
    condition: "Sangat Baik",
    image: "/products/kaos masterpiece 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 3,
    name: "Kaos Graphic Good Vibes",
    price: "Rp 5.000",
    category: "Kaos & Jersey",
    condition: "Sangat Baik",
    image: "/products/kaos good vibes 1.jpeg",
    description: "minus warna pudar",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 4,
    name: "Crewneck Otsky",
    price: "Rp 15.000",
    category: "Vest & Jaket",
    condition: "Sangat Baik",
    image: "/products/crewneck otsky.jpeg",
    description: "minus warna pudar",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 5,
    name: "Jersey Olahraga Klasik No. 16",
    price: "Rp 5.000",
    category: "Kaos & Jersey",
    condition: "Baik",
    image: "/products/jersey16 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 6,
    name: "Kemeja Lengan pendek Abu-Abu",
    price: "Rp 10.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja abu 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 7,
    name: "Kemeja Kasual Motif Garis",
    price: "Rp 10.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja garis 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 8,
    name: "Kemeja Hitam",
    price: "Rp 10.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja hitam 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 9,
    name: "Kemeja Biru Lengan Panjang",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Like New",
    image: "/products/kemeja biru lengan panjang.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 10,
    name: "Celana Jeans Biru Straight Fit",
    price: "Rp 20.000",
    category: "Celana",
    condition: "Sangat Baik",
    image: "/products/celana jeans biru 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "29"
  },
  {
    id: 11,
    name: "Kemeja Flanel Coklat Kotak",
    price: "Rp 20.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja flanel coklat.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 12,
    name: "Celana Jeans Levi's Coklat",
    price: "Rp 20.000",
    category: "Celana",
    condition: "Sangat Baik",
    image: "/products/jeans levis coklat 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "29"
  },
  {
    id: 13,
    name: "Vest Uniqlo Ultra Light Puffer",
    price: "Rp 10.000",
    category: "Vest & Jaket",
    condition: "Like New",
    image: "/products/vest uniqlo 1.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 14,
    name: "Kemeja Flanel coklat abu",
    price: "Rp 25.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja flanel.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 15,
    name: "Kemeja Semi-Flanel",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja kotak.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 16,
    name: "Celana Cargo Tactical",
    price: "Rp 60.000",
    category: "Celana",
    condition: "Sangat Baik",
    image: "/products/celana tactical.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "31"
  },
  {
    id: 17,
    name: "Celana Jogger Training Abu",
    price: "Rp 15.000",
    category: "Celana",
    condition: "Sangat Baik",
    image: "/products/training abu.jpeg",
    description: "no minus",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  }
];

export const CATEGORIES = ["Semua", "Kaos & Jersey", "Kemeja", "Celana", "Vest & Jaket"] as const;
