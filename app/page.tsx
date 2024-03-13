"use client"
import Header from "@/src/header"
import Banner from "@/src/banner"
import Footer from "@/src/footer"
import Menu from "@/src/menu"
import Breaking_news from "@/src/breaking_news"
import News from "@/src/news"

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <main>
      <News/>
      </main>
      <Footer/>
      <Menu/>
    </div>
  )
}