import { NextResponse } from "next/server";
import OpenAI from "openai";
import * as cheerio from "cheerio";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    let contentToAnalyze = url; // كنفترضو فالبداية أن المستخدم حط نص

    // إلا كان المدخل كيبدأ بـ http، كنمشيو نجيبو النص من الرابط
    if (url.startsWith("http")) {
      try {
        const webResponse = await fetch(url, {
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0 Safari/537.36" }
        });
        const html = await webResponse.text();
        const $ = cheerio.load(html);
        contentToAnalyze = $("h1, h2, h3, p").map((_, el) => $(el).text()).get().join(" ").substring(0, 4000);
      } catch (e) {
        console.log("Scraping failed, using URL as text");
      }
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert affiliate marketer. Write a killer product review based on the provided text. 
          STRICT RULES: 1. NO MARKDOWN. 2. ALL CAPS HEADINGS. 3. DOUBLE SPACE BETWEEN PARAGRAPHS. 4. NO BULLETS.`
        },
        { role: "user", content: `Analyze this: ${contentToAnalyze}` },
      ],
    });

    return NextResponse.json({ review: response.choices[0].message.content });
  } catch (error: any) {
    return NextResponse.json({ error: "Error analyzing content." }, { status: 500 });
  }
}