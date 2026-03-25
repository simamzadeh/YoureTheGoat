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
  const [winCount, setWinCount] = useState(0);

  const handleSubmit = () => {
    if (!win) return;

    if (winCount >= 3) {
      setHype("🎉 You’ve logged all 3 wins for today!");
      setWin("");
      return;
    }

    const random =
      hypeMessages[Math.floor(Math.random() * hypeMessages.length)];

    setWins([win, ...wins]);
    setHype(random);
    setWin("");
    setWinCount(winCount + 1);
  };

  const progressPercent = (winCount / 3) * 100;

  return (
    <main className="min-h-screen relative font-sans bg-gradient-to-br from-[#F9EBE0] via-[#F9EBE0] to-[#A28497]">

      {/* Logo / Title top-left */}
      <div className="absolute top-6 left-6">
        <h1 className="text-4xl font-serif text-[#3B252C] tracking-tight">
          You'reTheGoat.
        </h1>
        <p className="text-sm text-[#3B252C]/70 mt-1">
          A confidence-building app to celebrate your wins.
        </p>
      </div>

      {/* Daily Wins Counter Top-Right */}
<div className="absolute top-6 right-6 flex items-center gap-2 bg-[#A28497]/20 text-[#A28497] px-3 py-1 rounded-full font-semibold shadow-sm">
  <span>🌿</span>
  <span>{wins.length} / 3</span>
</div>

      {/* Centered Content */}
<div className="flex flex-col items-center justify-center min-h-screen px-4">

  {/* Speech Bubble */}
  {hype && (
   <div className="relative bg-white rounded-2xl p-4 text-[#3B252C] font-semibold text-lg shadow-md max-w-xs mb-4">
  {hype}
</div>
  )}

  {/* Quote bottom-center */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
  <p className="text-[#3B252C]/80 italic">
    "small wins or big wins, i'll eat them all..." - the goat
  </p>
</div>

  {/* Card + Goat */}
  <div className="flex items-start gap-12 mb-6">

          {/* Progress + Input Card */}
          <div className="flex items-stretch gap-4">
            {/* Progress Bar */}
<div className="w-5 bg-[#D9D9D9] rounded-full overflow-hidden flex-shrink-0 relative">
  <div
    className="bg-[#294936] w-full absolute bottom-0 transition-all duration-500"
    style={{ height: `${progressPercent}%` }}
  />
</div>

            {/* Input Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-md flex-shrink-0">
              <input
                value={win}
                onChange={(e) => setWin(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                className="w-full p-4 rounded-xl bg-[#F9EBE0] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#294936] mb-4 text-[#3B252C] placeholder:text-[#3B252C]/50 text-lg"
                placeholder={winCount < 3 ? "What did you do today?" : "Daily wins complete!"}
                disabled={winCount >= 3}
              />

              <button
                onClick={handleSubmit}
                className={`w-full font-semibold py-3 rounded-xl transition text-lg ${
                  winCount >= 3
                    ? "bg-[#7ea172] cursor-not-allowed text-white"
                    : "bg-[#294936] hover:opacity-90 text-white"
                }`}
                disabled={winCount >= 3}
              >
                {winCount >= 3 ? "All Wins Logged" : "Log My Win 🌱"}
              </button>
            </div>
          </div>

          {/* Goat */}
          <div className="flex items-start gap-4">
            <img
              src="/images/baby-goat-chewing.gif"
              alt="Baby goat chewing"
              className="w-48 h-48 object-cover rounded-xl flex-shrink-0"
            />

          </div>

        </div>

        {/* Permanent Wins List */}
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
        <span className="font-semibold mr-2">{i + 1}.</span> {w}
      </div>
    ))
  )}
</div>

      </div>
    </main>
  );
}