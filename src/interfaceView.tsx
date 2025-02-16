import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Trophy, RotateCcw } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const snippets = [
  "console.log('Hello, world!');",
  "function add(a: number, b: number): number { return a + b; }",
  "const fetchData = async () => { const res = await fetch('/api'); return res.json(); }",
];

export default function Home() {
  const [snippet, setSnippet] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState(100);
  const [speed, setSpeed] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSnippet(snippets[Math.floor(Math.random() * snippets.length)]);
  }, []);

  const handleStart = () => {
    setIsTyping(true);
    setInput("");
    setStartTime(null);
    setAccuracy(100);
    setSpeed(0);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleReset = () => {
    setIsTyping(false);
    setInput("");
    setStartTime(null);
    setAccuracy(100);
    setSpeed(0);
    setSnippet(snippets[Math.floor(Math.random() * snippets.length)]);
  };

  const calculateStats = (typed: string) => {
    const correctChars = typed.split("").filter((char, i) => char === snippet[i]).length;
    setAccuracy(Math.floor((correctChars / snippet.length) * 100));
    
    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60;
      setSpeed(Math.floor((typed.length / 5) / elapsedTime));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    const value = e.target.value;
    setInput(value);
    calculateStats(value);
    
    if (value === snippet) {
      setIsTyping(false);
    }
  };

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

      <div className="max-w-6xl w-full space-y-8 z-10">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white animate-pulse">
          Coding Type
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-2" /> Coding Challenge
            </h2>
            <div className="h-56 bg-gray-800 rounded-lg flex items-center justify-center p-6">
              {isTyping ? (
                <div className="w-full h-full overflow-auto">
                  <pre className="font-mono text-xl whitespace-pre-wrap">
                    {snippet.split("").map((char, index) => (
                      <span
                        key={index}
                        className={
                          input[index] === undefined
                            ? "text-gray-400"
                            : input[index] === char
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {char}
                      </span>
                    ))}
                  </pre>
                </div>
              ) : (
                <p className="text-gray-400 text-center">Presiona "Comenzar" para iniciar</p>
              )}
            </div>
            {isTyping && (
              <input
                ref={inputRef}
                value={input}
                onChange={handleChange}
                className="w-full p-3 mt-6 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none text-base"
                placeholder="Escribe aquí..."
              />
            )}
          </div>

          <div className="bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="mr-2" /> Stats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>WPM</span>
                <span className="text-2xl font-mono text-yellow-300">{speed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Precisión</span>
                <span className="text-2xl font-mono text-green-300">{accuracy}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tiempo</span>
                <span className="text-2xl font-mono text-blue-300">
                  {startTime ? Math.floor((Date.now() - startTime) / 1000) : 0}s
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={handleStart}
            disabled={isTyping}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center"
          >
            Comenzar <ArrowRight className="ml-2" />
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-purple-600 flex items-center"
          >
            <RotateCcw className="mr-2" /> Reiniciar
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-purple-600 flex items-center"
          >
            <Trophy className="mr-2" /> Tabla de posiciones
          </Button>
        </div>
      </div>
    </main>
  )
}

