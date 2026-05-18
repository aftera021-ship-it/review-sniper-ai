import { NextResponse } from "next/server";
import OpenAI from "openai";
import * as cheerio from "cheerio";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // 1. Scraping with User-Agent (التنكر في هيئة متصفح حقيقي)
    const webResponse = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      }
    });

    if (!webResponse.ok) {
        throw new Error(`Site blocked us with status: ${webResponse.status}`);
    }

    const html = await webResponse.text();
    const $ = cheerio.load(html);
    
    // جبد النص من العناوين والفقرات
    const websiteText = $("h1, h2, h3, p")
      .map((_, el) => $(el).text())
      .get()
      .join(" ")
      .substring(0, 4000); 

    if (!websiteText || websiteText.length < 100) {
      throw new Error("Could not find enough text on this page.");
    }

    // 2. صاوب المراجعة باستعمال النص اللي جبدناه
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert affiliate marketer. 
          Analyze the provided website content and write a killer product review.
          STRICT RULES: 
          1. NO MARKDOWN (No #, No *, No -, No _). 
          2. USE ALL CAPS FOR HEADINGS. 
          3. DOUBLE SPACE BETWEEN PARAGRAPHS.
          4. NO LIST BULLETS.`
        },
        {
          role: "user",
          content: `Website Content: ${websiteText}`
        },
      ],
    });

    return NextResponse.json({ review: response.choices[0].message.content });
  } catch (error: any) {
    console.error("Error details:", error.message);
    return NextResponse.json({ 
      error: "Unable to analyze this link directly. Try copy-pasting the text instead." 
    }, { status: 500 });
  }
}