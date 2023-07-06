import Image from 'next/image'
// import comparative from '../../assets/comparativo.png'
import seloRd from '../../../../assets/selo_RD.png'
import noCard from '../../../../assets/no-card-dark.webp'
import rating from '../../../../assets/rating.webp'

export function DemoInfo() {
  return (
    <div className="mx-auto flex  w-[100%] items-center laptop:w-[100%] laptop:max-w-[43rem]  laptop:justify-center laptop:p-16 laptop:p-4 desktop:ml-[6rem]">
      <div className="flex w-[100%] flex-col items-start">
        <header>
          <p className="text-5xl font-semibold leading-normal text-blue-900">
            Pronto para triplicar sua
          </p>
          <span className="text-5xl font-bold  text-blue-900">
            Geração de Leads?
          </span>
        </header>

        <div className="mt-4 flex gap-2 text-2xl text-blue-900 mobile:flex-col">
          <p className="font-medium">Criação e ativação em</p>
          <strong>4 minutos.</strong>
        </div>

        <div className="my-6 flex h-0 w-[100%] max-w-[39rem] border-b border-b-blue-300 mobile:my-3" />

        <div className="flex space-x-4  ">
          <button className="text-1xl rounded-full bg-blue-700 px-8 py-6 font-semibold text-white mobile:py-1 mobile:text-xs ">
            VER DEMOSTRAÇÃO
          </button>
          <Image src={seloRd} alt="Selo RD Station" />
        </div>

        <footer>
          <div className=" left-0 mt-4 flex items-center text-[13px] leading-none mobile:flex-col mobile:items-start mobile:space-x-0 mobile:space-y-2   ">
            <div className="flex gap-2">
              <Image
                src={noCard}
                width={16}
                height={16}
                alt="Ícone com um cartão de crédito com um risco no meio"
                className=""
              />
              <strong>Não</strong>
              <p className="font-semibold">é necessário Cartão de crédito</p>
            </div>

            <div className="mx-8 border-l border-blue-900 " />

            <div className="flex gap-2 mobile:m-0">
              <Image
                src={rating}
                width={92}
                height={16}
                alt="5 estrelas amarelas simbolizando 4.9/5 de avaliação"
              />
              <p className="font-semibold">4.9/5 média de satisfação</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
