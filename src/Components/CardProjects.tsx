import { Github } from "lucide-react";
import { Badge } from "./Badge";

type Props = {
  titulo: string;
  descricao: string;
  textBagde: string;
  url: string;
  link: string;
};

export function CardProjects({
  titulo,
  descricao,
  textBagde,
  url,
  link,
}: Props) {
  const arrayBagde = textBagde.split(" ");

  return (
    <div className="shadow-sm rounded-xl w-86 my-4 hover:scale-105 transition-all duration-300 ">
      <img src={link} className="rounded-t-xl w-full h-42 object-cover" />
      <div className="p-6">
        <h1 className="text-2xl my-2 dark:text-white font-semibold">
          {titulo}
        </h1>
        <p className="my-2 text-gray-600 mb-4 dark:text-gray-300 leading-relaxed">
          {descricao}
        </p>

        <div className="flex flex-wrap gap-2 text-justify">
          {arrayBagde.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
        <a href={url} target="_blank">
          <button className="flex flex-row rounded-xl cursor-pointer dark:text-gray-400 bg-gray-200 p-3 gap-2 my-6 dark:bg-gray-700/20">
            <Github />
            Código
          </button>
        </a>
      </div>
    </div>
  );
}
