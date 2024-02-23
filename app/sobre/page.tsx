import Header from "@/src/header";
import Footer from "@/src/footer";
import Sobre from "@/src/sobre";
import Menu from "@/src/menu";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
      <Sobre />
      </main>
      <Footer />
      <Menu />
    </div>
  )
}
