import { Banner } from '../components/banner'
import { Demo } from '../components/demo'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Nav } from '../components/nav'
import { Video } from '../components/video'

export default function Home() {
  return (
    <div className={`font-alt `}>
      <Header />
      <Banner />
      <Nav />

      <Video />

      <Demo />

      <Footer />
    </div>
  )
}
