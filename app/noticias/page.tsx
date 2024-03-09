"use client"
import Header from "@/src/header"
import News from "@/src/news"
import Footer from "@/src/footer"
import Menu from "@/src/menu"



export default function Page() {
  return (
    <div>
      <Header />
      <main>
      <News />
      </main>
      <Footer />
      <Menu />
    </div>
  )
}
