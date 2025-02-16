import { useState, useEffect, useRef } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

export default function CodingTypePanel() {
  const snippet = `function calc(x) {\n  if (x > 0) {\n    return x * 2;\n  }\n}`;

  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [input]);
  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, []);

  const handleChange = (e: { target: { value: string }}) => {
    const newValue = e.target.value;
    const lastChar = newValue[newValue.length - 1];
    
    // Manejo de nueva línea con indentación automática
    if (lastChar === "\n") {
      const lines = snippet.split("\n");
      const typedLines = newValue.split("\n");
      const currentLine = lines[typedLines.length - 1] || "";
      const indentMatch = currentLine.match(/^\s*/);
      const indent = indentMatch ? indentMatch[0] : "";
      setInput(newValue + indent);
      setCurrentIndex(newValue.length + indent.length);
    } else {
      setInput(newValue);
      setCurrentIndex(newValue.length);
    }
  };

  const renderSnippet = () => {
    return snippet.split("").map((char, index) => {
      let className = "text-gray-400";
      if (index === currentIndex) {
        className += " border-l-2 border-blue-400";
      }
      if (input[index]) {
        className = input[index] === char ? "text-green-400" : "text-red-400";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div
      className="flex flex-col bg-gray-900 p-6 rounded-xl text-white w-full max-w-2xl"
      onClick={() => (inputRef.current as unknown as HTMLInputElement)?.focus()}
    >
      {/* Barra de seguimiento */}
      <div className="w-full h-2 bg-gray-700 rounded-md overflow-hidden mb-2">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${(currentIndex / snippet.length) * 100}%` }}
        ></div>
      </div>

      {/* Snippet visual */}
      <pre className="p-4 bg-gray-800 rounded-md font-mono text-lg whitespace-pre-wrap">
        {renderSnippet()}
      </pre>

      {/* Input invisible */}
      <input
        ref={inputRef}
        className="absolute opacity-0"
        type="text"
        value={input}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}
