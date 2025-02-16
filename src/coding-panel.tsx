import { useState, useEffect, useRef } from "react";

const snippets = [
  "console.log('Hello, world!');",
  "function add(a: number, b: number): number { return a + b; }",
  "const fetchData = async () => { const res = await fetch('/api'); return res.json(); }",
];

export default function TypingTest() {
  const [snippet, setSnippet] = useState("");
  const [input, setInput] = useState("");
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
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-md">
        <pre className="bg-black p-4 rounded-md font-mono text-lg overflow-auto h-60 border border-gray-700 whitespace-pre-wrap">
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
      </div>
    </div>
  );
}
