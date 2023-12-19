// pages/api/generateImage.js
import { NextResponse } from "next/server";
import { generateImage } from "../../../utils/OpenAI";

export async function POST(req) {
  try {
    const { prompt, n, size } = await req.json();
    const response = await generateImage(prompt, n, size);

    return NextResponse.json({ url: response }, { status: 200 });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
