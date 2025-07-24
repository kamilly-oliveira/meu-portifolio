import PortifolioImage from "../assets/Portifolio.png";
import CommunityBot from "../assets/CommunityBot.png";
import ConversorMoedas from "../assets/ConversordeMoedas.png";
import TechNews from "../assets/TechNews.png";
import TouristSite from "../assets/TouristSite.png";
import TravelProfile from "../assets/TravelProfile.png";
import RecipePage from "../assets/RecipePage.png";
import PagePoesia from "../assets/PagePoesia.png";
import CuriosidadesTecnologia from "../assets/CuriosidadesTecnologia.png";
import GoogleGlass from "../assets/GoogleGlass.png";
import { CardProjects } from "./CardProjects";
import { Bot, Github } from "lucide-react";


const classNameItem = "sm:w-7 sm:h-7 w-5 h-5"


export function ProjectsSection() {
  return (
    <div className="flex flex-1 container 2xl:mx-auto 2xl:w-300 mx-auto flex-col ">
      <h1
        className="text-3xl my-4 mt-16 font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
        bg-clip-text text-transparent mx-6"
      >
        Projetos
      </h1>
      <p className="text-gray-600 mb-2  mx-6 dark:text-gray-300 leading-relaxed">
        Uma seleção dos meus projetos mais recentes
      </p>
      <div className="flex flex-wrap gap-2 justify-around">
        <CardProjects
          link={PortifolioImage}
          titulo={"Portifolio"}
          descricao={
            "Portfólio pessoal responsivo com tema escuro/claro e animações suaves."
          }
          textBagde={"TailwindCSS React Typescript"}
          url={"https://github.com/kamilly-oliveira/meu-portifolio"}
          text={"Código"}
          item={<Github className={`${classNameItem}`}/>}
        />

        <CardProjects
          link={CommunityBot}
          titulo={"Landing Page"}
          descricao={
            "Página responsiva que apresenta o bot e coleta interessados via lista de espera."
          }
          textBagde={"TailwindCSS React Typescript Node.Js Express SupaBase"}
          url={"https://bot-landing-page.pages.dev/"}
          text={"Plataforma"}
          item={<Bot className={`${classNameItem}`} />}
        />

        <CardProjects
          link={ConversorMoedas}
          titulo={"Conversor de Moedas"}
          descricao={
            "Conversor de Moedas de Dolar, Euro ou Libra Esterlina para Reais."
          }
          textBagde={"HTML CSS Javascript"}
          url={"https://github.com/kamilly-oliveira/ConversorMoedas"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={TechNews}
          titulo={"Tech News"}
          descricao={"Portal de Noticias."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/ConversorMoedas"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={TouristSite}
          titulo={"Tourist Site"}
          descricao={"Site de Turismo sobre Busan."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Tourist_Site"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={TravelProfile}
          titulo={"Travel Profile"}
          descricao={"Perfil de Viagens."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Travel_Profile"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={RecipePage}
          titulo={"Recipe Page"}
          descricao={"Página de Receitas."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Recipe_Page"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={PagePoesia}
          titulo={"Poesia"}
          descricao={"Página de Poesia."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Projeto-Poesia"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={CuriosidadesTecnologia}
          titulo={"Curiosidades de Tecnologia"}
          descricao={"Página de Curiosidades de Tecnologia."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Projeto-Android"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />

        <CardProjects
          link={GoogleGlass}
          titulo={"Google Glass"}
          descricao={"Página sobre o Google Glass."}
          textBagde={"HTML CSS"}
          url={"https://github.com/kamilly-oliveira/Projeto-Google.Glass"}
          text={"Código"}
          item={<Github className={`${classNameItem}`} />}
        />
      </div>
    </div>
  );
}
