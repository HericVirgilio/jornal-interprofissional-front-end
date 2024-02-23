import Header from "@/src/header"
import Privacidade from "@/src/privacidade"
import Footer from "@/src/footer"
import Menu from "@/src/menu"

export default function Page() {
    return (
        <div>
            <Header />
            <main>
            <Privacidade />
            </main>
            <Footer />
            <Menu />
        </div>
    )

}