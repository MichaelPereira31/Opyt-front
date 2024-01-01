import Image from 'next/image'

export default function Footer(){
  return (
      <footer className="w-full h-[76px] justify-between items-center m-auto p-4 bg-black text-white">
        <div className="flex justify-around max-w-screen-lg mx-auto">
          <div className="flex gap-[20px]">
            <div>
            <Image
                src="/imagens/opyt.png"
                alt="opyt picture"
                width={50}
                height={50}
                />
            </div>
            <p className='text-sm'>© 2023 Opyt LTDA. Todos os direitos reservados</p>
          </div>
          <div>
            <ul className="flex gap-[10px]">
              <a href="https://www.facebook.com/opytnet/?locale=pt_BR">
                <li>
                  <Image
                    src="/imagens/facebook.png"
                    alt="facebook picture"
                    width={25}
                    height={50}
                  />
                </li>
              </a>

              <a href="https://www.instagram.com/opytnet/?hl=pt">
                <li>
                  <Image
                    src="/imagens/instagram.png"
                    alt="instagram picture"
                    width={25}
                    height={25}
                  />
                </li>
              </a>

              <a href="https://www.linkedin.com/company/opyt/">
                <li>
                  <Image
                    src="/imagens/linkedin.png"
                    alt="linkedin picture"
                    width={25}
                    height={25}
                  />
                </li>
              </a>

            </ul>
          </div>
        </div>
      </footer>
  )
}