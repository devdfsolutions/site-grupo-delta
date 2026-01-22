// app/solucoes-em-mro/page.tsx
"use client";

import Image from "next/image";

export default function SolucoesMroPage() {
  return (
    <>
      {/* =====================================================
          HERO – VIDEO (no text, the text is already in the video)
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-black">
        <video
          className="w-full h-[260px] md:h-[420px] lg:h-[650px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/clipheromro.mp4" type="video/mp4" />
        </video>
      </section>

      {/* =====================================================
          MAIN BLOCK – MATERIALS SOLUTIONS
      ====================================================== */}
      <main className="bg-white">
        {/* Blue gradient band with cards */}
        <section className="bg-gradient-to-b from-sky-50 via-sky-100/60 to-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <header className="text-center mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
                Materials Solutions
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-600">
                The widest selection for your industrial and operational needs.
              </p>
            </header>

            {/* ====== ROW 1 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Electrical materials */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/mateletric.png"
                    alt="Electrical materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Electrical Materials
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  A wide range of electrical materials and equipment for sale,
                  such as bulbs, luminaires, outlets, switches, power strips,
                  and cables.
                </p>
              </div>

              {/* Explosion-proof */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/matexplo.png"
                    alt="Explosion-proof materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Explosion-Proof Materials
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Safety solutions: surveillance cameras, DVRs, alarm systems,
                  alarm panels, sensors, caller ID phones, and access control.
                </p>
              </div>

              {/* Industrial automation */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/automacaoind.png"
                    alt="Industrial automation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Industrial Automation
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Parts and components for industrial automation, such as linear
                  guides, servo motors, reducers, electrical connectors, remote
                  controllers, and control boards.
                </p>
              </div>

              {/* Facilities */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/solucfacilit.png"
                    alt="Facilities solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Facilities Solutions
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Electronics: practicality for your daily routine. Find TVs,
                  computers, notebooks, tablets, and much more to meet your
                  needs with technology and efficiency.
                </p>
              </div>
            </div>

            {/* ====== ROW 2 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-14">
              {/* Pipes & fittings */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/tuboseconect.png"
                    alt="Pipes and fittings"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Pipes &amp; Fittings
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Carbon steel pipes, with or without seam, and stainless steel
                  pipes. Find weld fittings, threaded fittings, and hydraulic
                  connectors.
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/ferramentas.png"
                    alt="Tools"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Tools
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We offer a broad product line such as drills, impact drivers,
                  saws, sanders, wrenches, hammers, pliers, screws, and drill
                  bits.
                </p>
              </div>

              {/* Fasteners */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/fixadores.png"
                    alt="Fasteners"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Fasteners
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Genuine spare parts are supplied as part of our many
                  ready-to-use solutions.
                </p>
              </div>

              {/* PPE / EPC */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/epi.png"
                    alt="PPE and collective protection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  PPE / Collective Protection
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Used to protect workers against risks that threaten their
                  safety, for example: PPE (gloves, masks) and collective
                  protection: safety signs and anti-slip tapes.
                </p>
              </div>
            </div>

            {/* ====== ROW 3 ====== */}
            <div className="grid md:grid-cols-4 gap-10 md:gap-8">
              {/* Painting */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/pintura.png"
                    alt="Painting"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Painting
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Essential materials for renovations and painting, such as wall
                  paints, spray paint, pigments, sealer, fixative, wall putty,
                  and brushes.
                </p>
              </div>

              {/* Refrigeration */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/regrigeracao.png"
                    alt="Refrigeration"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Refrigeration
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Find cylinders, propellers, turbines, thermostats,
                  capacitors, valves, dampers, and resistors with the best
                  prices in the market.
                </p>
              </div>

              {/* Valves and flanges */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/flanges.png"
                    alt="Valves and flanges"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  Valves and Flanges
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Valves in piping projects ensure efficient flow control, and
                  flanges in industrial piping systems connect components.
                </p>
              </div>

              {/* MECANAVI */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/img/solucoes-em-mro/mecanavi.png"
                    alt="MECANAVI"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1c2743]">
                  MECANAVI
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We offer high-quality products and equipment to meet your
                  industrial and technological needs with efficiency and
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENT / PARTNER LOGOS
        ====================================================== */}
        <section className="py-12 md:py-15 border-y border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/petrologo.png"
                    alt="Petrobras"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Petrobras
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/oceanlogo.png"
                    alt="Oceaneering"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Oceaneering
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-25">
                  <Image
                    src="/img/solucoes-em-mro/seatriumlogo.png"
                    alt="Seatrium"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Seatrium
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-16">
                  <Image
                    src="/img/solucoes-em-mro/foresealogo.png"
                    alt="Foresea"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Foresea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
    FINAL BLOCK – CONTACT INFO (CLICKABLE)
====================================================== */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
                Grupo Delta Solutions and Engineering
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
                Contact Information
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                We are always ready to help. Talk to our sales team and find the
                best solution in materials and equipment for your project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-sm text-slate-700">
              {/* Email → /contato */}
              <a
                href="/contato"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ✉
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Sales Email</h3>
                <p>comercial@grupodelta.ind.br</p>
              </a>

              {/* Phones → WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Hello!+I%27m+interested+in+MRO+solutions."
                target="_blank"
                rel="noreferrer"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ☎
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Phone</h3>
                <p>(21) 98656-0236 (24 hours)</p>
                <p>(21) 99530-3032</p>
                <p>(21) 3491-5335</p>
              </a>

              {/* Address → /contato */}
              <a
                href="/contato"
                className="space-y-2 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-center mb-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    📍
                  </span>
                </div>
                <h3 className="font-semibold text-[#1c2743]">Delta Base</h3>
                <p>Rio de Janeiro | Duque de Caxias</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
