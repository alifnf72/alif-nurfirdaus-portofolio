const Footer = () => {
  return (
    <footer className="mt-32 py-8 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Portofolio
        </h1>

        {/* Copyright */}
        <p className="text-sm opacity-60 text-center">
          © 2025 Muhammad Alif Nurfirdaus. All rights reserved.
        </p>

        {/* Social */}
        <div className="flex items-center gap-5 text-xl">
          <a 
            href="https://github.com/alifnf72/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            <i className="ri-github-fill"></i>
          </a>

          <a 
            href="https://www.instagram.com/alif_nurfirdaus/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            <i className="ri-instagram-fill"></i>
          </a>

          <a 
            href="https://www.youtube.com/@MuhamadAlif-nq1ic" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
          >
            <i className="ri-youtube-fill"></i>
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;