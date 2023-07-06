'use client'
import Image from 'next/image'
import thumbnail from '../../../assets/thumbnail.png'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import datas from '../../../../datas.json'
import { Thumbnail } from './components/thumbnail'
import { Pagination } from '../pagination'
import { Modal } from '../modal'

const getPageData = (page: number, data: any[]) => {
  const itemsPerPage = 9
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return data.slice(startIndex, endIndex)
}

export function Video() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPageData, setSelectedPageData] = useState<any[]>([])

  useEffect(() => {
    setSelectedPageData(getPageData(currentPage, datas))
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    console.log(newPage)
    setCurrentPage(newPage)
    setSelectedPageData([])
  }

  return (
    <div className="flex h-[100%] min-h-[68rem] flex-col justify-between">
      <div className="mt-[60px] flex h-[100%] min-h-[61.8rem] flex-col justify-between scroll-smooth">
        <div className="mx-auto grid h-[100%] min-w-[23.1665rem] max-w-[1160px] grid-cols-3 gap-6 mobile:flex mobile:w-[100vw] mobile:flex-col  tablet:flex tablet:w-[23.1666rem]  tablet:flex-col  laptop:grid-cols-2 laptop:grid-rows-2">
          {selectedPageData.map((video) => (
            <div key={video.id} className="w-[23.1666rem] mobile:mx-auto">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <div>
                    <Thumbnail>
                      <Image
                        src={thumbnail}
                        alt=""
                        width={400}
                        height={300}
                        className="w-[100%]"
                      />
                      <div className="p-6">
                        <h3 className="font-extrabold  ">{video.title}</h3>
                      </div>
                    </Thumbnail>
                  </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Modal urlVideo={video.url} title={video.title} />
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-[5rem] flex h-1 w-[100%] max-w-[72.5rem] border-b border-b-blue-300 " />
      </div>

      <Pagination
        onPageChange={handlePageChange}
        data={datas}
        currentPage={currentPage}
      />
    </div>
  )
}
