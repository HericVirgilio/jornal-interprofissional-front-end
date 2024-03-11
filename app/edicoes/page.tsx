"use client"
import Header from "@/src/header"
import Editions from "@/src/editions"
import Footer from "@/src/footer"
import Menu from "@/src/menu"


export default function Page() {
  return (
    <div>
      <Header />
      <main>
      <Editions />
      </main>
      <Footer />
      <Menu />
    </div>
  )
}