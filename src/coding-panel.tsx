import { useState, useEffect, useRef } from "react";

const snippets = [
  "console.log('Hello, world!');",
  "function add(a: number, b: number): number { return a + b; }",
  "const fetchData = async () => { const res = await fetch('/api'); return res.json(); }",
];

export default function TypingTest() {
  const [snippet, setSnippet] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState(100);
  const [speed, setSpeed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSnippet(snippets[Math.floor(Math.random() * snippets.length)]);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    const value = e.target.value;
    setInput(value);
    calculateStats(value);
    if (value === snippet) {
      setCompleted(true);
    }
  };

  const calculateStats = (typed: string) => {
    const correctChars = typed.split("").filter((char, i) => char === snippet[i]).length;
    setAccuracy(Math.floor((correctChars / snippet.length) * 100));
    
    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60; // Convert to minutes
      setSpeed(Math.floor((typed.length / 5) / elapsedTime)); // Words per minute (WPM)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-md">
        {!completed ? (
          <>
            <pre className="bg-black p-4 rounded-md font-mono text-xl overflow-auto h-60 border border-gray-700 whitespace-pre-wrap">
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
            <input
              ref={inputRef}
              value={input}
              onChange={handleChange}
              className="w-full p-2 mt-4 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none"
              placeholder="Escribe aquí..."
            />
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">¡Prueba completada!</h2>
            <p>Precisión: {accuracy}%</p>
            <p>Velocidad: {speed} WPM</p>
          </div>
        )}
      </div>
    </div>
  );
}
