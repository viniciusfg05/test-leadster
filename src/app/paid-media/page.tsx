import { Banner } from '../components/banner'
import { Header } from '../components/header'
import { Nav } from '../components/nav'
import { NoContent } from '../components/no-content'

export default function Home() {
  return (
    <div className={`font-alt `}>
      <Header />
      <Banner />
      <Nav />
      <NoContent />
    </div>
  )
}
