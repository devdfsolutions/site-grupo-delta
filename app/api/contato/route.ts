// app/api/contato/route.ts
import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, empresa, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios não informados." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Site Grupo Delta <no-reply@grupodelta.ind.br>",
      to: process.env.CONTACT_TO_EMAIL ?? "comercial@grupodelta.ind.br",
      subject: `Novo contato pelo site - ${nome}`,
      replyTo: email,
      text: `
Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone || "-"}
Empresa: ${empresa || "-"}

Mensagem:
${mensagem}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
