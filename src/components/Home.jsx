export default function Home() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="assets/mokopi.jpg"
          alt="gambar mokopi"
        />

        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-margin-mobile">
        <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">
          MOKOPI GARDEN
        </h1>

        <p className="text-white/90 font-body-lg text-body-lg max-w-2xl mx-auto mb-10">
          Temukan perpaduan sempurna antara biji kopi pilihan dan seni
          penyeduhan manual yang membawa ketenangan dalam setiap tegukan.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#menu"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
          >
            Pilihan Menu
          </a>
        </div>
      </div>
    </section>
  );
}