import Introduction from "./components/introduction"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-20">
        <Introduction />
      </div>
    </main>
  )
}