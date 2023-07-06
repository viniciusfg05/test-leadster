'use client'
import Link from 'next/link'
import Arrow from '../../assets/arrow.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()
  const li = [
    {
      content: 'Agência',
      hrfe: '/agency',
    },
    {
      content: 'Chatbot',
      hrfe: '/chatbot',
    },
    {
      content: 'Marketing Digital',
      hrfe: '/marketing-digital',
    },
    {
      content: 'Geração de Leads',
      hrfe: '/lead-generation',
    },
    {
      content: 'Mídia Paga',
      hrfe: '/paid-media',
    },
  ]

  return (
    <>
      <nav className="mt-[5.68rem] flex  w-[100vw] max-w-[1160px] items-center  mobile:px-3 laptop:flex-col laptop:items-start desktop:mx-auto">
        <ul
          className=" flex items-center justify-start gap-4"
          style={{ flexFlow: 'wrap' }}
        >
          {li.map((li) => (
            <li
              key={li.hrfe}
              className={`${
                li.hrfe === pathname
                  ? 'cursor-pointer rounded-full border border-blue-700  bg-blue-700 px-4 py-2 text-white transition-[0.3]  hover:border-blue-900 '
                  : 'cursor-pointer rounded-full border border-blue-900 px-4 py-2  font-semibold text-blue-900 transition-[0.3] hover:border-blue-700 hover:text-blue-700 '
              } `}
            >
              <Link href={li.hrfe} className="flex whitespace-nowrap">
                {li.content}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative ml-auto flex items-center gap-3 laptop:ml-0 laptop:mt-3">
          <p className="font-bold">Ordem por</p>
          <select
            className="custom-select rounded-[10px] border border-blue-900  py-2 pl-4 pr-8 font-semibold text-blue-900 "
            style={{
              WebkitAppearance: 'none',
              // backgroundImage: `${assetHeader}`,
            }}
          >
            <option value="books">Data de publicação</option>
            <option value="html">Mais recentes</option>
            <option value="css">Mais relevantes</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 -bottom-1 right-3 flex px-2 text-gray-600">
            <Image src={Arrow} alt="" width={12} className="" />
          </div>
        </div>
      </nav>

      <div className="mx-auto mt-6 flex h-0 w-[100%] max-w-[72.5rem] border-b border-b-blue-300" />
    </>
  )
}
