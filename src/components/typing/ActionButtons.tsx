import { ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  handleStart: () => void;
  handleReset: () => void;
  isTyping: boolean;
}

export const ActionButtons = ({ handleStart, handleReset, isTyping }: ActionButtonsProps) => {
  return (
    <div className="flex gap-4 justify-center">
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
  );
}; 