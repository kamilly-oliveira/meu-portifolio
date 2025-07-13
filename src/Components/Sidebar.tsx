import { FolderOpen, House, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ActiveLink } from "./ActiveLink";
import { Header } from "./Header";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const classNameP =
  "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 text-xl gap-2 cursor-pointer my-3 w-full flex items-center px-4 py-3 rounded-lg transition-all ";
const activeItemClass =
  "bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 shadow-xs";

const classSidebar = "fixed lg:data-[state=open]:relative";

export function Sidebar({ isOpen, setIsOpen }: Props) {
  const buttonClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleItemClick = () => {
  if (window.innerWidth < 1024) {
    setIsOpen(false);
  }
};

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      data-state={isOpen ? "open" : "closed"}
      className={`${classSidebar} lg:data-[state=open]:bg-transparent data-[state=closed]:hidden data-[state=open]:bg-black/40 z-40 data-[state=open]:w-screen data-[state=open]:h-screen lg:data-[state=open]:w-78`}
    >
      <div
        onClick={buttonClicked}
        data-state={isOpen ? "open" : "closed"}
        className={`${classSidebar} w-78 block data-[state=closed]:hidden z-50`}
      >
        <div className="fixed w-78 h-screen transition-all duration-300 p-5 shadow-lg rounded-r-lg bg-white dark:bg-background">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h2
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
        bg-clip-text text-transparent"
              >
                Kamilly
              </h2>
              <div> <Header 
              text="" 
              isOpen={isOpen} setIsOpen={setIsOpen} /></div>
              
            </div>
            <p className="pt-3 text-sm text-gray-400 dark:text-gray-400">
              Desenvolvedora Web
            </p>
          </div>
        
        <div className="static">

          <div className="mt-8">
            <div onClick={handleItemClick}>
              <ActiveLink
                to="/"
                className={classNameP}
                activeClassName={activeItemClass}
              >
                <House /> Início
              </ActiveLink>
            </div>
            <div onClick={handleItemClick}>
              <ActiveLink
                to="/aboutsection"
                activeClassName={activeItemClass}
                className={classNameP}
              >
                <User /> Sobre
              </ActiveLink>
            </div>
            <div onClick={handleItemClick}>
              <ActiveLink
                to="/projetos"
                activeClassName={activeItemClass}
                className={classNameP}
              >
                <FolderOpen /> Projetos
              </ActiveLink>
            </div>
          </div>

              <div className="p-2 absolute bottom-3 right-3">
                <ThemeToggle />
              </div>

              </div>
        </div>
      </div>
    </div>
  );
}