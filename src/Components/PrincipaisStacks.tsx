import { Focus, MessageCircle, Users } from "lucide-react";

const classNameP =
  "lg:w-1/2 w-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 lg:w-[calc(50%-0.5rem)] text-black dark:text-gray-400 text-left p-2 rounded-lg  shadow-sm hover:shadow-md";

export function PrincipaisStacks() {
  return (
    <div className="flex flex-row w-full justify-around my-3">
      <div className="p-5 lg:m-4 m-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl lg:w-100 flex-1">
        <h2 className="lg:text-3xl font-bold text-left mb-3 dark:text-white">
          Principais Stacks
        </h2>

        <div className="flex lg:flex-row lg:flex-wrap flex-col gap-2 lg:text-base text-sm">
          <p className={`${classNameP}`}>🟨 JavaScript</p>
          <p className={`${classNameP}`}>🔷 TypeScript</p>
          <p className={`${classNameP}`}>⚛️ React</p>
          <p className={`${classNameP}`}>🟢 Node.JS</p>
          <p className={`${classNameP}`}>🖥️ GitHub</p>
          <p className={`${classNameP}`}>🔗 API Rest</p>
        </div>
      </div>

      <div className="p-5 lg:m-4 m-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm w-fit rounded-xl flex-1">
        <h2 className="lg:text-3xl font-bold text-left mb-3 dark:text-white">
          Soft Skills
        </h2>

        <div className="lg:text-base text-sm">
          <p className={`${classNameP} lg:w-full my-2 flex flex-row gap-2`}>
            {" "}
            <Focus className="w-6 h-6 text-purple-600 dark:text-purple-400" />{" "}
            Foco
          </p>
          <p className={`${classNameP} lg:w-full my-2 flex flex-row gap-2`}>
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />{" "}
            Organização
          </p>
          <p className={`${classNameP} lg:w-full my-2 flex flex-row gap-2`}>
            <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />{" "}
            Comunicação
          </p>
        </div>
      </div>
    </div>
  );
}
