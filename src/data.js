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
    dad: "350",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React.js",
    ket: "Frontend Library",
    dad: "400",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "450",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "550",
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
    dad: "650",
  },
  {
    id: 8,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design Application",
    dad: "700",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design Application",
    dad: "750",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "800",
  },
  {
    id: 11,
    gambar: Tools12,
    nama: "Git",
    ket: "Version Control",
    dad: "850",
  },
  {
    id: 12,
    gambar: Tools13,
    nama: "MySQL",
    ket: "Database Management",
    dad: "900",
  },
  {
    id: 13,
    gambar: Tools14,
    nama: "PHP",
    ket: "Backend Language",
    dad: "950",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "Tableau",
    ket: "Data Visualization Tool",
    dad: "1000",
  },
  {
    id: 15,
    icon: "chatgpt",
    colorClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    nama: "ChatGPT",
    ket: "AI Assistant",
    dad: "1050",
  },
  {
    id: 16,
    icon: "claude",
    colorClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    nama: "Claude Code",
    ket: "AI Coding Agent",
    dad: "1100",
  },
  {
    id: 17,
    icon: "gemini",
    colorClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    nama: "Gemini",
    ket: "AI Assistant",
    dad: "1150",
  },
  {
    id: 18,
    icon: "antigravity",
    colorClass: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    nama: "Antigravity",
    ket: "AI Coding IDE",
    dad: "1200",
  },
  {
    id: 19,
    icon: "codex",
    colorClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    nama: "Codex",
    ket: "AI Coding Agent",
    dad: "1250",
  },
  {
    id: 20,
    icon: "deepseek",
    colorClass: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    nama: "DeepSeek AI",
    ket: "AI Assistant",
    dad: "1300",
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
    nama_en: "Personal Portfolio Website",
    kategori: "Website & Profil",
    kategori_en: "Website & Profile",
    desk: "Website portofolio pribadi yang menampilkan profil, keterampilan, pengalaman, dan proyek dengan desain modern, responsif, serta animasi interaktif.",
    desk_en:
      "A personal portfolio website showcasing profile, skills, experience, and projects with a modern, responsive design and interactive animations.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "500",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Company Profile",
    nama_en: "Company Profile Website",
    kategori: "Website & Profil",
    kategori_en: "Website & Profile",
    desk: "Website Company Profile yang dirancang untuk meningkatkan branding dan kredibilitas perusahaan. Menampilkan profil bisnis, layanan, galeri, dan sistem kontak interaktif dengan desain modern serta responsif.",
    desk_en:
      "A company profile website designed to elevate brand presence and credibility, featuring business overview, services, gallery, and interactive contact with a modern responsive layout.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "550",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Optimalisasi Pengiriman Koran",
    nama_en: "Newspaper Delivery Route Optimization System",
    kategori: "Sistem Informasi",
    kategori_en: "Information System",
    desk: "Aplikasi penentuan rute terdekat untuk pengiriman koran yang mencakup wilayah Bandung, Garut, dan Bogor di PT Inilah Media Jabar.",
    desk_en:
      "A shortest-route determination application for newspaper distribution covering Bandung, Garut, and Bogor at PT Inilah Media Jabar.",
    tools: ["PHP", "JavaScript", "MySQL"],
    dad: "600",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "SIMANTIS – Sistem Manajemen Inventaris",
    nama_en: "SIMANTIS – Inventory Management System",
    kategori: "Sistem Informasi",
    kategori_en: "Information System",
    desk: "Aplikasi berbasis web untuk pengelolaan aset dan barang operasional secara digital. Memiliki fitur pendataan inventaris, pencatatan barang masuk dan keluar, pemindahan barang antar lokasi, pengelolaan barang pinjaman, pemantauan kondisi barang, serta pengaturan hak akses pengguna berdasarkan peran.",
    desk_en:
      "A web-based application for digital asset and operational equipment management, featuring inventory cataloging, incoming/outgoing logs, inter-location transfers, loan tracking, condition monitoring, and role-based access control.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "650",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "WISPU – Wadah Informasi dan Sistem Pengaduan",
    nama_en: "WISPU – Public Information & Complaint System",
    kategori: "Web App",
    kategori_en: "Web App",
    desk: "Aplikasi pengaduan masyarakat berbasis web untuk menyampaikan laporan atau keluhan terkait pelayanan publik. Tersedia fitur pengiriman pengaduan online, unggah lampiran, pengelolaan laporan oleh admin, pemantauan status, tindak lanjut, tanggapan petugas, dan dashboard monitoring.",
    desk_en:
      "A web-based public complaint portal for submitting service reports and feedback, complete with attachment uploads, admin ticket management, status tracking, officer responses, and a monitoring dashboard.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "700",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Aplikasi Survei Kepuasan Masyarakat (SKM)",
    nama_en: "Public Satisfaction Survey (SKM) Application",
    kategori: "Web App",
    kategori_en: "Web App",
    desk: "Sistem survei berbasis web untuk mendigitalisasi pengumpulan data kepuasan masyarakat terhadap pelayanan publik. Fitur pengisian kuesioner 16 unsur pelayanan, penghitungan IKM, kode survei otomatis, pencatatan waktu, dashboard monitoring, dan rekapitulasi hasil survei.",
    desk_en:
      "A web-based survey system to digitize public service satisfaction data collection, featuring a 16-element questionnaire, automatic IKM calculation, survey codes, timestamps, monitoring dashboard, and result recaps.",
    tools: ["Laravel", "PHP", "MySQL"],
    dad: "750",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "CITRANA – Website Yayasan Citanduy",
    nama_en: "CITRANA – Citanduy Foundation Website",
    kategori: "Website & Profil",
    kategori_en: "Website & Profile",
    desk: "Website profil dan sistem manajemen konten Yayasan Citanduy sebagai media informasi, publikasi, dan dokumentasi kegiatan. Memiliki halaman profil, program dan kegiatan, berita, artikel, galeri, dan kontak. Dilengkapi dashboard admin untuk mengelola identitas, konten, menu navigasi, dropdown, dan submenu secara dinamis.",
    desk_en:
      "Profile website and CMS for Citanduy Foundation serving as an information, publication, and activity documentation hub, equipped with a dynamic admin dashboard for managing content, navigation menus, dropdowns, and submenus.",
    tools: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    dad: "800",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Sistem Manajemen Bengkel, Sparepart Motor dan Ban",
    nama_en: "Motorcycle Workshop, Spareparts & Tire Management System",
    kategori: "Sistem Informasi",
    kategori_en: "Information System",
    desk: "Sistem informasi berbasis web untuk pengelolaan operasional bengkel motor dan toko sparepart. Fitur manajemen produk, kategori, stok, transaksi penjualan, sistem kasir (POS), pemindaian barcode via scanner atau kamera HP, riwayat transaksi, dan pengaturan hak akses Owner, Admin, dan Kasir.",
    desk_en:
      "A web-based information system for managing motorcycle workshop and spareparts store operations, featuring product/category/stock management, POS cashier, barcode scanning via scanner or phone camera, transaction history, and Owner/Admin/Cashier role permissions.",
    tools: ["React.js", "Laravel API", "PHP", "MySQL"],
    dad: "850",
  },
];


// ================= SERTIFIKAT =================
// Simpan file gambar sertifikat di folder: public/assets/sertifikat/
export const listSertifikat = [
  {
    id: 1,
    gambar: "/assets/sertifikat/bnsp-jwd.jpg",
    nama: "Sertifikat Kompetensi Junior Web Developer",
    nama_en: "Junior Web Developer Competency Certificate",
    penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
    penerbit_en: "National Professional Certification Agency (BNSP)",
    tahun: "2024",
    desk: "Sertifikasi kompetensi nasional bidang pengembangan web (Junior Web Developer).",
    desk_en: "National competency certification in web development (Junior Web Developer).",
    dad: "400",
  },
  {
    id: 2,
    gambar: "/assets/sertifikat/inilah-koran.jpg",
    nama: "Sertifikat Magang Web Developer",
    nama_en: "Web Developer Internship Certificate",
    penerbit: "PT Inilah Media Jabar (Inilah Koran)",
    penerbit_en: "PT Inilah Media Jabar (Inilah Koran)",
    tahun: "2024",
    desk: "Pengalaman magang pengembangan portal berita menggunakan React.js dan Laravel.",
    desk_en: "Internship experience developing a news portal using React.js and Laravel.",
    dad: "500",
  },
  {
    id: 3,
    gambar: "/assets/sertifikat/bbws-citanduy.jpg",
    nama: "Sertifikat Magang Pengelola Website",
    nama_en: "Website Administrator Internship Certificate",
    penerbit: "BBWS Citanduy – Kementerian PU",
    penerbit_en: "BBWS Citanduy – Ministry of Public Works",
    tahun: "2026",
    desk: "Program MagangHub sebagai Pengelola Website dan pengembang aplikasi internal.",
    desk_en: "MagangHub program as Website Administrator and internal web application developer.",
    dad: "600",
  },
];