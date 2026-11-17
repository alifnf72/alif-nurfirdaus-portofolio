// ================= HERO IMAGE =================
  const Image = {
    HeroImage: "/assets/profil_alif.png",
  };

export default Image;


// ================= TOOLS =================
const Tools1 = "/assets/tools/vscode.png";
const Tools2 = "/assets/tools/reactjs.png";
const Tools4 = "/assets/tools/tailwind.png";
const Tools5 = "/assets/tools/bootstrap.png";
const Tools6 = "/assets/tools/js.png";
const Tools7 = "/assets/tools/nodejs.png";
const Tools8 = "/assets/tools/github.png";
const Tools9 = "/assets/tools/ai.png";
const Tools10 = "/assets/tools/canva.png";
const Tools11 = "/assets/tools/figma.png";
const Tools12 = "/assets/tools/git.png";
const Tools13 = "/assets/tools/mysql.png";
const Tools14 = "/assets/tools/php.png";
const Tools15 = "/assets/tools/tableau.jpg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React.js",
    ket: "Frontend Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Node.js",
    ket: "JavaScript Runtime",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Repository Platform",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design Application",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design Application",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools12,
    nama: "Git",
    ket: "Version Control",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools13,
    nama: "MySQL",
    ket: "Database Management",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools14,
    nama: "PHP",
    ket: "Backend Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "Tableau",
    ket: "Data Visualization Tool",
    dad: "1400",
  },
];


// ================= PROYEK =================

const Proyek1 = "/assets/proyek/portofolio.jpg";
const Proyek2 = "/assets/proyek/gumilang.jpg";
const Proyek3 = "/assets/proyek/inilahkoran.jpg";
const Proyek4 = "/assets/proyek/inventaris.jpeg";
const Proyek5 = "/assets/proyek/pengaduan.jpeg";
const Proyek6 = "/assets/proyek/survei.jpeg";
const Proyek7 = "/assets/proyek/yayasan.png";
const Proyek8 = "/assets/proyek/bengkel.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Portofolio Pribadi",
    desk: "Website portofolio pribadi yang menampilkan profil, keterampilan, pengalaman, dan proyek dengan desain modern, responsif, serta animasi interaktif.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Company Profile",
    desk: "Website Company Profile yang dirancang untuk meningkatkan branding dan kredibilitas perusahaan. Menampilkan profil bisnis, layanan, galeri, dan sistem kontak interaktif dengan desain modern serta responsif.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Optimalisasi Pengiriman Koran",
    desk: "Aplikasi penentuan rute terdekat untuk pengiriman koran yang mencakup wilayah Bandung, Garut, dan Bogor di PT Inilah Media Jabar.",
    tools: ["PHP", "JavaScript", "MySQL"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "SIMANTIS – Sistem Manajemen Inventaris",
    desk: "Aplikasi berbasis web untuk pengelolaan aset dan barang operasional secara digital. Memiliki fitur pendataan inventaris, pencatatan barang masuk dan keluar, pemindahan barang antar lokasi, pengelolaan barang pinjaman, pemantauan kondisi barang, serta pengaturan hak akses pengguna berdasarkan peran.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "WISPU – Wadah Informasi dan Sistem Pengaduan",
    desk: "Aplikasi pengaduan masyarakat berbasis web untuk menyampaikan laporan atau keluhan terkait pelayanan publik. Tersedia fitur pengiriman pengaduan online, unggah lampiran, pengelolaan laporan oleh admin, pemantauan status, tindak lanjut, tanggapan petugas, dan dashboard monitoring.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Aplikasi Survei Kepuasan Masyarakat (SKM)",
    desk: "Sistem survei berbasis web untuk mendigitalisasi pengumpulan data kepuasan masyarakat terhadap pelayanan publik. Fitur pengisian kuesioner 16 unsur pelayanan, penghitungan IKM, kode survei otomatis, pencatatan waktu, dashboard monitoring, dan rekapitulasi hasil survei.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "CITRANA – Website Yayasan Citanduy",
    desk: "Website profil dan sistem manajemen konten Yayasan Citanduy sebagai media informasi, publikasi, dan dokumentasi kegiatan. Memiliki halaman profil, program dan kegiatan, berita, artikel, galeri, dan kontak. Dilengkapi dashboard admin untuk mengelola identitas, konten, menu navigasi, dropdown, dan submenu secara dinamis.",
    tools: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    dad: "800",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Sistem Manajemen Bengkel, Sparepart Motor dan Ban",
    desk: "Sistem informasi berbasis web untuk pengelolaan operasional bengkel motor dan toko sparepart. Fitur manajemen produk, kategori, stok, transaksi penjualan, sistem kasir (POS), pemindaian barcode via scanner atau kamera HP, riwayat transaksi, dan pengaturan hak akses Owner, Admin, dan Kasir.",
    tools: ["React.js", "Laravel API", "PHP", "MySQL"],
    dad: "900",
  },
];