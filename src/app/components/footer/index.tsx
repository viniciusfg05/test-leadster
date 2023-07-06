import Image from 'next/image'
import logo from '../../../assets/logo.png'
import { Links } from './components/links'
import { Social } from './components/social'
import { Copyright } from './components/copyright'
import { Contact } from './components/contact'

export function Footer() {
  const linksMain = [
    { href: '', content: 'Home' },
    { href: '', content: 'Ferramenta' },
    { href: '', content: 'Preço' },
    { href: '', content: 'Contato' },
  ]

  const cases = [
    { href: '', content: 'Geração de Leads B2B' },
    { href: '', content: 'Geração de Leads em Software' },
    { href: '', content: 'Geração de Leads em Imobiliária' },
    { href: '', content: 'Cases de sucesso' },
  ]

  const materials = [
    { href: '', content: 'Blog' },
    { href: '', content: 'Parceria com agências' },
    { href: '', content: 'Guia Definitivo do Marketing' },
    { href: '', content: 'Materiais Gratuito' },
  ]

  return (
    <>
      <footer className="mx-auto mt-8 w-[100%] justify-between desktop:h-[30rem] desktop:max-w-[1160px]">
        <div className="mb-[3rem] flex h-36 w-[100%] flex-col items-center justify-center mobile:mb-0">
          <Image
            src={logo}
            alt="Logo Leadster"
            width={275}
            height={61}
            className=""
          />
          <p className="mt-2 text-base font-medium text-[#838EAD]">
            Transformando visitantes em clientes{' '}
          </p>
        </div>

        <div className="flex w-[100%] justify-between mobile:flex-col mobile:p-4">
          <Links title="Links Principal" links={linksMain} />
          <Links title="Cases" links={cases} />
          <Links title="Materiais" links={materials} />

          <div className="space-y-10 text-blue-900 mobile:mt-8">
            <strong className="text-xl">Siga a Leadster</strong>

            <Social />

            <Contact />
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  )
}
