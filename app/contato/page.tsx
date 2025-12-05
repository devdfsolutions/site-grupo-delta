// app/contato/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contato | Grupo Delta",
};

export default function ContatoPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%2C+gostaria+de+falar+com+a+equipe+comercial.&type=phone_number&app_absent=0";

  const mapsUrl =
    "https://www.google.com/maps?q=Rua+Alberto+Siqueira,+1065,+Duque+de+Caxias,+RJ&output=embed";

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          BLOCO PRINCIPAL – TEXTO + FORMULÁRIO
      ====================================================== */}
      <section className="bg-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* TEXTO À ESQUERDA */}
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Soluções e Engenharia
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
              Fale com um especialista.
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
              Preencha o formulário ao lado ou fale diretamente pelos nossos
              canais de atendimento. Nossa equipe comercial está pronta para
              entender sua demanda e indicar a melhor solução em testes de
              carga, locações, LSA e MRO.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-[#1c2743]">E-mail:</span>{" "}
                <Link
                  href="/contato"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  comercial@grupodelta.ind.br
                </Link>
              </p>
              <p>
                <span className="font-semibold text-[#1c2743]">Telefone:</span>{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  (21) 98656-0236
                </a>{" "}
                | (21) 99530-3032 | (21) 3491-5335
              </p>
              <p>
                <span className="font-semibold text-[#1c2743]">Endereço:</span>{" "}
                Rua Alberto Siqueira, 1065 – Vila São Sebastião, Duque de Caxias
                – RJ
              </p>
            </div>
          </div>

          {/* FORMULÁRIO CLARO NO PADRÃO DO SITE */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-7 space-y-5">
            <form
              className="space-y-4"
              action="mailto:comercial@grupodelta.ind.br"
              method="post"
              encType="text/plain"
            >
              {/* Campo Nome */}
              <input
                type="text"
                name="Nome"
                required
                placeholder="Nome"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
              />

              {/* Campo Email */}
              <input
                type="email"
                name="E-mail"
                required
                placeholder="E-mail"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
              />

              {/* Campo Telefone */}
              <input
                type="text"
                name="Telefone"
                placeholder="Telefone"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
              />

              {/* Campo Empresa */}
              <input
                type="text"
                name="Empresa"
                placeholder="Empresa"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
              />

              {/* Campo Mensagem */}
              <textarea
                name="Mensagem"
                rows={4}
                placeholder="Descreva sua necessidade"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
              />

              {/* Botão Azul */}
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 text-sm shadow-md transition"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAPA + ENDEREÇO
      ====================================================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Onde estamos
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Rua Alberto Siqueira, 1065 – Lotes 32 e 33 – Vila São Sebastião –
              CEP 25065-225 – Duque de Caxias, Rio de Janeiro.
            </p>
          </div>

          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOCO FINAL – INFORMAÇÕES DE CONTATO (CLICÁVEIS)
      ====================================================== */}
      <section className="bg-slate-50 py-14 md:py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Soluções e Engenharia
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Informações de Contato
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Clique em um dos canais abaixo para falar diretamente com nossa
              equipe comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-sm text-slate-700">
            {/* Email -> vai para /contato (já está nela, mas mantém o padrão) */}
            <Link
              href="/contato"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  ✉
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Email Comercial</h3>
              <p className="text-sky-600 font-medium">
                comercial@grupodelta.ind.br
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Clique para abrir o formulário
              </p>
            </Link>

            {/* Telefones -> WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  ☎
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Telefone</h3>
              <p>(21) 98656-0236 (24 horas)</p>
              <p>(21) 99530-3032</p>
              <p>(21) 3491-5335</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Clique para falar no WhatsApp
              </p>
            </a>

            {/* Endereço -> também manda para /contato (pode virar link de mapa se quiser) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Alberto+Siqueira,+1065,+Duque+de+Caxias,+RJ"
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  📍
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Base Delta</h3>
              <p>Rua Alberto Siqueira, 1065</p>
              <p>Lotes 32 e 33 – Vila São Sebastião</p>
              <p>Duque de Caxias – RJ</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Clique para abrir no mapa
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
