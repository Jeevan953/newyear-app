import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function NewYearCelebration() {
  const [stage, setStage] = useState("welcome"); 
  const [count, setCount] = useState(3); // countdown state

  const startCelebration = () => {
    setStage("countdown");
    setCount(3);

    let c = 3;
    const interval = setInterval(() => {
      c--;
      if (c === 0) {
        clearInterval(interval);
        setStage("celebrate");
        launchConfetti();
        return;
      }
      setCount(c);
    }, 1000);
  };

  const launchConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      
      {/* Inline animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:scale(0.8); }
          to { opacity:1; transform:scale(1); }
        }
        @keyframes glow {
          0%,100% { text-shadow:0 0 20px rgba(255,215,0,0.5); }
          50% { text-shadow:0 0 40px rgba(255,215,0,0.9); }
        }
      `}</style>

      {/* WELCOME STAGE */}
      {stage === "welcome" && (
        <div style={{ animation: "fadeIn 1s ease-out" }}>
          <h1
            className="text-7xl md:text-9xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400"
            style={{ animation: "glow 2s infinite" }}
          >
            2025
          </h1>

          <p className="text-2xl md:text-4xl text-white mb-12 font-light">
            A New Year Awaits ✨
          </p>

          <button
            onClick={startCelebration}
            className="px-10 py-4 text-xl font-bold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            Let's Celebrate! 🎉
          </button>
        </div>
      )}

      {/* COUNTDOWN STAGE */}
      {stage === "countdown" && (
        <div
          className="text-9xl md:text-[12rem] font-bold text-white"
          style={{
            animation: "fadeIn 0.5s ease-out",
            textShadow: "0 0 40px white",
          }}
        >
          {count}
        </div>
      )}

      {/* CELEBRATE STAGE */}
      {stage === "celebrate" && (
        <div style={{ animation: "fadeIn 1s ease-out" }}>
          <h1
            className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"
            style={{ animation: "float 3s infinite" }}
          >
            HAPPY
          </h1>

          <h2
            className="text-6xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300"
            style={{ animation: "float 3s infinite 0.5s" }}
          >
            NEW YEAR
          </h2>

          <div
            className="text-5xl md:text-8xl font-bold text-yellow-400 mb-10"
            style={{ animation: "glow 2s infinite" }}
          >
            2025
          </div>

          <button
            onClick={() => setStage("welcome")}
            className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition-all duration-300"
          >
            Celebrate Again 🎆
          </button>
        </div>
      )}
    </div>
  );
}

