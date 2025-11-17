// app/contato/page.tsx
"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setOk(false);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setOk(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError("Não foi possível enviar. Tente novamente em alguns minutos.");
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Fale com um especialista
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Preencha o formulário ao lado e nossa equipe retornará o contato
            para entender sua demanda e propor a melhor solução.
          </p>

          <div className="text-xs text-slate-300 space-y-1">
            <div>E-mail: comercial@grupodelta.ind.br</div>
            <div>Telefone: (21) XXXX-XXXX {/* ajustar */}</div>
            <div>Atendimento 24h • Rio de Janeiro / Duque de Caxias</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-3 border border-slate-800 rounded-xl p-4"
        >
          <input
            name="nome"
            required
            placeholder="Nome"
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="E-mail"
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
          <input
            name="telefone"
            required
            placeholder="Telefone"
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
          <input
            name="empresa"
            placeholder="Empresa"
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
          <textarea
            name="mensagem"
            required
            placeholder="Descreva sua necessidade"
            className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm outline-none focus:border-amber-400 h-28"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-sm font-semibold hover:bg-amber-300 disabled:opacity-60 transition-colors"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          {ok && (
            <p className="text-xs text-green-500">
              Mensagem enviada com sucesso! Em breve entraremos em contato.
            </p>
          )}
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}
        </form>
      </div>

      {/* MAPA - depois vamos colocar o iframe oficial do Google Maps */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Onde estamos</h2>
        <div className="w-full h-64 md:h-80 rounded-xl border border-slate-800 overflow-hidden">
          {/* TROCAR ESTE src PELO QUE VOCÊ COPIAR DO GOOGLE MAPS */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </section>
    </main>
  );
}
