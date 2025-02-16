import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Trophy, RotateCcw } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
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

      <div className="max-w-4xl w-full space-y-8 z-10">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600 animate-pulse">
          CodeType Master
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2" /> Coding Challenge
            </h2>
            <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-center">Your code snippet will appear here</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="mr-2" /> Stats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>WPM</span>
                <span className="text-2xl font-mono text-yellow-300">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Accuracy</span>
                <span className="text-2xl font-mono text-green-300">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Time</span>
                <span className="text-2xl font-mono text-blue-300">00:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center">
            Start Typing <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-purple-600 flex items-center"
          >
            <RotateCcw className="mr-2" /> Reset
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-purple-600 flex items-center"
          >
            <Trophy className="mr-2" /> Leaderboard
          </Button>
        </div>
      </div>
    </main>
  )
}

