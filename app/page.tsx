"use client";
import { useState } from "react";
import { Terminal, Rocket, Sparkles, AlertCircle } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    if (!url) return;
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data.review);
    } catch (err) {
      setResult("❌ Error: Check your API Key in .env.local and try again.");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 mb-24 border-b border-white/5 pb-6">
          <div className="bg-[#CCFF00] p-1.5 rounded">
            <Terminal size={20} className="text-black" />
          </div>
          <span className="font-bold tracking-tighter text-2xl uppercase italic">Review<span className="text-[#CCFF00]">Sniper</span></span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-6 tracking-tighter italic">SNIPE <span className="text-[#CCFF00]">PROFITS.</span></h1>
          <p className="text-gray-400 text-xl font-light italic">Turn any product URL into a killer review in seconds.</p>
        </div>

        <div className="bg-[#111] p-3 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-3 shadow-2xl">
          <input 
            className="flex-1 bg-transparent px-6 py-4 outline-none text-lg border border-transparent focus:border-[#CCFF00]/30 rounded-xl transition"
            placeholder="Paste JVZoo or Amazon URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-[#CCFF00] text-black font-black px-10 py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "SNIPING..." : <><Rocket size={20}/> GENERATE</>}
          </button>
        </div>

        {result && (
          <div className="mt-12 p-10 bg-[#0A0A0A] border border-[#CCFF00]/20 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 text-[#CCFF00] font-bold mb-6 text-sm tracking-widest uppercase">
              <Sparkles size={16} /> Generated AI Snippet
            </div>
            <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap font-light">
              {result}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}