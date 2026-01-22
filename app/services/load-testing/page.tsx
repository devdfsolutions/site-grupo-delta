"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestesDeCargaPage() {
  return (
    <>
      {/* =====================================
          HERO – MAIN IMAGE + HOVER CTA
      ====================================== */}
      <section className="w-full">
        <div className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] group overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <Image
            src="/img/servicos/teste-carga/herocarga1.png"
            alt="Load testing with water bags"
            fill
            priority
            className="object-cover"
          />

          {/* SOFT OVERLAY (normal) */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/55" />

          {/* CONTENT THAT APPEARS ON HOVER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            {/* TITLE / SUBTITLE stay semi-visible and get emphasized on hover */}
            <h1
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-semibold text-white mb-3
                transition-all duration-300
                group-hover:scale-[1.02]
              "
            >
              Load Testing
            </h1>

            <p
              className="
                text-xs md:text-sm lg:text-base
                text-slate-100 max-w-2xl mb-6
                transition-opacity duration-300
                group-hover:opacity-100
              "
            >
              We ensure safety and reliability in lifting and hoisting
              operations, with load tests performed in accordance with
              international standards.
            </p>

            {/* WHATSAPP BUTTON – ONLY 100% VISIBLE ON HOVER */}
            <a
              href="https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                text-sm md:text-base font-semibold
                bg-sky-600 text-white
                shadow-md
                opacity-0 group-hover:opacity-100
                translate-y-3 group-hover:translate-y-0
                transition-all duration-300
                hover:bg-sky-700
              "
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          MAIN BLOCK WITH BLUR BACKGROUND + COLLAGE
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/servicos/teste-carga/fundoblur.png')",
        }}
      >
        {/* light overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE COLLAGE (CARGAS1–4) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas1.png"
                alt="Load testing with water bags"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas2.png"
                alt="Load testing operation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas3.png"
                alt="Team during a load testing operation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargas4.png"
                alt="Load testing water bags in operation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* MAIN TEXT */}
          <div className="space-y-4 md:space-y-6">
            {/* adjust font size / spacing here */}
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Solutions and Engineering
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Load testing equipment.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Load testing is essential to ensure operational safety, confirming
              the maximum weight the equipment can withstand and preventing
              accidents, structural damage, and unplanned shutdowns.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We work with water bags, solid weights, instrumented measurements,
              and the issuance of reports and certificates in accordance with
              classification societies, flags, and ROs requirements.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-sky-600 text-sky-700 text-sm md:text-base font-semibold hover:bg-sky-50 transition-colors"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          OUR SERVICES – TOP GRID
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">Our services</h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Load testing on equipment.
          </p>
        </div>

        {/* FIRST ROW – 4 CARDS */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Helideck tie-down points */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/buricasheliporto.png"
                alt="Load test on helideck tie-down points"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Helideck Tie-Down Points
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load tests on helideck tie-down points using high-precision
              equipment, ensuring bearing capacity and the safety of aerial
              operations.
            </p>
          </div>

          {/* Spreader Bars */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/spreaderbars.png"
                alt="Load test on spreader bars"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Spreader Bars
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load testing on spreader bars and lifting accessories, ensuring
              integrity and reliability in lifting operations.
            </p>
          </div>

          {/* Cranes, winches and derricks */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/guindasteguinchos.png"
                alt="Load test on cranes and winches"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Cranes, Winches and Derricks
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load tests on cranes, winches, and lifting systems on platforms,
              vessels, and onshore units.
            </p>
          </div>

          {/* Lifeboat load testing */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testecargabaleeira.png"
                alt="Load testing on lifeboat"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Lifeboat Load Testing
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load tests on lifeboats, verifying fastening points, davits, and
              launching systems, in accordance with maritime authority
              requirements.
            </p>
          </div>
        </div>

        {/* =====================================
            OUR SERVICES – BOTTOM GRID
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Load testing on padeyes */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/cargaemolhais.png"
                alt="Load testing on padeyes"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Padeye Load Testing
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load testing on padeyes, anchor points, and fastening devices,
              with issuance of reports and certificates.
            </p>
          </div>

          {/* Bollard Pull Test */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/bollardpull.png"
                alt="Bollard pull test"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Bollard Pull Test
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Pulling force test on vessels, assessing maximum traction
              capability for offshore and port operations.
            </p>
          </div>

          {/* Load testing on SKID */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testedecargaskid.png"
                alt="Load testing on SKID"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Load Testing on SKID
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Structural testing on SKIDs and modules, ensuring strength,
              integrity, and suitability for operating conditions.
            </p>
          </div>

          {/* Overhead crane load testing */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/img/servicos/teste-carga/testeponterolante.png"
                alt="Load test on overhead crane"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Overhead Crane Load Testing
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Load testing and verification of devices on overhead cranes,
              ensuring rated capacity and operational safety.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
