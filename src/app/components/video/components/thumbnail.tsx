import { ReactNode } from 'react'

interface TProps {
  children: ReactNode
}

export function Thumbnail({ children }: TProps) {
  return (
    <div
      className={`
        after:h-min[13.0625rem] relative cursor-pointer overflow-hidden rounded-2xl bg-white text-blue-900 shadow-xl shadow-[#ECEFF0] 
        before:absolute before:left-1/2 before:top-[35%] before:z-50 before:h-[60px] before:w-[60px] before:-translate-x-1/2    before:-translate-y-1/2 before:opacity-30 before:transition
        before:duration-200 before:ease-linear after:absolute after:top-0 after:h-[13.055rem] after:w-[100%] after:rounded-t-2xl    after:transition after:duration-300 after:ease-in after:content-[''] hover:text-blue-700 before:hover:opacity-100   hover:before:content-play after:hover:bg-[rgba(24,148,235,0.43)]
      `}
    >
      {children}
    </div>
  )
}
