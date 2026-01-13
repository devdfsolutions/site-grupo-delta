// app/servicos/lsa-salvatagem/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LsaSalvatagemPage() {
  return (
    <>
      {/* =====================================
    HERO – IMAGEM PRINCIPAL COM HOVER + BOTÃO
====================================== */}
      <section className="w-full overflow-hidden">
        <div
          className="
      group relative w-full h-[360px] md:h-[460px] lg:h-[520px]
      overflow-hidden cursor-pointer
    "
        >
          {/* IMAGEM */}
          <Image
            src="/img/servicos/lsa/herolsa.png"
            alt="Aparelhos Salva-Vidas LSA"
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

          {/* TEXTO + BOTÃO (aparece somente no hover) */}
          <div
            className="
        absolute inset-0 flex flex-col items-center justify-center 
        opacity-0 group-hover:opacity-100 
        transition-all duration-700 text-center px-4
      "
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
              LSA | Inspeções IMO
            </h2>

            <p className="text-white text-sm md:text-base mb-6 max-w-xl">
              Estamos comprometidos com a segurança da vida no mar.
            </p>

            {/* BOTÃO WHATSAPP */}
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
              Mensagem
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOCO PRINCIPAL COM BG + COLAGEM
          (usa painelbarco, barcoguincho1, barcoguincho2, barcomar, colete)
      ====================================== */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/servicos/lsa/painelbarco.png')" }}
      >
        {/* overlay clarinho */}
        <div className="absolute inset-0 bg-white/83 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* COLAGEM DE IMAGENS */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/servicos/lsa/barcoguincho1.png"
              alt="Guincho de bote salva-vidas"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcoguincho2.png"
              alt="Operação com guincho"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/barcomar3.png"
              alt="Bote em operação no mar"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
            <Image
              src="/img/servicos/lsa/colete.png"
              alt="Dispositivos de segurança"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-sm"
            />
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Soluções e Engenharia
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1c2743] leading-tight">
              Aparelhos Salva-Vidas (LSA).
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Realizamos inspeções abrangentes, manutenções de rotina e reparos
              estruturais em botes salva-vidas, guinchos, turcos, acumuladores e
              demais equipamentos LSA, garantindo conformidade com normas
              internacionais e requisitos de bandeiras e ROs.
            </p>

            <div>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-sky-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-sky-700 transition-colors"
              >
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          NOSSOS SERVIÇOS – GRID SUPERIOR
          (usa barcochao, Design-sem-nome-22, colete, painelbarco)
      ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1c2743]">Nossos serviços</h2>
          <p className="text-slate-500 mt-2 text-base md:text-lg">
            LSA para navios de carga
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Inspeção anual */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho1.png"
                alt="Inspeção anual de botes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspeção Anual
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Realizada sob aprovações de Bandeiras, ROs e Fabricantes,
              garantindo a plena condição dos equipamentos de salvatagem.
            </p>
          </div>

          {/* Inspeções Quinquenais */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho3.png"
                alt="Inspeções quinquenais"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Inspeções Quinquenais
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Ensaios, testes e revisões completas em botes, guinchos e turcos,
              conforme requisitos de sociedades classificadoras.
            </p>
          </div>

          {/* Dispositivos de Segurança */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/colete.png"
                alt="Dispositivos de segurança"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Dispositivos de Segurança
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Fornecimento e manutenção de bóias salva-vidas, coletes, cintos,
              dispositivos térmicos e outros itens essenciais à segurança da
              tripulação.
            </p>
          </div>

          {/* Reparos na estrutura */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/barcoguincho2.png"
                alt="Reparos estruturais"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Reparos na Estrutura
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Reforços estruturais, ajustes em casco, fechamento de trincas,
              substituição de componentes e revitalização completa dos botes.
            </p>
          </div>
        </div>

        {/* =====================================
            NOSSOS SERVIÇOS – GRID INFERIOR
            (usa encaixe, encaixe2, encaixe3, Design-sem-nome-23)
        ====================================== */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Revitalização */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/painelbarco.png"
                alt="Revitalização de botes"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Revitalização de Botes Salva-Vidas
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Pintura, reparos em gelcoat, substituição de janelas, assentos,
              ferragens e itens de acabamento, deixando o equipamento em padrão
              de novo.
            </p>
          </div>

          {/* Motores */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/encaixe.png"
                alt="Manutenção de motores"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Manutenção Preventiva de Motores
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Revisões completas, troca de componentes e testes operacionais em
              motores de botes e sistemas auxiliares.
            </p>
          </div>

          {/* Turcos */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/truco1.png"
                alt="Manutenção de turcos"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Manutenção Preventiva de Turcos
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Inspeção de estruturas, pinos, roletes e sistemas de acionamento,
              garantindo operação segura em situações de emergência.
            </p>
          </div>

          {/* Guinchos */}
          <div className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src="/img/servicos/lsa/Design-sem-nome-23.png"
                alt="Manutenção de guinchos"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-[#1c2743]">
              Manutenção Preventiva de Guinchos
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Revisões, lubrificação, ajustes e troca de componentes dos
              guinchos de lançamento e recolhimento de botes salva-vidas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
