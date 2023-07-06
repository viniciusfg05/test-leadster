import Image from 'next/image'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className="z-30 flex h-16 w-full items-center justify-center bg-white">
      <div className="w-32">
        <Image
          src={logo}
          alt="Logo Leadster"
          width={194}
          height={42}
          className=""
        />
      </div>
    </header>
  )
}
