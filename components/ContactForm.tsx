// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSucesso(null);
    setErro(null);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          empresa,
          mensagem,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setSucesso("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
      setMensagem("");
    } catch (err: any) {
      setErro(
        err?.message ||
          "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-7 space-y-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Nome */}
        <input
          type="text"
          name="nome"
          required
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Telefone */}
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Empresa */}
        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Mensagem */}
        <textarea
          name="mensagem"
          rows={4}
          required
          placeholder="Descreva sua necessidade"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
        />

        {/* Botão */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-sky-600 hover:bg-sky-700 disabled:bg-sky-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 text-sm shadow-md transition"
        >
          {loading ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>

      {/* Mensagens de status */}
      {sucesso && (
        <p className="text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
          {sucesso}
        </p>
      )}

      {erro && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          {erro}
        </p>
      )}
    </div>
  );
}
