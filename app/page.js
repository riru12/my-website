import Introduction from "./components/introduction"
import AboutMe from "./components/about"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-4 py-20">
        <Introduction />
        <AboutMe />
      </div>
    </main>
  )
}