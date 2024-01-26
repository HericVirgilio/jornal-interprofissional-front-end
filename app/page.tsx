import Link from "next/link"
import Header from "@/src/header"
import Implementation from "@/src/Implementation"
export default function Home() {
  return (
    <main>
      <Header/>
      <Implementation/>
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