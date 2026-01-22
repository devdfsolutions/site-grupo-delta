// app/servicos/inspecao/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function InspecaoPage() {
  return (
    <>
      {/* ================================
          HERO – IMAGE WITH HOVER + WHATSAPP
      ================================= */}
      <section className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden group">
        {/* Image */}
        <Image
          src="/img/servicos/inspecoes/heroinspec.png"
          alt="Inspection Services"
          fill
          priority
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Text + button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">INSPECTION</h1>
          <p className="mt-2 text-sm md:text-base">
            We are committed to safety of life at sea.
          </p>

          {/* WhatsApp button visible only on hover */}
          <Link
            href="https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0"
            className="opacity-0 group-hover:opacity-100 mt-6 px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 transition-all text-white font-semibold shadow-lg"
          >
            Message
          </Link>
        </div>
      </section>

      {/* ==========================================
          MAIN BLOCK — IMAGE COLLAGE + TEXT
      =========================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/servicos/inspecoes/inspec4.png')", // used as a "textured" background
        }}
      >
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE COLLAGE */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/inspecoes/inspec4.png"
              alt="Inspection testing"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
            <Image
              src="/img/servicos/inspecoes/barcoinspec1.png"
              alt="Marine inspection"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
              style={{ height: "100%" }}
            />
            <Image
              src="/img/servicos/inspecoes/inspec5.png"
              alt="Inspection team"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
            <Image
              src="/img/servicos/inspecoes/inspec3.png"
              alt="Offshore operations"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* MAIN TEXT */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Solutions and Engineering
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743] leading-tight">
              Inspection and Certification.
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              We ensure that every piece of equipment meets technical standards
              and safety requirements, delivering optimal performance and
              reliability in onshore and offshore operations.
            </p>

            <div>
              <Link
                href="https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          OUR SERVICES — 1st ROW
      =========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">Our services</h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Equipment Inspection:
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Lifting gear */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/materialdeicamento.png"
                alt="Lifting gear"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Lifting Gear
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspection of lifting gear, including slings, wire ropes, hooks,
              shackles, and other accessories.
            </p>
          </div>

          {/* Crane */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/guindaste.png"
                alt="Crane"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">Crane</h3>
            <p className="text-slate-600 text-sm mt-2">
              Crane inspections covering mechanical, structural, and safety
              components.
            </p>
          </div>

          {/* Rope access */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/acessoporcordas.png"
                alt="Rope access"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Rope Access
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Rope access inspection for hard-to-reach areas such as elevated
              structures and confined spaces.
            </p>
          </div>

          {/* Tugger Winch */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/tugger.png"
                alt="Tugger Winch"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Tugger Winches
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspections of tugger winches, ensuring the functionality of these
              auxiliary winches essential for load handling and lifting
              operations.
            </p>
          </div>
        </div>

        {/* ==========================================
            OUR SERVICES — 2nd ROW
        =========================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* ROV / Underwater */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/drone.png"
                alt="ROV inspection"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              ROV (Remotely Operated Vehicles)
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Underwater environments that are hard to access, including
              inspections of submerged structures, platforms, vessel hulls, and
              pipelines.
            </p>
          </div>

          {/* Wind towers */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/vento.png"
                alt="Wind towers"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Wind Turbine Towers
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Complete inspections of wind turbine towers, ensuring structural
              integrity and the safe operation of all components.
            </p>
          </div>

          {/* PT/NDT tests */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/ensaiolp.png"
                alt="PT and NDT testing"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              PT and NDT Testing
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Genuine spare parts are supplied as part of our many ready-to-use
              solutions.
            </p>
          </div>

          {/* Drone / Aerial */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/inspecdrone.png"
                alt="Drone inspection"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Drone Inspection
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Drone inspections in structures and hard-to-reach areas such as
              platforms, wind towers, pipelines, and industrial facilities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
