

export default function Menu() {
    const menus = [
  {
    title: "Mokopi Signature",
    image: "assets/kopi.jpeg",
    desc: "Perpaduan espresso premium dengan susu creamy rahasia yang bikin nagih.",
    price: "Rp 18.000",
    badge: "Best Seller",
  },
  {
    title: "Paket Nasi Puas",
    image: "assets/menu2.jpg",
    desc: "Nasi hangat dengan lauk pilihan dan sambal khas yang menggugah selera.",
    price: "Rp 18.000 - Rp 27.000",
  },
  {
    title: "Cemilan Hangat",
    image: "assets/menu3.jpg",
    desc: "Aneka gorengan premium yang renyah, pas untuk teman ngobrol sore hari.",
    price: "Rp 17.500 - Rp 29.500",
    badge: "Favorite",
  },
  {
    title: "Aren Garden Latte",
    image: "assets/menu4.jpg",
    desc: "Sentuhan manis gula aren alami berpadu sempurna dengan kopi susu segar.",
    price: "Rp 12.000 - Rp 22.000",
  },
];
  return (
    <section className="py-12 md:py-24 bg-surface" id="menu">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="text-center mb-16">
          <h2 className="text-primary font-display text-4xl mb-4 font-bold">
            Menu Rekomendasi
          </h2>

          <p className="text-on-surface-variant mb-6">
            Pilihan terbaik untuk menemani momen santaimu di taman.
          </p>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-outline-variant/10"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">

                <img
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  src={menu.image}
                  alt={menu.title}
                />

                {menu.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {menu.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg text-primary mb-1">
                {menu.title}
              </h3>

              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                {menu.desc}
              </p>

              <span className="text-primary font-bold text-lg">
                {menu.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}