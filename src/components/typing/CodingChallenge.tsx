import { Code } from "lucide-react";

interface CodingChallengeProps {
  snippet: string;
  input: string;
  isTyping: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CodingChallenge = ({
  snippet,
  input,
  isTyping,
  inputRef,
  handleChange
}: CodingChallengeProps) => {
  return (
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
  );
}; 