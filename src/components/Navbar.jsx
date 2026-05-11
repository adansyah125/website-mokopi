import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
            <img
              src="assets/logo.png"
              className="w-full h-full object-cover"
              alt="Mokopi Logo"
            />
          </div>

          <span className="font-display text-xl font-bold text-primary tracking-tight">
            MOKOPI GARDEN
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full text-sm"
          href="#home">Home</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all text-sm"
            href="#menu">Menu</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all text-sm"
            href="#outlet">Outlets</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all text-sm"
            href="#review">Reviews</a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-primary focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface border-b border-outline-variant/20 shadow-xl
            ${open ? "max-h-96 opacity-100 translate-y-0 py-6 px-6" : "max-h-0 opacity-0 -translate-y-2 px-6 py-0"} `}>
        <div className="space-y-4">
            <a className="block text-primary font-bold text-lg"
                href="#home">Home</a>
            <a className="block text-on-surface-variant font-medium text-lg"
                href="#menu">Menu</a>
            <a className="block text-on-surface-variant font-medium text-lg"
                href="#outlet">Outlets</a>
            <a className="block text-on-surface-variant font-medium text-lg"
                href="#review">Reviews</a>
            <hr className="border-outline-variant/20" />

        </div>
    </div>
    </nav>
  );
}