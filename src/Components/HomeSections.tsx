import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./Button";
import { PrincipaisStacks } from "./PrincipaisStacks";

export function HomeSection() {
  return (
    <div className="text-center container mx-auto 2xl:w-300 2xl:h-screen flex flex-1 flex-col w-full mb-6">
      <div className="sm:mt-8 sm:mb-6 mt-14 2xl:mt-20">
        <h1 className="sm:text-3xl text-2xl md:text-4xl font-bold mb-4">
          <span className="dark:text-white"> Olá sou a </span>
          <span className="text-blue-600"> Kamilly </span>
        </h1>
        <p className="font-semibold md:text-2xl sm:text-xl text-lg">
          <span className="dark:text-gray-400"> Desenvolvedora </span>
          <span className="text-fuchsia-500"> Web</span>
        </p>
      </div>

      <div className="mx-auto my-4 flex flex-row ">
        <a
          className=" p-3 mx-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md hover:text-purple-700 dark:hover:text-purple-300"
          href="https://github.com/kamilly-oliveira"
          target="_blank"
        >
          <Github />
        </a>
        <a
          className=" p-3 mx-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 rounded-full transition-all duration-300  hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md hover:text-purple-700 dark:hover:text-purple-300"
          href="https://www.linkedin.com/in/kamillyoliveira-kso/"
          target="_blank"
        >
          {" "}
          <Linkedin />
        </a>
        <a
          className=" p-3 mx-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/80 rounded-full transition-all duration-300  hover:scale-110 backdrop-blur-sm shadow-sm hover:shadow-md hover:text-purple-700 dark:hover:text-purple-300"
          href="mailto:kamillysinerina@gmail.com"
        >
          <Mail />
        </a>
      </div>

      <div className="sm:my-8 mb-2">
        <Button text={"Baixar Currículo"} />
      </div>

      <div className="mx-4 2xl:mt-5">
        <PrincipaisStacks />
      </div>
    </div>
  );
}
