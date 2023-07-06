export function Copyright() {
  return (
    <>
      <div className="  flex h-1 w-[100vw]  border-b border-b-[#F2F4F8] " />

      <div className="mx-auto  mt-8 flex w-[1160px] justify-between px-4 text-xs font-semibold text-[#838EAD] mobile:flex mobile:w-[100vw] mobile:flex-col mobile:space-y-4 mobile:pb-12 desktop:mb-8">
        <div>
          <span>Copyright @ 2015 - 2022 Todos os direitos reservados |</span>{' '}
          <span className="text-blue-700">Leadster</span>
        </div>

        <div className=" ">
          <span>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </span>
        </div>
      </div>
    </>
  )
}
