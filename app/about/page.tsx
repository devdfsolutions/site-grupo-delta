// app/sobre/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselSlides = [
  {
    img: "/img/sobre/fotosobre3.jpg",
    title: "Women Leading with Excellence",
    text: "Professionals who perform with competence and determination in a challenging sector, essential to the success of Grupo Delta’s offshore operations.",
  },
  {
    img: "/img/sobre/fotosobre5.jpg",
    title: "Teamwork",
    text: "Each team member contributes to the success of every operation, in the field and beyond.",
  },
  {
    img: "/img/sobre/fotosobre6.jpg",
    title: "Sustainable Solutions",
    text: "A commitment to practices that minimize environmental impact, promoting a more sustainable future.",
  },
  {
    img: "/img/sobre/fotosobre4.jpg",
    title: "Operational Excellence",
    text: "Operations conducted with a focus on safety, efficiency, and consistent results for our clients.",
  },
];

// 🔧 GLOBAL ICON SETTINGS FOR THIS BLOCK
const ICON_SIZE = 60; // icon size (px)
const ICON_OPACITY = 100; // opacity

export default function SobrePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // auto slide (10s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  return (
    <main className="w-full flex flex-col bg-slate-50">
      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <Image
          src="/img/sobre/fotosobre2.jpg"
          alt="Grupo Delta offshore operation"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.08em]">
            ABOUT US
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-100">
            Efficiency is our field. Safety, innovation, and consistent results
            in every operation.
          </p>
        </div>
      </section>

      {/* INTRO / OUR COMMITMENTS */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-700 uppercase mb-3">
          Grupo Delta Solutions and Engineering
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Our commitments.
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed max-w-3xl">
          <p>
            With a highly qualified team and an unwavering commitment to safety,
            innovation, and sustainability, Grupo Delta delivers complete
            solutions in engineering, maintenance, inspections, and load testing
            for offshore and onshore operations across the country.
          </p>
          <p>
            We operate in an integrated way on critical projects, ensuring
            operational availability, compliance with standards, and results
            that exceed our clients’ expectations.
          </p>
        </div>
      </section>

      {/* CARDS – INNOVATION / CUSTOMIZATION / SUSTAINABILITY */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 pb-12 md:pb-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Offshore Technological Innovation",
            desc: "We integrate current technologies into offshore operations, ensuring efficiency, traceability, and safety in every project.",
            icon: "⚙️",
          },
          {
            title: "Customized Solutions",
            desc: "We develop tailor-made solutions, adapted to the specific needs of each unit, vessel, or industrial plant.",
            icon: "📌",
          },
          {
            title: "Sustainable and Safe Operations",
            desc: "Our processes prioritize people’s safety, environmental preservation, and compliance with national and international standards.",
            icon: "🌱",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="font-semibold text-lg text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* CAROUSEL – WOMEN LEADING WITH EXCELLENCE */}
      <section className="w-full bg-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {carouselSlides.map((slide) => (
                <div
                  key={slide.img}
                  className="relative min-w-full h-[420px] md:h-[500px] lg:h-[550px]"
                >
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35 flex items-end">
                    <div className="p-6 text-slate-50 max-w-xl">
                      <h4 className="font-semibold text-lg md:text-xl mb-1">
                        {slide.title}
                      </h4>
                      <p className="text-xs md:text-sm">{slide.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Side buttons */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
            >
              ›
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-slate-800 w-5"
                    : "bg-slate-400 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MATTERS TO US */}
      <section className="relative w-full overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/img/sobre/sobreonda.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-200/10" />

        {/* Logo on the right corner */}
        <div className="absolute right-5 bottom-60 w-24 md:w-40 opacity-70">
          <Image
            src="/img/logodeltabranca1.png"
            alt="Delta logo"
            width={160}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="bottom-2 relative max-w-6xl mx-auto px-4 lg:px-0 py-14 md:py-20 text-slate-50">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            What matters to us?
          </h2>
          <p className="text-base md:text-lg text-emerald-300 mb-8">
            Together, building a safer future.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Reduction",
                desc: "We constantly seek to optimize processes and adopt innovative solutions, reducing costs without compromising quality.",
                icon: "/img/sobre/icons/dinheiro.png",
              },
              {
                title: "Commitment to the Future",
                desc: "We ensure safety in our operations while preserving the environment and respecting the communities where we operate.",
                icon: "/img/sobre/icons/mundo.png",
              },
              {
                title: "People Valuation",
                desc: "Our team is our greatest asset. We invest in continuous development and in an environment that values merit and innovation.",
                icon: "/img/sobre/icons/humanos.png",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="object-contain"
                    style={{ opacity: ICON_OPACITY }}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-100/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK GALLERY – continues, but stays close to the block above */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-4 md:py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre3.jpg"
              alt="Operation 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre4.jpg"
              alt="Operation 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden">
            <Image
              src="/img/sobre/fotosobre6.jpg"
              alt="Operation 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
