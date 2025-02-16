import { Zap } from "lucide-react";

interface StatsPanelProps {
  speed: number;
  accuracy: number;
  startTime: number | null;
}

export const StatsPanel = ({ speed, accuracy, startTime }: StatsPanelProps) => {
  return (
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
  );
}; 