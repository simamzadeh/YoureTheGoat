"use client";

import { useState } from "react";

const hypeMessages = [
  "You're unstop-baaah-ble.",
  "Elite baaa-havior.",
  "From one goat to another, I'm proud of you.",
  "I revoke my goat status for YOU.",
  "A genius, that's what you are.",
  "This calls for some extra grass."
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
    <main className="min-h-screen bg-[#F9EBE0] relative font-sans">

      {/* Logo / Title top-left */}
      <div className="absolute top-6 left-6">
        <h1 className="text-4xl font-serif text-[#3B252C] tracking-tight">
          You'reTheGoat.
        </h1>
        <p className="text-sm text-[#3B252C]/70 mt-1">
          A confidence-building app to celebrate your wins.
        </p>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">

        {/* Quote */}
        <p className="text-[#3B252C]/80 italic mb-6 text-center">
          "small wins or big wins, i'll eat them all..." - the goat
        </p>

        {/* Card + Goat side by side */}
<div className="flex items-start gap-6 mb-6">
  
  {/* Input Card */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-md flex-shrink-0">
    <input
      value={win}
      onChange={(e) => setWin(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSubmit();
      }}
      className="w-full p-4 rounded-xl bg-[#F9EBE0] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#294936] mb-4 text-[#3B252C] placeholder:text-[#3B252C]/50 text-lg"
      placeholder="What did you do today?"
    />

    <button
      onClick={handleSubmit}
      className="w-full bg-[#294936] hover:opacity-90 text-white font-semibold py-3 rounded-xl transition text-lg"
    >
      Log My Win 🌱
    </button>
  </div>

  {/* Goat + Speech */}
  <div className="flex items-start gap-4">
    <img
  src="/images/baby-goat-chewing.gif"
  alt="Baby goat chewing"
  className="w-48 h-48 object-cover rounded-xl flex-shrink-0"
/>

    {hype && (
      <div className="relative bg-white rounded-2xl p-4 text-[#3B252C] font-semibold text-lg shadow-md max-w-xs">
        <div className="absolute -left-4 top-16 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[16px] border-r-white"></div>
        {hype}
      </div>
    )}
  </div>

</div>

        {/* Wins List */}
        <div className="w-full max-w-md flex flex-col gap-2 mt-6">
          {wins.length === 0 ? (
            <p className="text-center text-[#3B252C]/50 italic">
              No wins yet… go touch some grass (lovingly) 🌱
            </p>
          ) : (
            wins.map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-[#3B252C] shadow-sm"
              >
                {w}
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}