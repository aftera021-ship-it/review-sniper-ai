import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert affiliate marketer. Generate a killer product review. 
          STRICT RULES: 
          1. NO MARKDOWN (No #, No *, No -, No _). 
          2. USE ALL CAPS FOR HEADINGS. 
          3. DOUBLE SPACE BETWEEN PARAGRAPHS.
          4. NO LIST BULLETS.`
        },
        {
          role: "user",
          content: `Analyze this link and write a professional review in plain text: ${url}`
        },
      ],
    });

    return NextResponse.json({ review: response.choices[0].message.content });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}