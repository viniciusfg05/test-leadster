import Image from 'next/image'
import { DemoInfo } from './components/demo-info'
import comparative from '../../../assets/comparativo.png'

export function Demo() {
  return (
    <div className="mt-[6rem] flex h-[46.25rem] w-[100vw] items-center bg-blue-200 mobile:h-[100%] laptop:h-[100%]">
      <div className="mx-auto flex h-[100%] w-[120rem] laptop:w-[100vw]">
        <div className="absolute h-[46.25rem] w-[100%] max-w-[120rem]  after:absolute after:z-10 after:flex after:h-[100%] after:w-[940px] after:items-end after:content-mountain laptop:hidden" />
        <div className="mx-auto flex w-[100%] max-w-[90rem] items-center justify-between gap-8 laptop:mx-auto laptop:flex laptop:h-[100%] laptop:w-[100vw] laptop:flex-col ">
          <Image
            src={comparative}
            alt=""
            className="z-10 w-[100%] min-w-[41rem] max-w-[50rem] p-4 mobile:min-w-[21rem]"
          />
          <DemoInfo />
        </div>
      </div>
    </div>
  )
}
