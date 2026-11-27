import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

const NAV_ITEMS = [
  "beranda",
  "tentang",
  "tools",
  "keterampilan",
  "pengalaman",
  "sertifikat",
  "proyek",
  "kontak",
];

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang].nav;

  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      setActive(scrollTop > 100);

      NAV_ITEMS.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
            ? "bg-zinc-800/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Content Wrapper */}
      <div className="w-full flex items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Portofolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleClick(item)}
                  className={`relative transition duration-300 ${
                    activeLink === item
                      ? "text-violet-500"
                      : "text-white hover:text-violet-400"
                  }`}
                >
                  {t[item]}

                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-violet-500 transition-all duration-300 ${
                      activeLink === item ? "w-full" : "w-0"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Language & Theme Controls */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1 bg-zinc-900/80 border border-zinc-700 rounded-full p-1 text-xs font-semibold"
              role="group"
              aria-label="Language switcher"
            >
              <Globe className="w-3.5 h-3.5 text-violet-400 ml-1.5 mr-0.5" />
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "id"
                    ? "bg-violet-700 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en"
                    ? "bg-violet-700 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:border-violet-500 hover:text-violet-400 transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={theme === "dark" ? "Mode Siang" : "Mode Malam"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Actions: Theme + Language Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:border-violet-500 transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-violet-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="inline-flex items-center gap-1 bg-zinc-900/80 border border-zinc-700 rounded-full px-2.5 py-1 text-xs font-semibold text-white"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-violet-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`text-lg transition duration-300 ${
                  activeLink === item
                    ? "text-violet-500"
                    : "text-white hover:text-violet-400"
                }`}
              >
                {t[item]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
