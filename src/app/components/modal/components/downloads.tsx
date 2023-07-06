import { DownloadCloud } from 'lucide-react'

export function Downloads() {
  return (
    <div className="mt-4">
      <strong className="text-xl text-blue-900">Downloads</strong>

      <div className="mx-auto mb-[1rem] mt-[0.5rem] flex h-1 w-[100%]  border-b border-b-blue-300 " />

      <div className="flex gap-[0.5rem] mobile:flex-col ">
        <button className="flex h-10 items-center rounded-lg bg-[#C2F4EA] pr-4 font-semibold text-[#04B68C] mobile:w-[200px]">
          <DownloadCloud
            className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#9FEFDF] p-[0.5rem]"
            size={12}
          />
          streadsheet.xls
        </button>

        <button className="flex h-10 items-center rounded-lg bg-[#C2E6FF] pr-4 font-semibold text-[#008EF0] mobile:w-[200px]">
          <DownloadCloud
            className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#A1D9FF] p-[0.5rem]"
            size={12}
          />
          Document.doc
        </button>

        <button className="flex h-10 items-center rounded-lg bg-[#FFF8D0] pr-4 font-semibold text-[#B1982C] mobile:w-[200px]">
          <DownloadCloud
            className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#FFF1A0] p-[0.5rem]"
            size={12}
          />
          Presentation.ppt
        </button>
      </div>
    </div>
  )
}
