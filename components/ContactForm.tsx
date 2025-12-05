"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      setStatus("success");
      setForm({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        mensagem: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-7 space-y-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <input
          type="text"
          required
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Campo Email */}
        <input
          type="email"
          required
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Campo Telefone */}
        <input
          type="text"
          placeholder="Telefone"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Campo Empresa */}
        <input
          type="text"
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
        />

        {/* Campo Mensagem */}
        <textarea
          rows={4}
          required
          placeholder="Descreva sua necessidade"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1c2743] focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
        />

        {/* Botão Azul */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 text-sm shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-600">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">
            Ocorreu um erro ao enviar. Tente novamente em instantes.
          </p>
        )}
      </form>
    </div>
  );
}
