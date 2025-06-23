import { Code, GraduationCap, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <div className="text-center flex flex-1 flex-col mb-8">
      <div className="font-serif my-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 ">
          <span
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
        bg-clip-text text-transparent"
          >
            {" "}
            Sobre Mim{" "}
          </span>
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col mx-6 text-justify lg:gap-6">
        <div className="flex flex-col flex-2">
          <div className="p-5 mb-2 mt-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm rounded-xl">
            <h3 className="lg:text-3xl my-2 font-bold text-left mb-2 dark:text-white flex flex-row items-center">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
              Minha Jornada
            </h3>

            <div className="space-y-4 my-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Minha trajetória no mundo da tecnologia começou de forma
                inesperada. Graduanda em
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {" "}
                  Engenharia Elétrica
                </span>
                , descobri minha verdadeira paixão ao mergulhar no universo do
                desenvolvimento web.
              </p>
              <p>
                A transição da engenharia para o desenvolvimento foi um dos
                desafios mais gratificantes da minha carreira. O que começou
                como curiosidade se transformou em dedicação total, levando-me a
                descobrir o poder de criar soluções digitais que realmente fazem
                a diferença.
              </p>
              <p>
                Atualmente, sou estudante de
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  Ciência da Computação
                </span>
                , onde aprofundo meus conhecimentos teóricos enquanto aplico na
                prática tudo o que aprendo no desenvolvimento de aplicações
                robustas e escaláveis.
              </p>
            </div>
          </div>
          <div className="bg-white/70 my-4 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            <h3 className="text-2xl my-2 font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <Heart className="w-6 h-6 text-red-500 dark:text-red-400 mr-3" />
              Minha Paixão
            </h3>
            <p className="text-gray-600 my-2 dark:text-gray-300 leading-relaxed">
              Sou apaixonada por{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                back-end development{" "}
              </span>
              e pela arquitetura que sustenta as aplicações modernas. Adoro
              resolver problemas complexos, otimizar performance e criar APIs
              que proporcionam experiências fluidas para os usuários.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-0 lg:flex lg:flex-col gap-6 mt-2 lg:mt-0 lg:h-full grid grid-cols-4 lg:justify-between">
          <div className="col-span-2 bg-gradient-to-br lg:mt-2 w-full from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 backdrop-blur-sm rounded-2xl p-5 border border-purple-200/50 dark:border-purple-500/20 shadow-sm">
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Formação
              </h3>
              <div className="space-y-3 mb-2">
                <div className="p-2 bg-white/50 dark:bg-gray-800/30  rounded-lg">
                  <p className="font-medium text-purple-700 dark:text-purple-300">
                    Ciência da Computação
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Em andamento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br w-full col-span-2">
            <div className="bg-white/70 p-5 h-full  dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-5 my-2 text-gray-800 dark:text-white text-center">
                Estatísticas
              </h3>
              <div className="gap-4 text-center flex flex-row justify-around">
                <div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    10
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Projetos
                  </p>
                </div>
                <div className="mb-2">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    3+
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Anos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mb-4 lg:w-56 p-5 md:col-start-4 col-span-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/10 border-purple-200/50 dark:border-purple-500/20  dark:to-blue-500/10 text-gray-800 dark:text-gray-100 backdrop-blur-sm rounded-lg shadow-sm text-sm font-medium italic ">
            <span>✨ Não é magia, é só muita linha de código e café.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
