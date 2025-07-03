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
    <div className="shadow-sm rounded-xl w-84 my-4  hover:scale-105 transition-all duration-300 ">
      <img src={link} className="rounded-t-xl w-full h-42 object-cover" />
      <div className="px-6 pt-3">
        <h1 className="text-2xl  dark:text-white font-semibold">
          {titulo}
        </h1>
        <p className=" text-gray-600 mb-4 dark:text-gray-300 leading-relaxed">
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
          <button className="flex flex-row rounded-xl cursor-pointer dark:text-gray-400 bg-gray-200 p-3 gap-2 dark:bg-gray-700/20">
            {item}
            {text}
          </button>
        </a>
      </div>

      </div>
    
    </div>
  );
}
