import Header from "@/src/header"
import Footer from "@/src/footer"
import Menu from "@/src/menu"
import Implementation from "@/src/Implementation"


export default function Page() {
  return (
    <main>
      <Header/>
      <Implementation/>
        <div>
          <h1>Notícias</h1>
        </div>
      <Footer/>
      <Menu/>
    </main>
  )
}
