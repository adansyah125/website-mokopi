export default function Footer() {
  return (
    <footer className="bg-primary-container w-full rounded-t-[2.5rem] mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-16 py-16 max-w-7xl mx-auto">

        {/* Brand Section */}
        <div className="md:col-span-1">

          <span className="font-display text-2xl text-white font-bold block mb-6">
            Mokopi Garden
          </span>

          <p className="text-white/70 text-sm leading-relaxed">
            © 2026 Mokopi Garden. Tempat ternyaman untuk menikmati kopi dan alam.
          </p>

          {/* Social Media */}
          <div className="flex gap-5 mt-8">

            <a
              href="#"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>

            <a
              href="#"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok text-2xl"></i>
            </a>

            <a
              href="#"
              className="text-white/60 hover:text-white transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>

          </div>
        </div>

        {/* Navigation */}
        <div>

          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Navigation
          </h4>

          <ul className="space-y-4">

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#menu"
              >
                Menu
              </a>
            </li>

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#outlets"
              >
                Outlets
              </a>
            </li>

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#reviews"
              >
                Reviews
              </a>
            </li>

          </ul>
        </div>

        {/* Company */}
        <div>

          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Company
          </h4>

          <ul className="space-y-4">

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#"
              >
                Our Story
              </a>
            </li>

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-white/70 hover:text-white transition-colors text-sm"
                href="#"
              >
                Privacy Policy
              </a>
            </li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>

          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
            Stay Updated
          </h4>

          <p className="text-white/70 text-sm mb-4">
            Dapatkan info promo menarik langsung di emailmu.
          </p>

          <div className="flex">

            <input
              className="bg-white/10 border border-white/20 rounded-l-xl px-4 py-2 w-full focus:outline-none focus:border-white/50 text-white placeholder-white/30 text-sm"
              placeholder="Email address"
              type="email"
            />

            <button className="bg-white text-primary px-4 py-2 rounded-r-xl font-bold text-sm hover:bg-opacity-90 transition-all">
              Join
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 border-t border-white/10 text-center">

        <p className="text-white/40 text-xs tracking-wide">
          © 2026 MOKOPI GARDEN - ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}