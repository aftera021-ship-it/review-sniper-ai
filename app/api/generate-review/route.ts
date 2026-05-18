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
          content: "You are an expert JVZoo Product Reviewer. Use the product name from the URL to write a persuasive affiliate review with pros, cons and a verdict." 
        },
        { 
          role: "user", 
          content: `Analyze this link and write a killer review: ${url}` 
        }
      ],
    });

    return NextResponse.json({ review: response.choices[0].message.content });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}