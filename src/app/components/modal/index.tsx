import * as Dialog from '@radix-ui/react-dialog'
import { Downloads } from './components/downloads'
import { SideBarDownloads } from './components/side-bar-downloads'
import { X } from 'lucide-react'

interface ModalProps {
  urlVideo: string
  title: string
}

export function Modal({ urlVideo, title }: ModalProps) {
  return (
    <div className="relative">
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-[rgba(66,90,107,0.7)]" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50  h-[100%] max-h-[52.5rem] min-h-[40.5rem] w-[100%] max-w-[38.125rem] translate-x-[-50%] translate-y-[-50%]  overflow-hidden overflow-y-visible rounded-xl  bg-white mobile:rounded-none">
        <Dialog.Close
          className="absolute right-[21px] top-[18px] border-none text-4xl"
          asChild
        >
          <X size={24} className="cursor-pointer text-4xl text-[#627397]" />
        </Dialog.Close>

        <div className=" flex w-[100%] border-t-[6px] border-blue-700 object-cover">
          <Dialog.Title className=" mx-[8rem] my-8  block w-[100%] items-start text-xl  font-semibold text-blue-900 mobile:mx-4 mobile:my-4">
            <span className="font-semibold text-blue-700">Webinar:</span>{' '}
            {title}
          </Dialog.Title>
        </div>

        <iframe
          width="100%"
          height="393px"
          src={urlVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mobile:h-[14.5rem] mobile:w-[100%]"
        />

        <div className="p-8 mobile:p-4">
          <strong className="text-xl text-blue-900">Descrição</strong>

          <div className="mobile:my-0.2rem mx-auto my-[0.5rem] flex h-1  w-[100%] border-b border-b-blue-300" />

          <Dialog.Description className="font-medium text-blue-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            libero corrupti, similique aspernatur consequuntur molestiae
            deserunt ipsa iusto accusantium. Repellendus praesentium
            voluptatibus odit veniam? Nobis accusamus similique nulla et
            repellendus.
          </Dialog.Description>

          <Downloads />
        </div>
      </Dialog.Content>

      <SideBarDownloads />
    </div>
  )
}
