import { NextResponse } from "next/server";
import OpenAI from "openai";
import * as cheerio from "cheerio";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // 1. Scraping the website content
    const webResponse = await fetch(url);
    const html = await webResponse.text();
    const $ = cheerio.load(html);
    
    // جبد النص المهم من الصفحة (Headings and Paragraphs)
    const websiteText = $("h1, h2, h3, p")
      .map((_, el) => $(el).text())
      .get()
      .join(" ")
      .substring(0, 3000); // كوناخدو أول 3000 حرف باش ما نفوتوش القياس

    // 2. Send the scraped text to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert affiliate marketer. 
          I will provide you with the raw text content of a product sales page. 
          Your task is to write a killer, persuasive product review based ONLY on that text.
          STRICT RULES: 
          1. NO MARKDOWN (No #, No *, No -, No _). 
          2. USE ALL CAPS FOR HEADINGS. 
          3. DOUBLE SPACE BETWEEN PARAGRAPHS.
          4. NO LIST BULLETS.`
        },
        {
          role: "user",
          content: `Product Content: ${websiteText}`
        },
      ],
    });

    return NextResponse.json({ review: response.choices[0].message.content });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Failed to read the link. Please make sure the URL is correct." }, { status: 500 });
  }
}