"use client";

import { useState } from "react";

const hypeMessages = [
  "You're unstop-baaah-ble.",
  "Elite baaa-havior.",
  "From one goat to another, I'm proud of you.",
  "I revoke my goat status to YOU.",
  "A genius, that's what you are."
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
    <main className="min-h-screen bg-[#FFFDF7] flex flex-col items-center font-serif p-6 relative">
      
      {/* Header & Quote */}
      <div className="w-full max-w-md mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-[#3F5A3F] tracking-wide mb-2">
          Your Wins
        </h1>
        <p className="text-sm text-[#6B8A6B] italic">
          "Big wins or small wins, I eat them all 🌿" - the goat
        </p>
      </div>

      {/* Centered Input Card */}
      <div className="w-full max-w-md mb-4">
        <div className="bg-[#C1E1C1] rounded-3xl shadow-lg p-6 flex flex-col items-center border-2 border-[#3F5A3F]">
          
          <input
            value={win}
            onChange={(e) => setWin(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full p-4 rounded-xl bg-[#EDF7EB] border border-[#A7C4A0] focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] mb-4 text-[#243024] placeholder:text-[#556B55] text-lg font-medium"
            placeholder="What did you do today?"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#3F5A3F] hover:bg-[#2E4530] text-[#FFFDF7] font-bold py-3 rounded-xl transition text-lg mb-2"
          >
            Log My Win 🌱
          </button>
        </div>
      </div>

      {/* Goat GIF + Speech Bubble */}
      <div className="flex items-start gap-4 mb-6 max-w-md w-full">
        {/* Goat GIF */}
        <img
          src="/images/baby-goat-chewing.gif" 
          alt="Baby goat chewing"
          className="w-48 h-48 rounded-xl"
        />

        {/* Speech Bubble */}
        <div className="relative bg-[#EDF7EB] border border-[#A7C4A0] rounded-2xl p-4 text-[#243024] font-semibold text-lg shadow-md">
          {/* Little triangle for the speech bubble */}
          <div className="absolute -left-3 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#EDF7EB]"></div>
          {hype || "Your encouragement will appear here!"}
        </div>
      </div>

      {/* Wins List */}
      <div className="w-full max-w-md flex flex-col gap-2">
        {wins.length === 0 ? (
          <p className="text-center text-[#556B55] italic">
            No wins yet… go touch some grass (lovingly) 🌱
          </p>
        ) : (
          wins.map((w, i) => (
            <div
              key={i}
              className="bg-[#EDF7EB] rounded-2xl p-4 border border-[#A7C4A0] text-[#243024] shadow-sm"
            >
              {w}
            </div>
          ))
        )}
      </div>
    </main>
  );
}