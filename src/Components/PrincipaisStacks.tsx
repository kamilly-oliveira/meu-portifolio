import { Focus, MessageCircle, Users } from "lucide-react";

const classNameP =
  "lg:w-1/2 w-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 lg:w-[calc(50%-0.5rem)] text-black dark:text-gray-400 text-left p-2 rounded-lg  shadow-sm hover:shadow-md";

export function PrincipaisStacks() {
  return (
    <div className="flex flex-row w-full justify-around my-1">
      <div className="sm:p-5 p-3 lg:m-4 m-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl lg:w-100 flex-1">
        <h2 className="lg:text-3xl text-sm font-bold text-left mb-3 dark:text-white">
          Principais Stacks
        </h2>

        <div className="flex lg:flex-row lg:flex-wrap flex-col gap-2 lg:text-base text-xs">
          <p className={`${classNameP}`}>🟨 JavaScript</p>
          <p className={`${classNameP}`}>🔷 TypeScript</p>
          <p className={`${classNameP}`}>⚛️ React</p>
          <p className={`${classNameP}`}>🟢 Node.JS</p>
          <p className={`${classNameP}`}>🖥️ GitHub</p>
          <p className={`${classNameP}`}>🔗 API Rest</p>
        </div>
      </div>

      <div className="sm:p-5 p-3 lg:m-4 m-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm w-fit rounded-xl flex-1">
        <h2 className="lg:text-3xl text-sm font-bold text-left mb-3 dark:text-white">
          Soft Skills
        </h2>

        <div className="lg:text-base text-xs">
          <p className={`${classNameP} lg:w-full my-2 flex flex-row sm:gap-2 gap-1`}>
            {" "}
            <Focus className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Foco
          </p>
          <p className={`${classNameP} lg:w-full my-2 flex flex-row sm:gap-2 gap-1`}>
            <Users className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Organização
          </p>
          <p className={`${classNameP} lg:w-full my-2 flex flex-row sm:gap-2 gap-1`}>
            <MessageCircle className="sm:w-6 sm:h-6 w-4 h-4 text-purple-600 dark:text-purple-400" />{" "}
             Comunicação
          </p>
        </div>
      </div>
    </div>
  );
}
