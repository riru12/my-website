import Introduction from "./components/introduction"
import AboutMe from "./components/about"
import ParticleBackground from "./components/particlesbg"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ParticleBackground />
      <div className="container mt-0 sm:mt-24 mx-auto px-4 py-20">
        <Introduction />
        <AboutMe />
      </div>
    </main>
  )
}