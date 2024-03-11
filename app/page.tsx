import Header from "@/src/header"
import Banner from "@/src/banner"
import Footer from "@/src/footer"
import Menu from "@/src/menu"
import LatestNews from "@/src/latestNews"

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <main>
      <LatestNews/>
      </main>
      <Footer/>
      <Menu/>
    </div>
  )
}