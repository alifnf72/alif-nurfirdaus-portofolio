import DataImage from "./data";
import {listTools, listProyek} from"./data"
import { useState } from "react";

function App() {
const [copied, setCopied] = useState(false);

const handleCopyEmail = () => {
  navigator.clipboard.writeText("muhamadalif1123@gmail.com");
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-32 md:pt-36 xl:gap-0 gap-6 grid-cols-1"id="beranda">
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>kode yang indah lahir dari ketekunan.👌</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya Muhammad Alif Nurfirdaus</h1>
        <p className="text-base/lose mb-6 opacity-60">
         Lulusan Teknik Informatika dari Universitas Komputer Indonesia dengan pengalaman di bidang web development, operasional komputer, serta design, khususnya dalam pengembangan website dan pembuatan desain visual seperti poster, pamflet, dan banner.
        </p>
        <div className="flex item-canter sm:gap-4 gap-2">
          <a 
            href="/assets/cv/alif.pdf"
            download="alif.pdf"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex items-center gap-2"
          >
            Download CV
            <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#proyek"className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek<i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
<div className="relative flex justify-center items-center group">
  
  {/* ================= BLOB BACKGROUND ================= */}
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="
      absolute 
      w-[320px] sm:w-[360px] md:w-[450px] lg:w-[520px]
      md:-translate-x-8 lg:-translate-x-12
      md:-translate-y-10 lg:-translate-y-14
      -z-10 opacity-80

      animate__animated animate__fadeInUp animate__delay-2s

      transition-all duration-500 ease-out
      group-hover:scale-110 group-hover:-translate-y-4
    "
  >
    <path
      fill="#8B5CF6"
      d="M62.4,-49.8C77.3,-31,83.5,-5.3,75.9,13.1C68.4,31.4,47,42.4,27.9,47.5C8.9,52.7,-8,52.1,-24.9,46.1C-41.9,40.1,-59.1,28.7,-63.4,13.4C-67.8,-1.9,-59.3,-21.2,-46.6,-39.5C-33.9,-57.9,-16.9,-75.2,3.4,-77.9C23.7,-80.6,47.4,-68.7,62.4,-49.8Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* ================= HERO IMAGE ================= */}
  <img 
    src={DataImage.HeroImage} 
    alt="Hero Image" 
    className="
      relative z-10
      w-[260px] sm:w-[300px] md:w-[380px] lg:w-[440px] 
      md:-translate-x-8 lg:-translate-x-12
      md:-translate-y-16 lg:-translate-y-20

      animate__animated animate__fadeInUp animate__delay-2s

      transition-all duration-500 ease-out
      group-hover:scale-105 group-hover:-translate-y-6
    "
    loading="lazy"
  />

</div>
        </div>

    </div>

    {/* {tentang} */}
    <div className="tentang mt-32 py-10" id="tentang">
  <div
className="
  xl:w-2/3 lg:w-3/4 w-full mx-auto p-7
  bg-zinc-800 rounded-lg
  border border-zinc-700
  hover:border-violet-600
  hover:-translate-y-2
  transition duration-300
"
data-aos="fade-up"
data-aos-duration="1000"
data-aos-delay="700"
data-aos-once="true"
  >
    
    {/* Image Mobile */}
    <img
      src={DataImage.HeroImage}
      alt="Image"
      className="w-12 rounded-md mb-10 sm:hidden transition-transform duration-500 hover:scale-110"
      loading="lazy"
    />

    {/* Text */}
    <div className="space-y-6 text-base/loose mb-10 leading-relaxed transition-all duration-500">
      <p>
        Saya Muhammad Alif Nurfirdaus, lulusan S1 Teknik Informatika
        Universitas Komputer Indonesia dengan IPK 3,12. Saya memiliki
        pengalaman sebagai Pengajar Operator Windows di Lembaga Pelatihan
        Kerja, membimbing peserta dalam pengoperasian komputer dasar,
        pengolahan dokumen, serta administrasi perkantoran hingga mampu
        bekerja secara mandiri.
      </p>

      <p>
        Selain itu, saya memiliki pengalaman magang sebagai Web Developer
        di PT Inilah Media Jabar (Inilah Koran), berkontribusi dalam
        pengembangan ulang website portal berita menggunakan React.js
        untuk frontend dan Laravel untuk backend. Saya turut meningkatkan
        performa website agar lebih responsif, cepat, dan optimal bagi
        pengguna.
      </p>

      <p>
        Saya memiliki ketertarikan dalam bidang administrasi,
        pengelolaan data, serta pengembangan web dan desain, khususnya
        dalam pembuatan website serta desain visual seperti poster,
        pamflet, dan banner. Didukung sertifikasi BNSP Junior Web
        Developer, saya terbiasa menggunakan HTML, PHP, MySQL, React.js,
        Figma, dan Canva. Disiplin, komunikatif, dan bertanggung jawab
        adalah prinsip kerja yang selalu saya terapkan.
      </p>
    </div>

    {/* Bottom Section */}
    <div className="flex items-center justify-between">
      
      {/* Image Desktop */}
      <img
        src={DataImage.HeroImage}
        alt="Image"
        className="w-12 rounded-md sm:block hidden transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />

      {/* Stats */}
      <div className="flex items-center gap-6">
        
        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
          <h1 className="text-4xl font-bold mb-1">
           3 <span className="text-violet-500">+</span>
          </h1>
          <p>Proyek Selesai</p>
        </div>

        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
          <h1 className="text-4xl font-bold mb-1">
            2 <span className="text-violet-500">+</span>
          </h1>
          <p>Tahun Pengalaman</p>
        </div>

        <div className="transition-all duration-300 hover:scale-110 hover:text-violet-500">
          <h1 className="text-4xl font-bold mb-1">
            1 <span className="text-violet-500">+</span>
          </h1>
          <p className="opacity-70">
            Pengalaman Magang
          </p>
        </div>

      </div>
    </div>

  </div>
</div>

      <div className="tools mt-32 text-center">

        <h1
          className="text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools yang Dipakai
        </h1>

        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design.
        </p>

        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map(tool => (
        <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded hover:bg-zinc-800 group" key={tool.id}data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
          <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
        <div>
            <h4 className="font-bold">{tool.nama}</h4>
            <p className="opacity-50">{tool.ket}</p>
          </div>
        </div>
        ))}

        
      </div>
    </div>
  
  {/* {tentang} */}
    
{/* Keterampilan */}
<div className="keterampilan mt-32 py-10" id="keterampilan">
  <h1 
    className="text-center text-4xl font-bold mb-2"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Keterampilan
  </h1>

  <p 
    className="text-base text-center opacity-50 mb-14"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Beberapa kemampuan utama yang saya kuasai dalam pengembangan website dan desain digital.
  </p>

  <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">

  {/* Frontend */}
  <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="500"
    data-aos-once="true"
  >
    <h3 className="text-xl font-bold mb-3 text-violet-500">
      Frontend Development
    </h3>
    <p className="opacity-70">
      Berpengalaman dalam membangun tampilan website responsif menggunakan HTML, CSS,
      JavaScript, React.js, dan Tailwind CSS.
    </p>
  </div>

  {/* Backend */}
  <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="700"
    data-aos-once="true"
  >
    <h3 className="text-xl font-bold mb-3 text-violet-500">
      Backend Development
    </h3>
    <p className="opacity-70">
      Membangun sistem backend menggunakan PHP dan Node.js serta pengelolaan database MySQL.
    </p>
  </div>

  {/* UI/UX */}
  <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="900"
    data-aos-once="true"
  >
    <h3 className="text-xl font-bold mb-3 text-violet-500">
      UI/UX & Design
    </h3>
    <p className="opacity-70">
      Mendesain antarmuka modern dan user-friendly menggunakan Figma serta pengalaman dalam
      pembuatan materi promosi digital.
    </p>
  </div>

  {/* Sistem Operator Windows */}
  <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="1100"
    data-aos-once="true"
  >
    <h3 className="text-xl font-bold mb-3 text-violet-500">
      Operator Windows
    </h3>
    <p className="opacity-70">
      Berpengalaman dalam pengoperasian sistem Windows dan aplikasi perkantoran, termasuk pelatihan administrasi, pengolahan data, serta pendampingan hingga pengguna mampu mengoperasikan komputer secara mandiri.
    </p>
  </div>

</div>

  </div>



{/* Pengalaman */}
<div className="pengalaman mt-32 py-10" id="pengalaman">
  <h1 
    className="text-center text-4xl font-bold mb-2"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Pengalaman
  </h1>

  <p 
    className="text-base text-center opacity-50 mb-14"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Pengalaman kerja yang telah saya jalani.
  </p>

  <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto space-y-8">

    {/* Pengajar */}
    <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="700"
    data-aos-once="true"
    >
      <h3 className="text-xl font-bold">
        Pengajar Operator Windows
      </h3>
      <p className="text-violet-500 mb-3">
        Duta Komputer College (DCC) – Ciamis | Maret 2021 – November 2023
      </p>

      <ul className="opacity-70 list-disc pl-5 space-y-2">
        <li>Mengajar dan membimbing pengoperasian Windows serta aplikasi perkantoran.</li>
        <li>Melatih pembuatan dokumen administrasi dan pengolahan data.</li>
        <li>Melakukan evaluasi dan pendampingan praktik peserta.</li>
        <li>Membimbing peserta hingga mampu bekerja secara mandiri.</li>
      </ul>
    </div>

    {/* Magang */}
    <div 
    className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
               hover:border-violet-600 hover:-translate-y-2 transition duration-300"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="700"
    data-aos-once="true"
    >
      <h3 className="text-xl font-bold">
        Web Developer (Magang)
      </h3>
      <p className="text-violet-500 mb-3">
        PT Inilah Media Jabar – Bandung | Februari 2025 – Juli 2025
      </p>

      <ul className="opacity-70 list-disc pl-5 space-y-2">
        <li>Pengembangan ulang portal berita inilahkoran.id.</li>
        <li>Membangun frontend menggunakan React.js.</li>
        <li>Mengelola backend menggunakan Laravel.</li>
        <li>Optimasi performa agar website lebih cepat dan responsif.</li>
      </ul>
    </div>

    {/* Petugas Pendataan Lapangan */}
    <div 
      className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 
                hover:border-violet-600 hover:-translate-y-2 transition duration-300"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="700"
      data-aos-once="true"
    >
      <h3 className="text-xl font-bold">
        Petugas Pendataan Lapangan
      </h3>

      <p className="text-violet-500 mb-3">
        Badan Pusat Statistik (BPS) – Kabupaten Ciamis, Jawa Barat
        <br />
        Juni 2026 – Agustus 2026
      </p>

      <ul className="opacity-70 list-disc pl-5 space-y-2">
        <li>Melaksanakan pendataan lapangan sesuai pedoman dan target yang ditetapkan BPS.</li>
        <li>Melakukan wawancara dan pengumpulan data dari responden secara langsung.</li>
        <li>Melakukan pencatatan, pemeriksaan, dan verifikasi kelengkapan serta kewajaran data.</li>
        <li>Menginput dan memperbarui hasil pendataan menggunakan aplikasi pendataan BPS.</li>
        <li>Berkoordinasi dengan pengawas serta menyelesaikan kendala pendataan di lapangan.</li>
      </ul>
    </div>
  </div>
</div>


    {/* {Proyek} */}
    <div className="proyek mt-32 py-10"id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2"data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
      <p className="text-base/loose text-center opacity-50"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">berikut ini beberapa proyek yang telat saya buat.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(Proyek => (
          <div key={Proyek.id} className="p-4 bg-zinc-800 rounded-md"data-aos="fade-up" data-aos-duration="1000" data-aos-delay={Proyek.dad} data-aos-once="true">
            <img src={Proyek.gambar} alt="Proyek Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{Proyek.nama}</h1>
              <p className="text-base/loose mb-4">{Proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {Proyek.tools.map((tool, index) =>(
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
              <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* {Proyek} */}

{/* ================= KONTAK ================= */}
<div className="kontak mt-32 sm:p-10 p-5" id="kontak">

  <h1 
    className="text-4xl mb-3 font-bold text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Kontak
  </h1>

  <p 
    className="text-base text-center mb-14 opacity-60"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Mari terhubung dengan saya.
  </p>

  {/* CARD CONTAINER */}
  <div 
    className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="500"
    data-aos-once="true"
  >

    {/* ================= GMAIL ================= */}
<button 
  onClick={handleCopyEmail}
  className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 
             rounded-2xl p-8 flex flex-col items-center text-center w-full
             transition-all duration-300 
             hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
>
  <div className="bg-zinc-800 p-5 rounded-full text-4xl mb-4 transition duration-300 group-hover:text-red-500">
    <i className="ri-mail-fill"></i>
  </div>

  <h3 className="font-semibold mb-1">Email</h3>
  <p className="text-sm opacity-60 group-hover:opacity-100 transition">
    muhamadalif1123@gmail.com
  </p>
</button>

    {/* ================= WHATSAPP ================= */}
    <a 
      href="https://wa.me/62881022233166"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 
                 rounded-2xl p-8 flex flex-col items-center text-center
                 transition-all duration-300 
                 hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
    >
      <div className="bg-zinc-800 p-5 rounded-full text-4xl mb-4 transition duration-300 group-hover:text-green-500">
        <i className="ri-whatsapp-fill"></i>
      </div>

      <h3 className="font-semibold mb-1">WhatsApp</h3>
      <p className="text-sm opacity-60 group-hover:opacity-100 transition">
        +62 881-0222-33166
      </p>
    </a>

    {/* ================= LINKEDIN ================= */}
    <a 
      href="https://www.linkedin.com/in/muhammad-alif-nurfirdaus-242691364/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 
                 rounded-2xl p-8 flex flex-col items-center text-center
                 transition-all duration-300 
                 hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
    >
      <div className="bg-zinc-800 p-5 rounded-full text-4xl mb-4 transition duration-300 group-hover:text-blue-500">
        <i className="ri-linkedin-box-fill"></i>
      </div>

      <h3 className="font-semibold mb-1">LinkedIn</h3>
      <p className="text-sm opacity-60 group-hover:opacity-100 transition">
        muhammad-alif-nurfirdaus
      </p>
    </a>

  </div>

</div>
{/* ================= END KONTAK ================= */}
{copied && (
  <div className="fixed bottom-6 right-6 bg-violet-600 text-white px-6 py-3 rounded-xl shadow-lg animate__animated animate__fadeInUp">
    Email berhasil disalin ✅
  </div>
)}
      </>
    )
  }

  export default App
