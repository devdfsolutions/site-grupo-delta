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

  // cards de serviços (ajusta os caminhos das imagens conforme suas fotos)
  const services = [
    {
      slug: "testes-de-carga",
      title: "Testes de carga",
      description:
        "Execução de testes de carga estáticos e dinâmicos com emissão de certificados conforme normas internacionais e requisitos de sociedades classificadoras.",
      image: "/img/servicos/testes-carga.jpg",
    },
    {
      slug: "lsa-salvatagem",
      title: "LSA / Salvatagem",
      description:
        "Manutenção e inspeção de embarcações de salvamento, guinchos, turcos, davits e equipamentos de vida, garantindo disponibilidade e segurança em emergências.",
      image: "/img/servicos/lsa-salvatagem1.jpg",
    },
    {
      slug: "inspecoes-engenharia",
      title: "Inspeções e engenharia",
      description:
        "Inspeções técnicas, engenharia aplicada e suporte à integridade de ativos offshore e onshore, com relatórios e laudos completos.",
      image: "/img/servicos/inspecoes-engenharia.jpg",
    },
  ];

  return (
    <>
      {/* HERO FULL-WIDTH (vídeo do navio) */}
      <section className="relative w-full min-h-[70vh] overflow-hidden bg-slate-900">
        {/* Vídeo de fundo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero-delta.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro pra destacar o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/10 to-slate-950/10" />

        {/* Conteúdo do hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-16 md:py-24 space-y-6">
          <p className="text-[40px] font-medium tracking-[auto] text-sky-400 uppercase">
            Atuamos em todo o Brasil
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Testes de Carga e Engenharia
            <span className="block text-[#ffffff]">
              com excelência e segurança.
            </span>
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            O Grupo Delta oferece soluções completas em testes de carga,
            inspeções, manutenção, salvatagem e engenharia aplicada, atendendo
            projetos offshore e onshore com foco em segurança, conformidade e
            disponibilidade operacional.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contato"
              className="px-6 py-3 rounded-lg bg-[#3eb1f9] text-slate-50 text-sm font-semibold hover:bg-[#ffffff] transition-colors"
            >
              Fale com um especialista
            </Link>
            <Link
              href="/servicos"
              className="px-6 py-3 rounded-lg bg-[#3eb1f9] text-slate-50 text-sm font-semibold hover:bg-[#ffffff] transition-colors"
            >
              Conheça nossos serviços
            </Link>
          </div>

          <p className="max-w-2xl text-sm md:text-base text-slate-100">
            Grupo Delta • Excelência em Soluções Offshore e Onshore.
          </p>
        </div>
      </section>

      {/* CLIENTES - Logos em quadrados iguais */}
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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* BLOCO SUSTENTABILIDADE + GALERIA */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto à esquerda */}
            <div className="flex flex-col gap-10 md:pr-8 max-w-xl">
              <p className="text-[25px] font-medium tracking-[0.1em] text-sky-700 uppercase">
                Sustentabilidade e eficiência.
              </p>
              {/* TÍTULO EM 2 LINHAS */}
              <h2 className="text-[35px] font-semibold leading-tight text-slate-900">
                Cada Projeto é tratado com
                <br className="hidden md:block" />
                dedicação e segurança.
              </h2>
              <p className="text-[20px] leading-relaxed text-slate-600">
                Atuamos lado a lado com nossos clientes, desde o planejamento
                até a execução, buscando decisões técnicas alinhadas às normas,
                certificadoras e requisitos de cada operação, sempre com foco em
                segurança, eficiência e resultado.
              </p>
            </div>

            {/* Galeria à direita */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {galleryPhotos.map((n) => (
                <div
                  key={n}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={`/img/galeria/foto${n}.jpg`}
                    alt={`Operação Grupo Delta ${n}`}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICAÇÕES (logos maiores nos mesmos cards) */}
        <section className="space-y-6">
          <h2 className="text-[25px] font-medium tracking-[0.1em] text-sky-700 uppercase">
            Somos uma empresa certificada.
          </h2>
          <p className="text-[16px] leading-relaxed text-slate-600">
            Nossa atuação é respaldada por certificações e reconhecimentos que
            reforçam o compromisso com a qualidade, a conformidade e a segurança
            em todas as etapas dos serviços prestados.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* ISO */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-iso-9001.png"
                  alt="Certificação ISO 9001:2015"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">ISO 9001:2015</h3>
                <p className="text-xs text-slate-500">
                  Sistema de Gestão da Qualidade (SGQ).
                </p>
              </div>
            </div>

            {/* DPC */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-dpc.png"
                  alt="Diretoria de Portos e Costas"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">
                  Diretoria de Portos e Costas
                </h3>
                <p className="text-xs text-slate-500">Marinha do Brasil.</p>
              </div>
            </div>

            {/* CRALOG */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-cralog.png"
                  alt="CRALOG"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">CRALOG</h3>
                <p className="text-xs text-slate-500">
                  Certificação em logística e confiabilidade.
                </p>
              </div>
            </div>

            {/* DNV */}
            <div className="group border border-slate-200 rounded-2xl py-6 px-4 flex flex-col items-center text-center gap-3 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#1c2743]/60">
              <div className="relative w-28 h-20 md:w-32 md:h-24">
                <Image
                  src="/img/cert-dnv.png"
                  alt="DNV"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">DNV</h3>
                <p className="text-xs text-slate-500">
                  Approved Service Supplier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPAIS SERVIÇOS */}
        <section className="space-y-4">
          <h2 className="text-[30px] font-medium tracking-[0.1em] text-sky-700 uppercase">
            Principais serviços
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Nossas soluções são estruturadas para atender às demandas de navios,
            plataformas, estaleiros e unidades industriais onshore, com equipes
            especializadas e foco em segurança e conformidade.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                aria-label={`Ver detalhes de ${service.title}`}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1c2743]/60 min-h-[300px] md:min-h-[400px]"
              >
                {/* Fundo com imagem */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-80 transition-all duration-500"
                  />
                  {/* leve escurecida pra leitura do título inicial */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
                </div>

                {/* ESTADO NORMAL: só o título centralizado */}
                <div className="relative z-10 flex h-full items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="px-4 text-[22px] font-semibold uppercase tracking-[0.16em] text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* HOVER: fundo branco com título + descrição + "Saiba mais" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* fundo branco */}
                  <div className="absolute inset-0 bg-white/95" />
                  {/* conteúdo */}
                  <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center space-y-3">
                    <h3 className="text-[20px] font-semibold text-[#1c2743]">
                      {service.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] leading-relaxed text-slate-700">
                      {service.description}
                    </p>
                    <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-sky-700">
                      Saiba mais
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXCELÊNCIA / CTA FINAL */}
        <section className="grid md:grid-cols-[1.3fr,1fr] gap-8 items-center border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#1c2743]">
              Excelência em Soluções Offshore e Onshore.
            </h2>
            <p className="text-sm text-slate-600">
              Atuando em todo o Brasil com foco em segurança, sustentabilidade e
              eficiência, o Grupo Delta entrega soluções completas para testes
              de carga, inspeções, manutenção e salvatagem.
            </p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Expertise comprovada em projetos complexos.</li>
              <li>• Compromisso com normas e certificadoras internacionais.</li>
              <li>• Atuação nacional com suporte próximo ao cliente.</li>
            </ul>
            <p className="text-sm font-medium text-[#8b3a3a]">
              Juntos, construindo um futuro seguro.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#1c2743]">
              Precisa de um projeto personalizado?
            </h3>
            <p className="text-xs text-slate-600">
              Conte sua necessidade para nossa equipe técnica. Vamos analisar
              seu cenário e propor a solução mais segura e eficiente.
            </p>
            <Link
              href="/contato"
              className="inline-flex justify-center items-center w-full px-4 py-2 rounded-lg bg-[#1c2743] text-slate-50 text-sm font-semibold hover:bg-[#273760] transition-colors"
            >
              Solicitar contato técnico
            </Link>
            <p className="text-[11px] text-slate-500">
              Atendimento 24h • comercial@grupodelta.ind.br
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
