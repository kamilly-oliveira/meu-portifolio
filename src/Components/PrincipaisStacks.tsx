import { Focus, MessageCircle, Users } from "lucide-react";

const classNameP =
  "w-1/2 w-[calc(50%-0.5rem)] text-black dark:text-gray-400 text-left p-2 bg-gray-200 dark:bg-gray-700/20 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-all duration-300 shadow-sm hover:shadow-md";

export function PrincipaisStacks() {
  return (
    <div className="flex flex-row w-full justify-around">

      <div className="p-5 m-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl w-100 flex-1">
        <h2 className="lg:text-3xl font-bold text-left mb-2 dark:text-white">Principais Stacks 👨‍💻</h2>

        <div className="flex flex-wrap gap-2">
          <p className={`${classNameP}`}>🟨 JavaScript</p>
          <p className={`${classNameP}`}>🔷 TypeScript</p>
          <p className={`${classNameP}`}>⚛️ React</p>
           <p className={`${classNameP}`}>🟢 Node.JS</p>
          <p className={`${classNameP}`}>🖥️ GitHub</p>
          <p className={`${classNameP}`}>🔗 API Rest</p>
        </div>
      </div>

      <div className="p-5 m-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm w-fit rounded-xl flex-1">
        <h2 className="lg:text-3xl font-bold text-left mb-2 dark:text-white">Soft Skiils</h2>
        <p className={`${classNameP} w-full my-2 flex flex-row gap-2 `}> <Focus className="w-6 h-6 text-purple-600 dark:text-purple-400"/> Foco</p>
        <p className={`${classNameP} w-full my-2 flex flex-row gap-2`}><Users className="w-6 h-6 text-purple-600 dark:text-purple-400"/> Organização</p>
        <p className={`${classNameP} w-full my-2 flex flex-row gap-2`}><MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400"/> Comunicação</p>
      </div>

    </div>
  );
}
