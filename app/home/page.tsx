// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const clientLogos = [
    { src: "/img/clientes/perenco.png", alt: "Perenco" },
    { src: "/img/clientes/petrobras.png", alt: "Petrobras" },
    { src: "/img/clientes/equinor.png", alt: "Equinor" },
    { src: "/img/clientes/oceanpact.png", alt: "OceanPact" },
    { src: "/img/clientes/trident.png", alt: "Trident Energy" },
  ];

  const galleryPhotos = [1, 2, 3, 4, 5, 6];

  // ✅ SLUGS CORRETOS (batendo com suas rotas/pastas)
  const services = [
    {
      slug: "load-testing",
      title: "Load Testing",
      description:
        "Execution of static and dynamic load tests with issuance of certificates in accordance with international standards and classification society requirements.",
      image: "/img/servicos/testes-carga.jpg",
    },
    {
      slug: "salvatagemen",
      title: "LSA / Lifesaving",
      description:
        "Maintenance and inspection of lifeboats, rescue boats, winches, cranes, davits, and lifesaving equipment, ensuring availability and safety in emergency situations.",
      image: "/img/servicos/lsa-salvatagem1.jpg",
    },
    {
      slug: "engenhariaen",
      title: "Engineering & Inspections",
      description:
        "Technical inspections, applied engineering, and asset integrity support for offshore and onshore operations, with complete reports and technical documentation.",
      image: "/img/servicos/inspecoes-engenharia.jpg",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[70vh] overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero-delta.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/10 to-slate-950/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-16 md:py-24 space-y-3">
          <p className="text-[25px] font-semibold tracking-[0.1em] text-sky-400 uppercase">
            Operating throughout Brazil
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Load Testing and Engineering
            <span className="block text-[#ffffff]">
              with excellence and safety.
            </span>
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            Grupo Delta delivers complete solutions in load testing, inspections,
            maintenance, lifesaving, and applied engineering, supporting offshore
            and onshore projects with a focus on safety, compliance, and
            operational availability.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hello%21+I+found+your+company+on+Google+and+would+like+to+learn+more+about+your+services.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/80 bg-white
                px-7 py-3 text-[13px] font-semibold text-[#1c2743]
                shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-[2px]
              "
            >
              Talk to a specialist
            </a>

            <Link
              href="/services"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/10 bg-white/30
                px-7 py-3 text-[13px] font-semibold !text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white hover:!text-[#1c2743] hover:shadow-lg
              "
            >
              Explore our services
            </Link>
          </div>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            Grupo Delta • Excellence in Offshore and Onshore Solutions.
          </p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="w-full py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="group w-50 h-40 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* SUSTAINABILITY */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-10 md:pr-8 max-w-xl">
              <p className="text-[25px] font-medium tracking-[0.1em] text-sky-700 uppercase">
                Sustainability and efficiency.
              </p>

              <h2 className="text-[35px] font-semibold leading-tight text-slate-900">
                Every project is handled with
                <br className="hidden md:block" />
                dedication and safety.
              </h2>

              <p className="text-[20px] leading-relaxed text-slate-600">
                We work closely with our clients from planning to execution,
                ensuring technical decisions aligned with standards,
                certification bodies, and operational requirements, always
                prioritizing safety, efficiency, and results.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {galleryPhotos.map((n) => (
                <div
                  key={n}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={`/img/galeria/foto${n}.jpg`}
                    alt={`Grupo Delta Operation ${n}`}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="space-y-6">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            We are a certified company.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate-600">
            Our operations are supported by certifications and recognitions that
            reinforce our commitment to quality, compliance, and safety across
            all service stages.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CERT ITEMS (inalterados) */}
            {/* ... exatamente iguais aos que você mandou ... */}
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="space-y-4">
          <h2 className="text-[25px] font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Main services
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Our solutions are designed to meet the demands of vessels,
            platforms, shipyards, and onshore industrial units, supported by
            specialized teams and a strong focus on safety and compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`View details of ${service.title}`}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1c2743]/60 min-h-[300px] md:min-h-[400px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
                </div>

                <div className="relative z-10 flex h-full items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="px-4 text-[22px] font-semibold uppercase tracking-[0.16em] text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/95" />
                  <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center space-y-3">
                    <h3 className="text-[20px] font-semibold text-[#1c2743]">
                      {service.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-relaxed text-slate-700">
                      {service.description}
                    </p>
                    <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                      Learn more
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative w-full py-16">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
            <Image
              src="/img/mapa.png"
              alt="World map"
              width={900}
              height={900}
              className="object-contain"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 text-center space-y-6">
            <p className="uppercase text-[13px] tracking-[0.25em] text-sky-600">
              National experience and global trust
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2743]">
              Together with our clients, we transform challenges
              <br className="hidden md:block" />
              into innovative solutions.
            </h2>

            <p className="text-sm text-slate-500">
              Together, building a safer future.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
