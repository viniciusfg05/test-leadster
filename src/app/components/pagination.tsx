import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  data: any[]
  onPageChange: (page: number) => void
}

export function Pagination({
  onPageChange,
  data,
  currentPage,
}: PaginationProps) {
  const itemsPerPage = 9
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage)
  }

  return (
    <nav className="relative mt-10 flex h-[52px] w-[100%] justify-center">
      <ul className="flex items-center space-x-4 text-2xl font-bold">
        <p className="font-extrabold text-blue-900">Páginas</p>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`${
              index + 1 === currentPage
                ? 'rounded-md border border-blue-700 px-2 py-1 font-extrabold text-blue-700'
                : 'border-0 text-blue-900'
            } `}
          >
            <Link
              href={`?page=${index + 1}`}
              onClick={() => handlePageChange(index + 1)}
            >
              <button
                className="border: rounded bg-transparent px-3 py-1 hover:bg-gray-300"
                disabled={index + 1 === currentPage}
              >
                {index + 1}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
