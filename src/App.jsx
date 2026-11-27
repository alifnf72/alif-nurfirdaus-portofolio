import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  Award,
  GraduationCap,
  Bot,
  Terminal,
  Sparkles,
  Rocket,
  Code2,
  BrainCircuit,
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const TOOL_ICON_MAP = {
  chatgpt: Bot,
  claude: Terminal,
  gemini: Sparkles,
  antigravity: Rocket,
  codex: Code2,
  deepseek: BrainCircuit,
};

const PROJECT_CATEGORIES = [
  { key: "Semua", labelId: "Semua", labelEn: "All" },
  {
    key: "Website & Profil",
    labelId: "Website & Profil",
    labelEn: "Website & Profile",
  },
  { key: "Web App", labelId: "Web App", labelEn: "Web App" },
  {
    key: "Sistem Informasi",
    labelId: "Sistem Informasi",
    labelEn: "Information System",
  },
];

function App() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProyek, setSelectedProyek] = useState(null);
  const [selectedSertifikat, setSelectedSertifikat] = useState(null);
  const [brokenCertImages, setBrokenCertImages] = useState({});

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProyek(null);
        setSelectedSertifikat(null);
      }
    };

    if (selectedProyek || selectedSertifikat) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProyek, selectedSertifikat]);

  const filteredProyek =
    selectedCategory === "Semua"
      ? listProyek
      : listProyek.filter((item) => item.kategori === selectedCategory);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    const email = "muhamadalif1123@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin email:", error);
    }
  };

  const getProjectTitle = (p) => (lang === "en" && p.nama_en ? p.nama_en : p.nama);
  const getProjectCategory = (p) =>
    lang === "en" && p.kategori_en ? p.kategori_en : p.kategori;
  const getProjectDesc = (p) => (lang === "en" && p.desk_en ? p.desk_en : p.desk);

  const getCertTitle = (c) => (lang === "en" && c.nama_en ? c.nama_en : c.nama);
  const getCertIssuer = (c) =>
    lang === "en" && c.penerbit_en ? c.penerbit_en : c.penerbit;
  const getCertDesc = (c) => (lang === "en" && c.desk_en ? c.desk_en : c.desk);

  return (
    <div className="container-main">
      {/* ================= HERO ================= */}
      <div
        className="hero relative grid md:grid-cols-2 items-center pt-32 md:pt-36 xl:gap-0 gap-6 grid-cols-1"
        id="beranda"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-violet-600/15 blur-[120px] rounded-full -z-10"
        />

        <div
          className="animate__animated animate__fadeInUp"
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-3 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
              />
              <q>{t.hero.quote}</q>
            </div>

            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-3.5 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.openToWork}
            </span>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6 text-gradient">
            {t.hero.greeting}
          </h1>

          <p className="text-base/loose mb-6 opacity-60">
            {t.hero.description}
          </p>

          <div className="flex items-center sm:gap-4 gap-2 flex-wrap">
            <a
              href="/assets/cv/alif.pdf"
              download="alif.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex items-center gap-2 glow-violet"
            >
              {t.hero.downloadCv}
              <i className="ri-download-line ri-lg"></i>
            </a>

            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 glow-violet flex items-center gap-2"
            >
              {t.hero.viewProjects}
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative isolate flex justify-center items-center group">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="
                absolute
                w-[320px] sm:w-[360px] md:w-[450px] lg:w-[520px]
                md:-translate-x-8 lg:-translate-x-12
                md:-translate-y-10 lg:-translate-y-14
                z-0 opacity-80
                animate__animated animate__fadeInUp
                transition-all duration-500 ease-out
                group-hover:scale-110 group-hover:-translate-y-4
              "
              style={{ animationDelay: "700ms" }}
            >
              <path
                fill="#8B5CF6"
                d="M62.4,-49.8C77.3,-31,83.5,-5.3,75.9,13.1C68.4,31.4,47,42.4,27.9,47.5C8.9,52.7,-8,52.1,-24.9,46.1C-41.9,40.1,-59.1,28.7,-63.4,13.4C-67.8,-1.9,-59.3,-21.2,-46.6,-39.5C-33.9,-57.9,-16.9,-75.2,3.4,-77.9C23.7,-80.6,47.4,-68.7,62.4,-49.8Z"
                transform="translate(100 100)"
              />
            </svg>

            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="
                relative z-10
                w-[260px] sm:w-[300px] md:w-[380px] lg:w-[440px]
                md:-translate-x-8 lg:-translate-x-12
                md:-translate-y-16 lg:-translate-y-20
                animate__animated animate__fadeInUp
                transition-all duration-500 ease-out
                group-hover:scale-105 group-hover:-translate-y-6
              "
              style={{ animationDelay: "700ms" }}
            />
          </div>
        </div>
      </div>

      {/* ================= TENTANG SAYA ================= */}
      <div className="tentang mt-24 py-10" id="tentang">
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
          data-aos-once="true"
        >
          {/* FOTO PROFILE MOBILE */}
          <img
            src={DataImage.HeroImage}
            alt="Profile Alif"
            className="w-12 rounded-md mb-10 sm:hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
            loading="lazy"
          />

          {/* DESKRIPSI */}
          <div className="space-y-5 text-base/loose mb-8 leading-relaxed text-zinc-200">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              {t.about.p1}
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              {t.about.p2}
            </p>
          </div>

          {/* KREDENSIAL */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="inline-flex items-center gap-2.5 bg-zinc-900/70 border border-zinc-700 px-4 py-2.5 rounded-xl text-sm">
              <GraduationCap className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{t.about.degree}</span>
            </div>
            <div className="inline-flex items-center gap-2.5 bg-zinc-900/70 border border-zinc-700 px-4 py-2.5 rounded-xl text-sm">
              <Award className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{t.about.cert}</span>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* FOTO PROFILE DESKTOP */}
            <img
              src={DataImage.HeroImage}
              alt="Profile Alif"
              className="w-12 rounded-md sm:block hidden"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="700"
              data-aos-once="true"
              loading="lazy"
            />

            {/* STATISTIK */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* PROYEK */}
              <div
                className="transition-all duration-300 hover:scale-110 hover:text-violet-500"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-once="true"
              >
                <h1 className="text-4xl font-bold mb-1">
                  8 <span className="text-violet-500">+</span>
                </h1>
                <p>{t.about.statProjects}</p>
              </div>

              {/* PENGALAMAN */}
              <div
                className="transition-all duration-300 hover:scale-110 hover:text-violet-500"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <h1 className="text-4xl font-bold mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>{t.about.statYears}</p>
              </div>

              {/* MAGANG */}
              <div
                className="transition-all duration-300 hover:scale-110 hover:text-violet-500"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                <h1 className="text-4xl font-bold mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>{t.about.statInternships}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOOLS ================= */}
      <div className="tools mt-24 text-center" id="tools">
        <h1
          className="text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.tools.title}
        </h1>

        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.tools.subtitle}
        </p>

        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => {
            const ToolIcon = tool.icon ? TOOL_ICON_MAP[tool.icon] : null;

            return (
              <div
                className="flex items-center gap-3 p-3 border border-zinc-600 rounded hover:bg-zinc-800 hover:border-violet-600 transition duration-300 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                {tool.gambar ? (
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-14 h-14 object-contain bg-zinc-800 p-1 rounded group-hover:bg-zinc-900 shrink-0"
                  />
                ) : (
                  <div
                    className={`w-14 h-14 rounded-lg border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                      tool.colorClass ||
                      "bg-violet-500/15 text-violet-400 border-violet-500/30"
                    }`}
                  >
                    {ToolIcon && <ToolIcon className="w-7 h-7" />}
                  </div>
                )}

                <div className="text-left">
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50 text-sm">{tool.ket}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= KETERAMPILAN ================= */}
      <div className="keterampilan mt-24 py-10" id="keterampilan">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.skills.title}
        </h1>

        <p
          className="text-base text-center opacity-50 mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.skills.subtitle}
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {t.skills.items.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-violet-600 hover:-translate-y-2 transition duration-300 group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={skill.delay}
              data-aos-once="true"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-violet-500">
                  {skill.title}
                </h3>
              </div>
              <p className="opacity-70 text-sm mb-3">{skill.desc}</p>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": skill.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PENGALAMAN ================= */}
      <div className="pengalaman mt-24 py-10" id="pengalaman">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.experience.title}
        </h1>

        <p
          className="text-base text-center opacity-50 mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.experience.subtitle}
        </p>

        <div className="xl:w-5/6 lg:w-5/6 w-full mx-auto">
          <div className="timeline space-y-8">
            {t.experience.items.map((exp, idx) => (
              <div
                key={idx}
                className="timeline-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={exp.delay}
                data-aos-once="true"
              >
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-content bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-violet-600 hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl font-bold text-violet-400 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-violet-500 mb-3">{exp.company}</p>
                  <ul className="opacity-70 list-disc pl-5 space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SERTIFIKAT ================= */}
      <div className="sertifikat mt-24 py-10" id="sertifikat">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.certificates.title}
        </h1>

        <p
          className="text-base/loose text-center opacity-50 mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.certificates.subtitle}
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listSertifikat.map((sertifikat) => {
            const isBroken = brokenCertImages[sertifikat.id];
            const certTitle = getCertTitle(sertifikat);
            const certIssuer = getCertIssuer(sertifikat);
            const certDesc = getCertDesc(sertifikat);

            return (
              <div
                key={sertifikat.id}
                className="group p-4 bg-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-600 hover:shadow-xl hover:shadow-violet-600/20"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={sertifikat.dad}
                data-aos-once="true"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedSertifikat(sertifikat)}
                    className="w-full overflow-hidden rounded-lg block text-left bg-zinc-900/70"
                    aria-label={`${t.certificates.viewBtn} ${certTitle}`}
                  >
                    {!isBroken && sertifikat.gambar ? (
                      <img
                        src={sertifikat.gambar}
                        alt={certTitle}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={() =>
                          setBrokenCertImages((prev) => ({
                            ...prev,
                            [sertifikat.id]: true,
                          }))
                        }
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] flex flex-col items-center justify-center gap-2 text-zinc-400 border border-dashed border-zinc-700 rounded-lg p-4 text-center">
                        <Award className="w-10 h-10 text-violet-400" />
                        <span className="text-xs opacity-80">
                          {t.certificates.noPreview}
                        </span>
                      </div>
                    )}
                  </button>

                  <div>
                    <div className="flex items-center justify-between gap-2 mt-4">
                      <span className="text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-md">
                        {certIssuer}
                      </span>
                      <span className="text-xs text-zinc-400 font-semibold">
                        {sertifikat.tahun}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mt-3 mb-2">{certTitle}</h2>

                    <p className="text-sm leading-relaxed opacity-75">
                      {certDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-700/60 text-center">
                  <button
                    type="button"
                    onClick={() => setSelectedSertifikat(sertifikat)}
                    className="group/btn inline-flex items-center justify-center gap-1.5 bg-violet-700 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all duration-300 ease-out hover:bg-violet-600 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/40 active:scale-95 active:translate-y-0"
                  >
                    <span>{t.certificates.viewBtn}</span>
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= PROYEK ================= */}
      <div className="proyek mt-24 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.projects.title}
        </h1>

        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.projects.subtitle}
        </p>

        {/* FILTER KATEGORI PROYEK */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === category.key
                  ? "bg-violet-700 border-violet-500 text-white shadow-lg shadow-violet-600/30"
                  : "bg-zinc-800/80 border-zinc-700 text-zinc-300 hover:border-violet-500 hover:text-white"
              }`}
            >
              {lang === "en" ? category.labelEn : category.labelId}
            </button>
          ))}
        </div>

        <div className="proyek-box mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredProyek.map((Proyek) => {
            const title = getProjectTitle(Proyek);
            const category = getProjectCategory(Proyek);
            const desc = getProjectDesc(Proyek);

            return (
              <div
                key={Proyek.id}
                className="group p-4 bg-zinc-800 rounded-xl border border-zinc-700 proyek-card flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-600 hover:shadow-xl hover:shadow-violet-600/20"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={Proyek.dad}
                data-aos-once="true"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedProyek(Proyek)}
                    className="proyek-image w-full overflow-hidden rounded-lg block text-left"
                    aria-label={`${t.projects.viewDetail} ${title}`}
                  >
                    <img
                      src={Proyek.gambar}
                      alt={title}
                      className="w-full aspect-video object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>

                  <div>
                    <span className="inline-block mt-4 text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-md">
                      {category}
                    </span>

                    <h1 className="text-2xl font-bold mt-2 mb-3">{title}</h1>

                    <p className="text-sm leading-relaxed mb-4 opacity-80 line-clamp-3">
                      {desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {Proyek.tools.map((tool, index) => (
                        <p
                          className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-xs"
                          key={index}
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="proyek-hover mt-6 pt-4 border-t border-zinc-700/60 text-center">
                  <p className="text-xs opacity-80 mb-2">
                    {t.projects.viewHint}
                  </p>
                  {Proyek.link ? (
                    <a
                      href={Proyek.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-1.5 bg-violet-700 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all duration-300 ease-out hover:bg-violet-600 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/40 active:scale-95 active:translate-y-0"
                    >
                      <span>{t.projects.visitWebsite}</span>
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                        →
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProyek(Proyek)}
                      className="group/btn inline-flex items-center justify-center gap-1.5 bg-violet-700 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all duration-300 ease-out hover:bg-violet-600 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/40 active:scale-95 active:translate-y-0"
                    >
                      <span>{t.projects.viewDetail}</span>
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                        →
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= KONTAK ================= */}
      <div className="kontak mt-24 sm:p-10 p-5" id="kontak">
        <h1
          className="text-4xl mb-3 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t.contact.title}
        </h1>

        <p
          className="text-base text-center mb-14 opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t.contact.subtitle}
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* EMAIL */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center w-full transition-all duration-300 hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
          >
            <div className="bg-zinc-800 p-5 rounded-full text-4xl mb-4 transition duration-300 group-hover:text-red-500">
              <i className="ri-mail-fill"></i>
            </div>

            <h3 className="font-semibold mb-1">Email</h3>

            <p className="text-sm opacity-60 group-hover:opacity-100 transition">
              muhamadalif1123@gmail.com
            </p>
          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/62881022233166"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
          >
            <div className="bg-zinc-800 p-5 rounded-full text-4xl mb-4 transition duration-300 group-hover:text-green-500">
              <i className="ri-whatsapp-fill"></i>
            </div>

            <h3 className="font-semibold mb-1">WhatsApp</h3>

            <p className="text-sm opacity-60 group-hover:opacity-100 transition">
              +62 881-0222-33166
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/muhammad-alif-nurfirdaus-242691364/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-3 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/20 group"
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

      {/* ================= MODAL DETAIL PROYEK ================= */}
      {selectedProyek && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProyek(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-proyek-title"
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate__animated animate__zoomIn animate__faster"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProyek.gambar}
                alt={getProjectTitle(selectedProyek)}
                className="w-full max-h-80 object-cover rounded-t-2xl"
              />
              <button
                type="button"
                onClick={() => setSelectedProyek(null)}
                className="absolute top-3 right-3 bg-zinc-900/80 hover:bg-violet-700 text-white p-2 rounded-full transition-colors"
                aria-label={t.projects.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="inline-block text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-md mb-3">
                {getProjectCategory(selectedProyek)}
              </span>

              <h2 id="modal-proyek-title" className="text-2xl font-bold mb-3">
                {getProjectTitle(selectedProyek)}
              </h2>

              <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                {getProjectDesc(selectedProyek)}
              </p>

              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  {t.projects.techUsed}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="py-1 px-3 border border-zinc-600 bg-zinc-800 rounded-md text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                {selectedProyek.link && (
                  <a
                    href={selectedProyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                  >
                    <span>{t.projects.visitWebsite}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProyek(null)}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  {t.projects.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL SERTIFIKAT ================= */}
      {selectedSertifikat && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedSertifikat(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-sertifikat-title"
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate__animated animate__zoomIn animate__faster"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-zinc-950">
              {!brokenCertImages[selectedSertifikat.id] &&
              selectedSertifikat.gambar ? (
                <img
                  src={selectedSertifikat.gambar}
                  alt={getCertTitle(selectedSertifikat)}
                  className="w-full max-h-[60vh] object-contain rounded-t-2xl"
                />
              ) : (
                <div className="w-full h-56 flex flex-col items-center justify-center gap-3 text-zinc-400 p-6 text-center">
                  <Award className="w-12 h-12 text-violet-400" />
                  <p className="text-sm">
                    {t.certificates.addHint}{" "}
                    <code className="text-violet-400">
                      public{selectedSertifikat.gambar}
                    </code>
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedSertifikat(null)}
                className="absolute top-3 right-3 bg-zinc-900/80 hover:bg-violet-700 text-white p-2 rounded-full transition-colors"
                aria-label={t.certificates.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-block text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-md">
                  {getCertIssuer(selectedSertifikat)}
                </span>
                <span className="text-xs text-zinc-400 font-semibold">
                  {t.certificates.yearPrefix} {selectedSertifikat.tahun}
                </span>
              </div>

              <h2
                id="modal-sertifikat-title"
                className="text-2xl font-bold mb-3"
              >
                {getCertTitle(selectedSertifikat)}
              </h2>

              <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                {getCertDesc(selectedSertifikat)}
              </p>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                {(selectedSertifikat.filePdf || selectedSertifikat.link) && (
                  <a
                    href={selectedSertifikat.filePdf || selectedSertifikat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-600 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                  >
                    <span>{t.certificates.openDoc}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedSertifikat(null)}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  {t.certificates.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= NOTIFIKASI COPY EMAIL ================= */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-violet-600 text-white px-6 py-3 rounded-xl shadow-lg animate__animated animate__fadeInUp z-50">
          {t.contact.emailCopied}
        </div>
      )}

      {/* BACK TO TOP */}
      <button
        onClick={handleScrollToTop}
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label={t.contact.backToTop}
      >
        <i className="ri-arrow-up-line ri-lg"></i>
      </button>
    </div>
  );
}

export default App;
