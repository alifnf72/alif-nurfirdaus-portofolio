import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    "beranda",
    "tentang",
    "keterampilan",
    "pengalaman",
    "proyek",
    "kontak",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      setActive(scrollTop > 100);

      navItems.forEach((section) => {
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
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`relative capitalize transition duration-300 ${
                  activeLink === item
                    ? "text-violet-500"
                    : "text-white hover:text-violet-400"
                }`}
              >
                {item}

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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`capitalize text-lg transition duration-300 ${
                  activeLink === item
                    ? "text-violet-500"
                    : "text-white hover:text-violet-400"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
