import { CodingChallenge } from "@/components/typing/CodingChallenge";
import { StatsPanel } from "@/components/typing/StatsPanel";
import { ActionButtons } from "@/components/typing/ActionButtons";
import { useTypingGame } from "@/hooks/useTypingGame";

export default function HomePage () {
  const {
    snippet,
    input,
    startTime,
    accuracy,
    speed,
    isTyping,
    inputRef,
    handleStart,
    handleReset,
    handleChange
  } = useTypingGame();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl animate-blob"
              style={{
                backgroundColor: ["#ff00ff", "#00ffff", "#ffff00"][i % 3],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full space-y-20 z-10">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white animate-pulse">
          Coding Type
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CodingChallenge
            snippet={snippet}
            input={input}
            isTyping={isTyping}
            inputRef={inputRef}
            handleChange={handleChange}
          />
          <StatsPanel
            speed={speed}
            accuracy={accuracy}
            startTime={startTime}
          />
        </div>

        <ActionButtons
          handleStart={handleStart}
          handleReset={handleReset}
          isTyping={isTyping}
        />
      </div>
      <footer className="mt-8 text-center text-xl font-bold text-white relative">
      ©{" "}
        <a
          href="https://github.com/Andss-ye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline relative z-10"
        >
          Andrew
        </a>{" "}
        - CodingType - 2025
      </footer>
    </main>
  );
};