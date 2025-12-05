// app/servicos/inspecao/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function InspecaoPage() {
  return (
    <>
      {/* ================================
          HERO – IMAGEM COM HOVER + WHATSAPP
      ================================= */}
      <section className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden group">
        {/* Imagem */}
        <Image
          src="/img/servicos/inspecoes/heroinspec.png"
          alt="Serviços de Inspeção"
          fill
          priority
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

        {/* Texto + botão */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">INSPEÇÃO</h1>
          <p className="mt-2 text-sm md:text-base">
            Estamos comprometidos com a segurança da vida no mar.
          </p>

          {/* Botão WhatsApp visível somente no hover */}
          <Link
            href="https://api.whatsapp.com/send/?phone=5521995303032&text&type=phone_number&app_absent=0"
            className="opacity-0 group-hover:opacity-100 mt-6 px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 transition-all text-white font-semibold shadow-lg"
          >
            Mensagem
          </Link>
        </div>
      </section>

      {/* ==========================================
          BLOCO PRINCIPAL — COLAGEM DE IMAGENS + TEXTO
      =========================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/servicos/inspecoes/inspec4.png')", // usa como fundo "texturizado"
        }}
      >
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLAGEM DE IMAGENS */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/inspecoes/inspec4.png"
              alt="Ensaios de inspeção"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
            <Image
              src="/img/servicos/inspecoes/barcoinspec1.png"
              alt="Inspeção Naval"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
              style={{height: "100%"}}
            />
            <Image
              src="/img/servicos/inspecoes/inspec5.png"
              alt="Equipe de inspeção"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
            <Image
              src="/img/servicos/inspecoes/inspec3.png"
              alt="Operações Offshore"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Soluções e Engenharia
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743] leading-tight">
              Inspeção e Certificação.
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Garantimos que cada equipamento atenda às normas técnicas e
              padrões de segurança, assegurando desempenho ideal e
              confiabilidade em operações onshore e offshore.
            </p>

            <div>
              <Link
                href="https://api.whatsapp.com/send/?phone=5521995303032&text&type=phone_number&app_absent=0"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          NOSSOS SERVIÇOS — 1ª LINHA
      =========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">Nossos serviços</h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            Inspeção em Equipamentos:
          </p>
        </div>

        {/* GRID SUPERIOR */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Material de Içamento */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/materialdeicamento.png"
                alt="Material de içamento"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Material de Içamento
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeção em materiais de içamento, incluindo cintas, cabos de aço, ganchos, manilhas e demais acessórios.
            </p>
          </div>

          {/* Guindaste */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/guindaste.png"
                alt="Guindaste"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">Guindaste</h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeções em guindastes, componentes mecânicos, estruturais e de segurança.
            </p>
          </div>

          {/* Acesso por Corda */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/acessoporcordas.png"
                alt="Acesso por corda"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Acesso por Corda
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeção com acesso por corda, para áreas de difícil acesso, como estruturas em altura e espaços confinados.
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
              inspeções em Tugger Winches, funcionalidade desses guinchos auxiliares essenciais para operações de movimentação e içamento de cargas..
            </p>
          </div>
        </div>

        {/* ==========================================
            NOSSOS SERVIÇOS — 2ª LINHA
        =========================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* ROV / Submerso */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/drone.png"
                alt="ROV inspeção"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              ROV (Veículos Operados Remotamente)
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ambientes subaquáticos de difícil acesso, como inspeções de estruturas submersas, plataformas, cascos de embarcações e tubulações.
            </p>
          </div>

          {/* Torres Eólicas */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/vento.png"
                alt="Torres eólicas"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Torres Eólicas
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeções completas em torres eólicas, garantindo a integridade estrutural e o funcionamento seguro de todos os componentes.
            </p>
          </div>

          {/* Ensaios LP/END */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/ensaiolp.png"
                alt="Ensaios LP e END"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Ensaios LP e END
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Peças de reposição genuínas são fornecidas como parte de nossas muitas soluções prontas para uso.
            </p>
          </div>

          {/* Drone / Aéreo */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/inspecoes/inspecdrone.png"
                alt="Inspeção com drone"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspeção Drone
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeção com drones em estruturas e áreas de difícil acesso, como plataformas, torres eólicas, dutos e obras industriais.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
