import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
    </>
  )
}