import Image from 'next/image'

export default function Header(){
  return (
    <div className="bg-black">
      <div className="flex w-[80%] justify-between m-auto py-4 items-center max-w-screen-lg mx-auto">
        <div>
          <Image
            src="/imagens/opyt.png"
            alt="Landscape picture"
            width={50}
            height={50}
          />
        </div>
        <div>
          <nav>
            <ul className="flex gap-[20px]">
              <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><li>Inicio</li></a>
              <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><li>Servicos</li></a>
              <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><li>Contatos</li></a>
              <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2"><li>Sobre</li></a>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  )
}