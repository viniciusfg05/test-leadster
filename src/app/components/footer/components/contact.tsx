import Link from 'next/link'

export function Contact() {
  return (
    <ul className="flex flex-col space-y-4">
      <li>
        E-mail:{' '}
        <Link href="mailto:contato@leadster.com.br">
          contato@leadster.com.br
        </Link>
      </li>

      <li>
        Telefone: <Link href="tel:+554298828-9851">(42) 98828-9851</Link>
      </li>
    </ul>
  )
}
