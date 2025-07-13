import { PanelLeft } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

export function Header({ text, isOpen, setIsOpen }: Props) {
  return (
    <div className={text}
    data-state={isOpen ? "open" : "closed"}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" p-2 cursor-pointer rounded-lg  hover:shadow-md text-center bg-white/10 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 w-fit justify-start"
      >
        <PanelLeft className="w-5 h-5  text-purple-700 dark:text-purple-300 " />
      </button>
    </div>
  );
}