

export default function Gallery() {
    const galleries = [
  {
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    quote: "Vibe nugas paling dapet di Bandung sore-sore.",
    name: "Sarah Wijaya",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    quote: "Latte art-nya juara, kopinya pas gak terlalu strong.",
    name: "Andra Ramadhan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    quote: "Tempat ternyaman buat cari inspirasi baru.",
    name: "Maya Putri",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    quote: "Cemilannya renyah, pas banget nemenin americano.",
    name: "Rizky Kurniawan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    quote: "Biji kopinya fresh, aromanya kecium sampai luar.",
    name: "Dewa Gede",
  },
];
  return (
    <section className="py-12 md:py-24 bg-surface" id="review">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-display text-4xl font-bold">
            Galeri Pengunjung
          </h2>

          <p className="text-on-surface-variant mt-4">
            Geser untuk melihat momen seru di Mokopi Garden.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[350px] snap-center"
            >

              <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200 shadow-md">

                <img
                  src={gallery.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={gallery.name}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">

                  <p className="text-white italic text-sm mb-2">
                    "{gallery.quote}"
                  </p>

                  <span className="text-white font-bold text-xs uppercase">
                    — {gallery.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <div className="w-2 h-1 bg-primary/20 rounded-full"></div>
            <div className="w-2 h-1 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}