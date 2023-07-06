import Image from 'next/image'
import assetHeader from '../../assets/asset-header.png'
export function Banner() {
  return (
    <div className="flex h-auto w-full flex-col items-center bg-blue-200 p-32 text-center mobile:px-4 mobile:py-20 ">
      <header className="w-auto rounded-e-2xl rounded-t-2xl  border-2 border-blue-700 px-3 py-1">
        <strong className="flex justify-center text-center text-xs text-blue-700">
          webinars exclusivos
        </strong>
      </header>

      <main className="mt-4">
        <p className="font-alt text-4xl font-medium text-blue-900 mobile:text-3xl">
          Menos Conversinha,
        </p>
        <strong className="relative text-7xl text-blue-700 tablet:leading-none">
          Mais Conversão
          <Image
            src={assetHeader}
            alt=""
            unoptimized
            className="absolute -right-[1.4rem]  top-[0.5rem] mobile:-right-[0.7rem] mobile:top-[4.8rem] mobile:w-8 tablet:top-[4.5rem]"
          />
        </strong>

        <div className="w=[560px] mt-2 h-0 border-b border-blue-300"></div>

        <p className="mt-4 text-[13px] font-semibold text-blue-900">
          Conheça as estrategias que <strong>mudaram o jogo</strong> e como
          aplicá-las nos seu negócio
        </p>
      </main>
    </div>
  )
}
