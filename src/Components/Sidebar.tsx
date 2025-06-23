import { FolderOpen, House, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ActiveLink } from "./ActiveLink";

const classNameP =
  "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 text-xl gap-2 cursor-pointer my-3 w-full flex items-center px-4 py-3 rounded-lg transition-all ";
const activeItemClass =
  "bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 shadow-sm";

export function Sidebar() {
  return (
    <div className="p-5 lg:w-78 hidden lg:block max-h-full shadow-2xl rounded-r-lg">
      <div className="fixed w-68">
        <div>
          <div className="flex flex-row justify-between items-center">
            <h2
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
        bg-clip-text text-transparent"
            >
              Kamilly
            </h2>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <p className="pt-3 text-sm text-gray-400 dark:text-gray-400">
            Desenvolvedora Web
          </p>
        </div>

        <div className="mt-8">
          <ActiveLink
            to="/"
            className={classNameP}
            activeClassName={activeItemClass}
          >
            <House /> Início
          </ActiveLink>
          <ActiveLink
            to="/aboutsection"
            activeClassName={activeItemClass}
            className={classNameP}
          >
            <User /> Sobre
          </ActiveLink>
          <ActiveLink
            to="/projetos"
            activeClassName={activeItemClass}
            className={classNameP}
          >
            <FolderOpen /> Projetos
          </ActiveLink>
        </div>
      </div>
    </div>
  );
}

// bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 shadow-sm
