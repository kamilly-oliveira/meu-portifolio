import { Badge } from "./Badge";

type Props = {
  titulo: string;
  descricao: string;
  textBagde: string;
  url: string;
  link: string;
  text: string;
  item: any;
};

export function CardProjects({
  titulo,
  descricao,
  textBagde,
  url,
  link,
  text,
  item,
}: Props) {
  const arrayBagde = textBagde.split(" ");

  return (
    <div className="shadow-sm rounded-xl sm:w-86 w-66 my-4 hover:scale-105 transition-all duration-300 ">
      <img src={link} className="rounded-t-xl w-full h-42 object-cover" />
      <div className="px-6 pt-3">
        <h1 className="sm:text-2xl text-lg  dark:text-white font-semibold">
          {titulo}
        </h1>
        <p className=" text-gray-600 dark:text-gray-300 sm:text-base text-sm mb-2 leading-relaxed">
          {descricao}
        </p></div>


        <div className="flex flex-col justify-between px-6 h-40 mb-4">
        <div className="flex flex-wrap gap-2 text-justify">
          {arrayBagde.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
        <div className="">
        <a href={url} target="_blank">
          <button className="flex flex-row rounded-xl sm:text-base text-sm cursor-pointer p-3 gap-2 
          bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 shadow-sm">
            {item}
            {text}
          </button>
        </a>
      </div>

      </div>
    
    </div>
  );
}
