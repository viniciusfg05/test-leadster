import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../../../../assets/linkedin.png'
import facebook from '../../../../assets/facebook.png'
import instagram from '../../../../assets/instagram.png'

export function Social() {
  return (
    <div className="flex w-[10.625rem] justify-around">
      <Link href="https://www.linkedin.com/company/getleadster" target="_blank">
        <Image
          src={linkedin}
          alt="Logo linkedin"
          width={16}
          height={16}
          className=""
        />
      </Link>

      <Link href="https://www.facebook.com/leadsterplatform " target="_blank">
        <Image
          src={facebook}
          alt="Logo facebook"
          width={16}
          height={16}
          className=""
        />
      </Link>

      <Image
        src={instagram}
        alt="Logo instagram"
        width={16}
        height={16}
        className=""
      />
    </div>
  )
}
