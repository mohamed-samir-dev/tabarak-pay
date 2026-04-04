import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
  try {
    await client.connect();
    const db = client.db();
    const settings = await db.collection("cardfieldsettings").findOne({});
    return NextResponse.json({
      showExpiryDate: settings?.showExpiryDate ?? true,
      showCvv: settings?.showCvv ?? true,
    });
  } catch {
    return NextResponse.json({ showExpiryDate: true, showCvv: true });
  } finally {
    await client.close();
  }
}
