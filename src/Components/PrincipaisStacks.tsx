import { Focus, MessageCircle, Users } from "lucide-react";

const classNameP =
  "lg:w-1/2 sm:w-full w-1/2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 lg:w-[calc(50%-0.5rem)] w-[calc(50%-0.2rem)] text-black dark:text-gray-400 text-left p-2 rounded-lg  shadow-sm hover:shadow-md";

  const classNameP1 =
  "w-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80  text-black dark:text-gray-400 text-left p-2 rounded-lg  shadow-sm hover:shadow-md";


export function PrincipaisStacks() {
  return (
    <div className="flex sm:flex-row flex-col w-full justify-around sm:mx-2 mt-2 gap-4">
      <div className="sm:p-5 p-3 border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl lg:w-100 flex-1">
        <h2 className="lg:text-3xl text-sm font-bold text-left mb-3 dark:text-white">
          Principais Stacks
        </h2>

        <div className="flex lg:flex-row lg:flex-wrap sm:flex-col flex-row flex-wrap sm:gap-2 gap-1 lg:text-base text-xs">
          <p className={`${classNameP}`}>🟨 JavaScript</p>
          <p className={`${classNameP}`}>🔷 TypeScript</p>
          <p className={`${classNameP}`}>⚛️ React</p>
          <p className={`${classNameP}`}>🟢 Node.JS</p>
          <p className={`${classNameP}`}>🖥️ GitHub</p>
          <p className={`${classNameP}`}>🔗 API Rest</p>
        </div>
      </div>

      <div className="sm:p-5 p-3 max-w-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl flex-1">
        <h2 className="lg:text-3xl text-sm font-bold text-left mb-3 dark:text-white">
          Soft Skills
        </h2>

        <div className="lg:text-base text-xs">
          <p className={`${classNameP1} my-2 flex flex-row items-center sm:gap-2 gap-1`}>
            {" "}
            <Focus className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Foco
          </p>
          <p className={`${classNameP1} my-2 flex flex-row items-center sm:gap-2 gap-1`}>
            <Users className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Organização
          </p>
          <p className={`${classNameP1} my-2 flex flex-row items-center sm:gap-2 gap-1`}>
            <MessageCircle className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Comunicação
          </p>
        </div>
      </div>
    </div>
  );
}
