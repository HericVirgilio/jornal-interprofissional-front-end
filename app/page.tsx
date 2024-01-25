import Header from "@/src/header"
import Banner from "@/src/banner"
import Footer from "@/src/footer"
import Menu from "@/src/menu"


export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Footer/>
      <Menu/>
    </main>
  )
}
/*
      <Link href={"/noticias"}>
        <p>noticias</p>
      </Link>
      <Link href={"/edicoes"}>
        <p>edições</p>
      </Link>
      <Link href={"/sobre"}>
        <p>sobre</p>
      </Link>
      */