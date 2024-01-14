import Link from "next/link"
export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href={"/noticias"}>
        <p>noticias</p>
      </Link>
      <Link href={"/edicoes"}>
        <p>edições</p>
      </Link>
      <Link href={"/sobre"}>
        <p>sobre</p>
      </Link>
    </main>
  )
}
