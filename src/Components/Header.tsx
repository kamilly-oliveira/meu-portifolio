import { PanelLeft } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ isOpen, setIsOpen }: Props) {
  return (
    <div className="p-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 cursor-pointer rounded-full hover:shadow-md text-center w-fit justify-start"
      >
        <PanelLeft className="w-5 h-5 text-black dark:text-gray-400 " />
      </button>
    </div>
  );
}
