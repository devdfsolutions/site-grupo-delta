// app/api/contato/route.ts
// @ts-nocheck
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, telefone, empresa, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios não informados." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Site Grupo Delta <no-reply@grupodelta.ind.br>",
      to: process.env.CONTACT_TO_EMAIL ?? "comercial@grupodelta.ind.br",
      subject: `Novo contato pelo site - ${nome}`,
      reply_to: email,
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
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
