import { useState, useEffect, useRef } from "react";
import { CODE_SNIPPETS } from "@/constants/snippets";

export const useTypingGame = () => {
  const [snippet, setSnippet] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState(100);
  const [speed, setSpeed] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSnippet(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
  }, []);

  const calculateStats = (typed: string) => {
    const correctChars = typed.split("").filter((char, i) => char === snippet[i]).length;
    setAccuracy(Math.floor((correctChars / snippet.length) * 100));
    
    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60;
      setSpeed(Math.floor((typed.length / 5) / elapsedTime));
    }
  };

  const handleStart = () => {
    setIsTyping(true);
    setInput("");
    setStartTime(null);
    setAccuracy(100);
    setSpeed(0);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleReset = () => {
    setIsTyping(false);
    setInput("");
    setStartTime(null);
    setAccuracy(100);
    setSpeed(0);
    setSnippet(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(Date.now());
    const value = e.target.value;
    setInput(value);
    calculateStats(value);
    if (value === snippet) setIsTyping(false);
  };

  return {
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
  };
}; 