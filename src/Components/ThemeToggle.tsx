import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function theme(){
    const html = document.querySelector('html');

    if (html!.className === "dark") {
        html!.className = ""
        return "light";
    } else {
         html!.className = "dark"
         return "dark";
    }
   
    
}

export function ThemeToggle(){
  const [isDark, setIsDark] = useState(() => {
    return document.querySelector("html")?.className === "dark";
  });

  const handleToggle = () => {
    const newTheme = theme();
    setIsDark(newTheme === "dark");
  };
  return (
    <button onClick={handleToggle} className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"> 

     {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600" />
      )}
    </button>
  );
}