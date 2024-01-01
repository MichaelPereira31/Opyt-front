import Image from "next/image"

import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex min-h-screen min-w-[640px] flex-col items-center bg-e5e6e7 ">
        <section className="flex flex-col justify-center items-center w-[80%] max-w-screen-lg mx-auto mb-5">
          <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-around">
            <div className="mb-5 px-4 py-2">
              <Image
              src="/imagens/opyt.png"
              alt="Logo Opyt"
              width={100}
              height={100}
              className="w-[100px]"
            />
            </div>
              <button type="button" className="bg-orange px-10 py-2 rounded-md text-white mb-2 ">ASSINE AGORA!</button>
              <a href="https://wa.me/15551234567?text=Tenho%20interesse%20no%20plano%20de%20internet" className="bg-green px-10 py-2 rounded-md text-white mb-2">CHAMA NO ZAP!</a>

          </div>
          <div className="w-full lg:flex lg:items-center">
            <div className="flex flex-col justify-center items-center lg:flex-1">
                <div className="mb-2 p-2">
                  <p className="text-lg">Procurando o <span className="text-orange font-bold">melhor plano de internet,</span> com maior velocidade e estabilidade na conexão? Com o nosso <span className="text-orange font-bold">COMBO</span> você vai ter acesso aos melhores filmes e séries utilizando a <span className="text-orange font-bold">melhor internet da região. </span></p>
                </div>
                <div>
                  <Image
                    src="/imagens/1gb.png"
                    alt="Landscape picture"
                    width={350}
                    height={100}
                    className="mb-2"
                  />
        
                  <Image
                  src="/imagens/500mb.png"
                  alt="Landscape picture"
                  width={350}
                  height={100}
                  className="mb-2"

                  />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-1">
                <div className="flex flex-col justify-center items-center text-2xl mb-2">
                  <p className="text-orange font-bold">Preencha os seus dados</p>
                  <p><span className="text-orange font-bold">ou </span>chama no zap!</p>
                </div>
                <RegistrationForm/>
                <div className="flex flex-col w-[60%]">
                  <a href="https://wa.me/15551234567?text=Tenho%20interesse%20no%20plano%20de%20internet" className="bg-green rounded-3xl text-white mb-3 py-3 text-center">CHAMA NO ZAP!</a>
                </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black text-white flex flex-col justify-center items-center mb-5">
          <div className="lg:w-[80%] max-w-screen-lg mx-auto">
            <div className="flex items-center justify-center my-2">
              <p className="text-xl ">
                A Opyt não para de crescer e já somos mais de:
              </p>
            </div>
            <div className="flex flex-col items-center text-sm lg:flex-row lg:justify-around lg:text-lg">
              <div className="flex flex-col justify-center items-center mb-4  lg:flex-1">
                  <Image
                    src="/imagens/trofeu.png"
                    alt="trofeu picture"
                    width={62}
                    height={62}
                  />
                  <h2>18.000 MIL CLIENTES ATIVOS</h2>
                </div>
              <div className="flex flex-col justify-center items-center mb-4 lg:flex-1">
                <Image
                  src="/imagens/estrela.png"
                  alt="Landscape picture"
                  width={62}
                  height={59}
                />
                <h2>4.000 KM DE FIBRA</h2>
              </div>
              <div className="flex flex-col justify-center items-center mb-4 lg:flex-1">
                <Image
                  src="/imagens/casa.png"
                  alt="Landscape picture"
                  width={89}
                  height={59}
                />
                <h2>7 CIDADES ATENDIDAS</h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://wa.me/15551234567?text=Tenho%20interesse%20no%20plano%20de%20internet" className="bg-green px-10 py-4 rounded-3xl text-white mb-4 text-2xl">CHAMA NO ZAP!</a>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center">
          <div className="lg:w-[80%] max-w-screen-lg mx-auto">
            <div className="mb-3">
              <Image
                src="/imagens/planos.png"
                alt="Landscape picture"
                width={1024}
                height={626}
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <a href="https://wa.me/15551234567?text=Tenho%20interesse%20no%20plano%20de%20internet" className="bg-green p-2 w-full rounded-md mx-4 text-center text-white">CHAMA NO ZAP!</a>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row mb-3">
              <Feedback note={5} name="Ana Júlia"  url="/imagens/cliente01.png" text="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"/>
              <Feedback note={5} name="Rulio"  url="/imagens/cliente01.png" text="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"/>
              <Feedback note={4} name="Luiz Alcantra"  url="/imagens/cliente01.png" text="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
