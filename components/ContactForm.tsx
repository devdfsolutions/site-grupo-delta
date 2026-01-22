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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        const data: { error?: string } = await res
          .json()
          .catch(() => ({}));
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setSucesso(
        "Mensagem enviada com sucesso! Em breve entraremos em contato."
      );

      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
      setMensagem("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro(
          "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-7 space-y-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <input
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <input
          type="text"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <textarea
          rows={4}
          required
          placeholder="Descreva sua necessidade"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-sky-600 text-white py-2.5 text-sm font-semibold disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>

      {sucesso && (
        <p className="text-sm text-emerald-600 bg-emerald-50 border rounded px-3 py-2">
          {sucesso}
        </p>
      )}

      {erro && (
        <p className="text-sm text-red-600 bg-red-50 border rounded px-3 py-2">
          {erro}
        </p>
      )}
    </div>
  );
}
