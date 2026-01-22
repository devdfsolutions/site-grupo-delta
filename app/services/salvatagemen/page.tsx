// app/servicos/lsa-salvatagem/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LsaSalvatagemPage() {
  return (
    <>
      {/* =====================================
    HERO – MAIN IMAGE WITH HOVER + BUTTON
====================================== */}
      <section className="w-full overflow-hidden">
        <div
          className="
      group relative w-full h-[360px] md:h-[460px] lg:h-[520px]
      overflow-hidden cursor-pointer
    "
        >
          {/* IMAGE */}
          <Image
            src="/img/servicos/lsa/herolsa.png"
            alt="LSA Lifesaving Appliances"
            fill
            priority
            className="
        object-cover
        transition-all duration-700 ease-out
        group-hover:scale-105
      "
          />

          {/* OVERLAY */}
          <div
            className="
        absolute inset-0 bg-black/10
        transition-all duration-700
        group-hover:bg-black/50
      "
          />

          {/* TEXT + BUTTON (appears only on hover) */}
          <div
            className="
        absolute inset-0 flex flex-col items-center justify-center 
        opacity-0 group-hover:opacity-100 
        transition-all duration-700 text-center px-4
      "
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
              LSA | IMO Inspections
            </h2>

            <p className="text-white text-sm md:text-base mb-6 max-w-xl">
              We are committed to safety of life at sea.
            </p>

            {/* WHATSAPP BUTTON */}
            <Link
              href="https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0"
              target="_blank"
              className="
          px-8 py-3 rounded-full 
          bg-sky-600 text-white font-semibold
          shadow-lg hover:bg-sky-700
          transition-colors
        "
            >
              Message
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          MAIN BLOCK WITH BG + COLLAGE
          (uses painelbarco, barcoguincho1, barcoguincho2, barcomar, colete)
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/servicos/lsa/painelbarco.png')" }}
      >
        {/* light overlay */}
        <div className="absolute inset-0 bg-white/83 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE COLLAGE */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/lsa/barcoguincho1.png"
              alt="Lifeboat winch"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcoguincho2.png"
              alt="Winch operation"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcomar3.png"
              alt="Lifeboat operating at sea"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/colete.png"
              alt="Safety devices"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
          </div>

          {/* MAIN TEXT */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Solutions and Engineering
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Lifesaving Appliances (LSA).
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              We perform comprehensive inspections, routine maintenance, and
              structural repairs on lifeboats, winches, davits, accumulators,
              and other LSA equipment, ensuring compliance with international
              standards and the requirements of flags and ROs.
            </p>

            <div>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          OUR SERVICES – TOP GRID
          (uses barcochao, Design-sem-nome-22, colete, painelbarco)
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">Our services</h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            LSA for cargo vessels
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Annual inspection */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho1.png"
                alt="Annual lifeboat inspection"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Annual Inspection
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Carried out under approvals from Flags, ROs, and Manufacturers,
              ensuring the full condition of lifesaving equipment.
            </p>
          </div>

          {/* Five-year inspections */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho3.png"
                alt="Five-year inspections"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Five-year Inspections
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Trials, tests, and full overhauls of boats, winches, and davits,
              according to classification society requirements.
            </p>
          </div>

          {/* Safety devices */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/colete.png"
                alt="Safety devices"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Safety Devices
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Supply and maintenance of lifebuoys, lifejackets, belts, thermal
              protective aids, and other items essential to crew safety.
            </p>
          </div>

          {/* Structural repairs */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho2.png"
                alt="Structural repairs"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Structural Repairs
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Structural reinforcements, hull adjustments, crack sealing,
              component replacement, and full refurbishment of lifeboats.
            </p>
          </div>
        </div>

        {/* =====================================
            OUR SERVICES – BOTTOM GRID
            (uses encaixe, encaixe2, encaixe3, Design-sem-nome-23)
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Refurbishment */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/painelbarco.png"
                alt="Lifeboat refurbishment"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Lifeboat Refurbishment
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Painting, gelcoat repairs, window replacement, seats, hardware,
              and finishing items, bringing the equipment back to like-new
              condition.
            </p>
          </div>

          {/* Engines */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/encaixe.png"
                alt="Engine maintenance"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Preventive Engine Maintenance
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Full overhauls, component replacement, and operational tests on
              lifeboat engines and auxiliary systems.
            </p>
          </div>

          {/* Davits */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/truco1.png"
                alt="Davit maintenance"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Preventive Davit Maintenance
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspection of structures, pins, rollers, and operating systems,
              ensuring safe operation in emergency situations.
            </p>
          </div>

          {/* Winches */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/Design-sem-nome-23.png"
                alt="Winch maintenance"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Preventive Winch Maintenance
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Overhauls, lubrication, adjustments, and component replacement for
              lifeboat launching and recovery winches.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
