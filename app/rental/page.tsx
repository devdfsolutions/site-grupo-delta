// app/locacao/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Mode = "locacao" | "venda";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5521986560236&text&type=phone_number&app_absent=0";

export default function LocacaoPage() {
  const [mode, setMode] = useState<Mode>("locacao");

  return (
    <>
      {/* =====================================
          HERO – IMAGE WITH HOVER (DESKTOP)
         ===================================== */}
      <section className="relative w-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px]">
        {/* Background image */}
        <Image
          src="/img/locacao/heroloc.png"
          alt="Equipment rental Grupo Delta"
          fill
          priority
          className="object-cover"
        />

        {/* Interaction layer */}
        <div className="absolute inset-0 group">
          {/* Overlay: always visible on mobile, only on hover on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                text-center text-white px-4
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
                EQUIPMENT RENTAL
              </h1>
              <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
                Complete solutions for testing, trials, and maritime and
                industrial operations.
              </p>

              <div className="mt-6">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          MAIN BLOCK
         ===================================== */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-20 space-y-16">
        {/* Main title */}
        <section className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
            Rental for Testing
          </h2>
          <p className="text-slate-500 text-sm md:text-base">Grupo Delta</p>
        </section>

        {/* =====================================
            MAIN PRODUCTS GRID
           ===================================== */}
        <section className="grid md:grid-cols-4 gap-8">
          {/* 1 - Water bags */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc1.png"
                alt="Water bags"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Water Bags
            </h3>
            <p className="text-slate-500 text-xs mt-1">Water Bags</p>
          </div>

          {/* 2 - Load cells */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc2.png"
                alt="Load cells"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Load Cells
            </h3>
            <p className="text-slate-500 text-xs mt-1">Load Cells</p>
          </div>

          {/* 3 - Lifeboat test kits */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc3.png"
                alt="Lifeboat test kits"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Lifeboat Test Kits
            </h3>
            <p className="text-slate-500 text-xs mt-1">Lifeboats Test Kits</p>
          </div>

          {/* 4 - Traction device */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc4.png"
                alt="Traction device"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Traction Device
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              Traction devices for Padeyes, Tie Down Points, Beams and Hook
              Release.
            </p>
          </div>
        </section>

        {/* =====================================
            BOAT BLOCK + RENTAL / SALE TOGGLE
           ===================================== */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Large image WITH HOVER LIKE HERO */}
          <div className="relative w-full min-h-[260px] md:min-h-[320px] rounded-xl overflow-hidden group">
            <Image
              src="/img/locacao/loc5.png"
              alt="Grupo Delta rescue boat"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
        text-center text-white px-4
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300
      "
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                  RESCUE BOAT RENTAL
                </h3>

                <p className="mt-2 text-xs md:text-sm text-white/90 max-w-xs mx-auto">
                  Safety, agility, and reliability for maritime operations.
                </p>

                <div className="mt-5">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Text with toggle */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6">
            {/* Rental / Sale Toggle */}
            <div className="flex items-center justify-end gap-3 text-xs font-medium mb-4">
              <button
                type="button"
                onClick={() => setMode("locacao")}
                className={
                  mode === "locacao"
                    ? "text-sky-600"
                    : "text-slate-500 hover:text-slate-700"
                }
              >
                Rental
              </button>

              <button
                type="button"
                onClick={() =>
                  setMode((prev) => (prev === "locacao" ? "venda" : "locacao"))
                }
                aria-label="Toggle between rental and sale"
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  mode === "venda" ? "bg-sky-500" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
                    mode === "venda" ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => setMode("venda")}
                className={
                  mode === "venda"
                    ? "text-sky-600"
                    : "text-slate-500 hover:text-slate-700"
                }
              >
                Sale
              </button>
            </div>

            {/* Content changes depending on mode */}
            {mode === "locacao" ? (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  Safety in maritime operations is a priority, and Grupo Delta’s
                  rescue boat rental ensures efficiency and reliability for your
                  company.
                </p>
                <p>
                  With flexible rental options and timelines adjusted to your
                  needs, our team is ready to help you choose the best solution
                  for your demand.
                </p>
                <p>
                  Ensure the protection and safety of your crew with Grupo
                  Delta’s rescue boats.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  When it comes to safety at sea, Grupo Delta delivers excellent
                  solutions with the{" "}
                  <strong>sale of high-quality rescue boats</strong>.
                </p>
                <p>
                  We also provide technical consulting to help your company
                  choose the ideal model according to your operational needs.
                </p>
                <p>
                  Invest in your team’s safety with Grupo Delta rescue boats.
                  Contact us to learn about our models and get a solution
                  tailored to your operations.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
