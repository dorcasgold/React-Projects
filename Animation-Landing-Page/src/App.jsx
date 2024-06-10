import { useEffect, useState } from "react"
import Background from './components/Background/Background'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  let heroData = [
    { text1: 'Dive into', text2: 'what you love' },
    { text1: 'Indulge', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passions' },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}

      />
    </div>
  )
}

export default App