import { DownloadCloud } from 'lucide-react'

export function SideBarDownloads() {
  return (
    <div className="data-[state=open]:animate-contentShow  fixed bottom-0 left-[0] z-50 h-[15.25rem]  w-[12.25remrem]  space-y-4 overflow-hidden border-white bg-white p-4 mobile:hidden">
      <button className="flex h-10 w-[100%] items-center rounded-lg bg-[#C2F4EA] pr-4 font-semibold text-[#04B68C]">
        <DownloadCloud
          className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#9FEFDF] p-[0.5rem]"
          size={12}
        />
        streadsheet.xls
      </button>

      <button className="flex h-10 w-[100%] items-center rounded-lg bg-[#C2E6FF] pr-4 font-semibold text-[#008EF0]">
        <DownloadCloud
          className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#A1D9FF] p-[0.5rem]"
          size={12}
        />
        Document.doc
      </button>

      <button className="flex h-10 w-[100%] items-center rounded-lg bg-[#FFF8D0] pr-4 font-semibold text-[#B1982C]">
        <DownloadCloud
          className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#FFF1A0] p-[0.5rem]"
          size={12}
        />
        Presentation.ppt
      </button>

      <button className="flex h-10 w-[100%] items-center rounded-lg bg-[#E8EEF3] pr-4 font-semibold text-[#858F97]">
        <DownloadCloud
          className="mr-4 h-[100%] w-[40px] rounded-l-lg bg-[#D0DEE7] p-[0.5rem]"
          size={12}
        />
        Folder.zip
      </button>
    </div>
  )
}
