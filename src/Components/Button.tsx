import { Download } from "lucide-react";
import Curriculo from "../assets/Kamilly Oliveira.pdf";

type Props = {
  text: string;
};

export function Button({ text }: Props) {
  return (
    <a href={Curriculo} download="Kamilly Oliveira.pdf">
      <button className="cursor-pointer inline-flex items-center space-x-2 sm:px-8 sm:py-4 px-4 py-3 sm:text-base text-sm
      bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500
       dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
        <Download className="w-5 h-5" />

        <span>{text}</span>
      </button>
    </a>
  );
}
