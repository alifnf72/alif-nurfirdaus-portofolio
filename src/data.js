// ================= HERO IMAGE =================
import HeroImage from "/assets/profil_alif.png";

const Image = {
  HeroImage,
};

export default Image;


// ================= TOOLS =================
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/git.png";
import Tools13 from "/assets/tools/mysql.png";
import Tools14 from "/assets/tools/php.png";
import Tools15 from "/assets/tools/tableau.jpg";

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
import Proyek1 from "/assets/proyek/portofolio.jpg";
import Proyek2 from "/assets/proyek/gumilang.jpg";
import Proyek3 from "/assets/proyek/inilahkoran.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Portofolio",
    desk: "Website portofolio pribadi yang menampilkan profil, keterampilan, pengalaman, dan proyek dengan desain modern, responsif, serta animasi interaktif.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "200",
  },
    {
    id: 2,
    gambar: Proyek2,
    nama: "Website Company Profile",
    desk: "Website Company Profile yang dirancang untuk meningkatkan branding dan kredibilitas perusahaan.Menampilkan profil bisnis, layanan, galeri, dan sistem kontak interaktif dengan desain modern serta responsif.",
    tools: ["Vite", "React.js", "Tailwind CSS", "AOS", "Animate.css"],
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Optimalisasi Pengiriman Koran",
    desk: "Aplikasi penentuan rute terdekat untuk pengiriman koran yang mencakup wilayah Bandung, Garut, Bogor di PT Inilah Media Jabar.",
    tools: ["PHP", "JavaScript", "MySQL"],
    dad: "400",
  },
];