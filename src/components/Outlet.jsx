

export default function Outlet() {
    const outlets = [
  {
    name: "Mokopi Cafe",
    address: "Jl. Terusan Buah Batu No. 123, Kota Bandung, Jawa Barat",
    rating: "4.8",
    reviews: "500+ Reviews",
    stars: 5,
  },
  {
    name: "Mokopi Cimindi",
    address: "Jl. Raya Cibeureum No. 45, Kota Bandung, Jawa Barat",
    rating: "4.5",
    reviews: "320 Reviews",
    stars: 4,
  },
  {
    name: "Mokopi Jatinangor",
    address: "Jl. Raya Jatinangor No. 88, Sumedang, Jawa Barat",
    rating: "4.9",
    reviews: "850+ Reviews",
    stars: 5,
    halfStar: true,
  },
];
  return (
    <section
      className="py-12 md:py-24 bg-surface-container-low"
      id="outlet"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-secondary text-sm uppercase tracking-widest block mb-2 font-bold">
              Lokasi Lainnya
            </span>

            <h2 className="text-primary font-display text-4xl font-bold">
              Kunjungi Outlet Kami
            </h2>
          </div>

          <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-container transition-colors">
            Lihat Semua Lokasi
          </button>
        </div>

        {/* Outlet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outlets.map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-outline-variant/20 hover:shadow-lg transition-shadow"
            >

              {/* Icon */}
              <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">
                  location_on
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-2">
                {outlet.name}
              </h3>

              {/* Address */}
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                {outlet.address}
              </p>

              <div className="space-y-4">

                {/* Rating */}
                <div className="flex items-center gap-2">

                  <div className="flex text-yellow-500">

                    {[...Array(outlet.stars)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined !text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}

                    {outlet.halfStar && (
                      <span
                        className="material-symbols-outlined !text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star_half
                      </span>
                    )}
                  </div>

                  <span className="text-sm font-bold text-on-surface">
                    {outlet.rating}
                  </span>

                  <span className="text-xs text-on-surface-variant">
                    ({outlet.reviews})
                  </span>
                </div>

                {/* Maps Button */}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-surface-container-high hover:bg-primary hover:text-white rounded-xl transition-all group"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    directions
                  </span>

                  <span className="text-sm font-bold">
                    Lihat Maps
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}