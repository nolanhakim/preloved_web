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
    name: "Kaos Air Jordan Hijau",
    price: "Rp 5.000",
    category: "Kaos & Jersey",
    condition: "Like New",
    image: "/products/kaos jordan hijau 1.jpeg",
    description: "Kaos Air Jordan original berwarna hijau gelap yang sporty. Logo Jumpman tercetak rapi di bagian dada. Bahan katun premium yang tebal namun tetap dingin saat dipakai. Kondisi 9.5/10 mulus seperti baru.",
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
    description: "Kaos vintage kasual hitam dengan grafis sablon bertuliskan 'Masterpiece'. Warna kain masih hitam pekat, fitting semi-oversized yang kekinian. Jahitan rapi dan kondisi sablon sangat baik.",
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
    description: "Kaos kasual berwarna putih dengan sablon minimalis 'Good Vibes'. Menggunakan bahan cotton combed 30s yang sangat lembut, adem, dan menyerap keringat. Kondisi bersih bebas noda.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 4,
    name: "Jersey Sepakbola Retro No. 10",
    price: "Rp 10.000",
    category: "Kaos & Jersey",
    condition: "Sangat Baik",
    image: "/products/jersey10 1.jpeg",
    description: "Jersey bola klasik bergaya retro dengan nomor punggung 10. Desain ikonik vintage dengan bahan polyester rajut berpori yang sangat adem dan menyerap keringat. Bordir logo dan emblem dalam kondisi prima.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 5,
    name: "Jersey Olahraga Klasik No. 16",
    price: "Rp 10.000",
    category: "Kaos & Jersey",
    condition: "Baik",
    image: "/products/jersey16 1.jpeg",
    description: "Jersey olahraga retro nomor 16 dengan perpaduan warna yang menarik. Bahan polyester ringan yang sangat fleksibel dan nyaman dipakai berolahraga maupun santai. Kondisi kain terawat tanpa benang ketarik.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  },
  {
    id: 6,
    name: "Kemeja Lengan pendek Abu-Abu",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja abu 1.jpeg",
    description: "Kemeja lengan pendek polos dengan warna abu-abu minimalis yang elegan. Terbuat dari bahan katun poplin halus yang adem dan mudah disetrika. Sangat cocok untuk kuliah, kerja, maupun acara formal.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 7,
    name: "Kemeja Kasual Motif Garis",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja garis 1.jpeg",
    description: "Kemeja lengan panjang dengan motif garis-garis vertikal hitam-putih. Menggunakan bahan katun rayon yang sangat lembut, flowy, adem, dan jatuh di badan. Tepat untuk melengkapi gaya santai kasual Anda.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 8,
    name: "Kemeja Hitam Oxford",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Sangat Baik",
    image: "/products/kemeja hitam 1.jpeg",
    description: "Kemeja kasual lengan pendek berwarna hitam pekat. Menggunakan bahan katun oxford tebal berkualitas tinggi yang memberikan siluet rapi dan kokoh saat dipakai. Kancing lengkap dan jahitan rapi.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "L"
  },
  {
    id: 9,
    name: "Kemeja Linen Sanghai Oren",
    price: "Rp 15.000",
    category: "Kemeja",
    condition: "Like New",
    image: "/products/kemeja oren 1.jpeg",
    description: "Kemeja katun linen kerah Sanghai berwarna oranye bata yang estetik. Bahan serat linen alami premium yang sangat sejuk, bernafas, dan berkarakter unik. Kondisi super mulus tanpa noda.",
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
    description: "Celana panjang jeans denim berwarna biru klasik dengan cutting model straight fit. Bahan denim tebal dan berbobot kokoh khas pakaian vintage premium. Warna washed natural pudar yang estetik.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "29"
  },
  {
    id: 11,
    name: "Celana Kain Slim Fit Abu-Abu",
    price: "Rp 10.000",
    category: "Celana",
    condition: "Baik",
    image: "/products/celana kain abu 1.jpeg",
    description: "Celana panjang bahan formal/semi-formal dengan potongan slim fit berwarna abu-abu. Menggunakan bahan semi-wool lembut yang elastis, memberikan kenyamanan maksimal saat bergerak seharian.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "29"
  },
  {
    id: 12,
    name: "Celana Jeans Levi's Coklat",
    price: "Rp 20.000",
    category: "Celana",
    condition: "Sangat Baik",
    image: "/products/jeans levis coklat 1.jpeg",
    description: "Celana jeans original Levi's dengan warna coklat tanah yang jarang ditemui. Potongan model straight leg klasik. Jahitan rantai sangat kuat dan rapi, bahan denim tebal dan awet.",
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
    description: "Rompi puffer original Uniqlo berkualitas tinggi. Sangat ringan, empuk, dan hangat, menjadikannya andalan untuk layering pakaian saat berkendara atau cuaca dingin. Kondisi mulus 9.5/10, ritsleting lancar.",
    whatsapp: "62895422854189",
    sellerName: "nul",
    size: "M"
  }
];

export const CATEGORIES = ["Semua", "Kaos & Jersey", "Kemeja", "Celana", "Vest & Jaket"] as const;
