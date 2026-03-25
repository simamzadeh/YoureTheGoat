"use client";

import { useState } from "react";

const hypeMessages = [
  "You're unstop-baaah-ble.",
  "Elite baaa-havior.",
  "From one goat to another, I'm proud of you.",
  "I revoke my goat status to YOU."
];

export default function Home() {
  const [win, setWin] = useState("");
  const [hype, setHype] = useState("");
  const [wins, setWins] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!win) return;

    const random =
      hypeMessages[Math.floor(Math.random() * hypeMessages.length)];

    setWins([win, ...wins]);
    setHype(random);
    setWin("");
  };

  return (
    <main className="min-h-screen bg-[#F0F7F1] flex flex-col items-center p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-semibold mb-1 text-[#2F3E2F]">
        your wins
      </h1>

      <p className="text-sm text-[#5C6F5C] mb-6">
        "big wins or small wins, i eat them all 🌿" - the goat
      </p>

      {/* Input Card */}
      <div className="bg-[#FAFDF9] rounded-3xl shadow-sm p-5 w-full max-w-md border border-[#E3EFE5]">
        
        <input
  value={win}
  onChange={(e) => setWin(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }}
  className="w-full p-3 rounded-xl bg-[#F6FBF7] border border-[#DCE8DE] focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] mb-3 text-[#2F3E2F] placeholder:text-[#8AA08A]"
  placeholder="what did you do today?"
/>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#A7C4A0] hover:bg-[#8FB38A] text-[#243024] font-medium py-2 rounded-xl transition"
        >
          log my win 🌱
        </button>

        {hype && (
          <p className="mt-4 text-center text-[#3F5A3F] font-medium">
            {hype}
          </p>
        )}
      </div>

      {/* Wins List */}
      <div className="mt-6 w-full max-w-md">
        {wins.length === 0 && (
          <p className="text-center text-[#7A8F7A]">
            no wins yet… go touch some grass (lovingly) 🌱
          </p>
        )}

        {wins.map((w, i) => (
          <div
            key={i}
            className="bg-[#F6FBF7] rounded-2xl p-3 mb-2 border border-[#E3EFE5] text-[#2F3E2F]"
          >
            {w}
          </div>
        ))}
      </div>
    </main>
  );
}