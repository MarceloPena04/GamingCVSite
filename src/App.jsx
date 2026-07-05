import Hero from './components/Hero.jsx'
import GameSection from './components/GameSection.jsx'
import Footer from './components/Footer.jsx'
import Backdrop from './components/Backdrop.jsx'
import { games } from './data/games.js'

export default function App() {
  return (
    <div className="scanlines">
      <Backdrop />
      <Hero />
      <main>
        {games.map((game, i) => (
          <GameSection key={game.id} game={game} index={i} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
