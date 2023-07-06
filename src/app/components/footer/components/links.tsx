import Link from 'next/link'

interface LinksProps {
  title: string
  links: {
    href: string
    content: string
  }[]
}

export function Links({ links, title }: LinksProps) {
  return (
    <div className="mobile:mt-10">
      <strong className="mb-10 flex text-xl text-blue-900 mobile:mb-6 ">
        {title}
      </strong>

      <ul className="flex flex-col space-y-4">
        {links.map((link) => (
          <li key={link.content} className="">
            <Link
              href={link.href}
              className="font-2xl font-medium text-[#838EAD]"
            >
              {link.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
