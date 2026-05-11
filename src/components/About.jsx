export default function About() {
  return (
    <section className="py-stack-lg bg-secondary-container/30">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="space-y-stack-md">
          <span className="text-on-secondary-container font-label-md text-label-md uppercase tracking-widest">
            About Our Craft
          </span>

          <h2 className="text-primary font-headline-md text-headline-md">
            Our Story
          </h2>

          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Berawal dari kecintaan mendalam terhadap budaya kopi Nusantara,
            Mokopi Garden hadir sebagai ruang kontemplasi bagi para pencinta kopi.
          </p>

          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Setiap biji kopi kami kurasi secara etis dan dipanggang dengan
            presisi untuk mempertahankan karakteristik unik dari setiap daerah asalnya.
          </p>

          <div className="pt-4">
            <button className="text-primary font-bold flex items-center gap-2 group">
              Learn More

              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            className="w-full aspect-[4/5] object-cover"
            src="assets/story.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}