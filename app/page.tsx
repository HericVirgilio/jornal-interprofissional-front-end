import Header from "@/src/header"
import Banner from "@/src/banner"
import Footer from "@/src/footer"
import Menu from "@/src/menu"
import Breaking_news from "@/src/breaking_news"

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <main>
      <Breaking_news/>
      </main>
      <Footer/>
      <Menu/>
    </div>
  )
}