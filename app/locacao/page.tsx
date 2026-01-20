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
          HERO – IMAGEM COM HOVER (DESKTOP)
         ===================================== */}
      <section className="relative w-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px]">
        {/* Imagem de fundo */}
        <Image
          src="/img/locacao/heroloc.png"
          alt="Locação de equipamentos Grupo Delta"
          fill
          priority
          className="object-cover"
        />

        {/* Camada de interação */}
        <div className="absolute inset-0 group">
          {/* Overlay: sempre visível no mobile, só no hover no desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          {/* Conteúdo central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                text-center text-white px-4
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
                LOCAÇÃO DE EQUIPAMENTOS
              </h1>
              <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
                Soluções completas para testes, ensaios e operações marítimas e
                industriais.
              </p>

              <div className="mt-6">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOCO PRINCIPAL
         ===================================== */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-20 space-y-16">
        {/* Título principal */}
        <section className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
            Locação para Testes
          </h2>
          <p className="text-slate-500 text-sm md:text-base">Grupo Delta</p>
        </section>

        {/* =====================================
            GRID DE PRODUTOS PRINCIPAIS
           ===================================== */}
        <section className="grid md:grid-cols-4 gap-8">
          {/* 1 - Bolsas d'água */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc1.png"
                alt="Bolsas d'água"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Bolsas D’água
            </h3>
            <p className="text-slate-500 text-xs mt-1">Water Bags</p>
          </div>

          {/* 2 - Células de carga */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc2.png"
                alt="Células de carga"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Células De Carga
            </h3>
            <p className="text-slate-500 text-xs mt-1">Load Cells</p>
          </div>

          {/* 3 - Kits para teste em baleeiras */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc3.png"
                alt="Kits para teste em baleeiras"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Kits Para Teste Em Baleeiras
            </h3>
            <p className="text-slate-500 text-xs mt-1">Lifeboats Test Kits</p>
          </div>

          {/* 4 - Dispositivo de tração */}
          <div className="text-center">
            <div className="relative w-full aspect-[4/3] mb-4">
              <Image
                src="/img/locacao/loc4.png"
                alt="Dispositivo de tração"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Dispositivo De Tração
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              Traction devices for Padeyes, Tie Down Points, Beams and Hook
              Release.
            </p>
          </div>
        </section>

        {/* =====================================
            BLOCO BOTE + TOGGLE LOCAÇÃO / VENDA
           ===================================== */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Imagem grande COM HOVER IGUAL HERO */}
          <div className="relative w-full min-h-[260px] md:min-h-[320px] rounded-xl overflow-hidden group">
            <Image
              src="/img/locacao/loc5.png"
              alt="Bote de resgate Grupo Delta"
              fill
              className="object-cover"
            />

            {/* Overlay: sempre visível no mobile, só no hover no desktop */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

            {/* Conteúdo (botão) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-sm md:text-base font-semibold shadow-md"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>

          {/* Texto com toggle */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6">
            {/* Toggle Locação / Venda */}
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
                Locação
              </button>

              <button
                type="button"
                onClick={() =>
                  setMode((prev) => (prev === "locacao" ? "venda" : "locacao"))
                }
                aria-label="Alternar entre locação e venda"
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
                Venda
              </button>
            </div>

            {/* Conteúdo que muda conforme o modo */}
            {mode === "locacao" ? (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  A segurança em operações marítimas é prioridade, e a locação
                  de botes de resgate do Grupo Delta garante eficiência e
                  confiabilidade para sua empresa.
                </p>
                <p>
                  Com flexibilidade de locação e prazos ajustados à sua
                  necessidade, nossa equipe está pronta para ajudar na escolha
                  da melhor solução para a sua demanda.
                </p>
                <p>
                  Garanta a proteção e segurança da sua tripulação com os botes
                  de resgate do Grupo Delta.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <p>
                  Quando o assunto é segurança no mar, o Grupo Delta oferece
                  soluções de excelência com a{" "}
                  <strong>venda de botes de resgate</strong> de alta qualidade.
                </p>
                <p>
                  Além disso, oferecemos consultoria técnica para ajudar sua
                  empresa a escolher o modelo ideal, de acordo com as suas
                  necessidades operacionais.
                </p>
                <p>
                  Invista na segurança da sua equipe com os botes de resgate do
                  Grupo Delta. Entre em contato para conhecer nossos modelos e
                  obter uma solução sob medida para suas operações.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
