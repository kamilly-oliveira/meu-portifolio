import { PanelLeft } from "lucide-react";

export function Header() {
  return (
    <div className="p-2">
      <button className="p-2 cursor-pointer rounded-full hover:shadow-md text-center w-fit justify-start">
        <PanelLeft className="w-5 h-5 text-black dark:text-gray-400 " />
      </button>
    </div>
  );
}
