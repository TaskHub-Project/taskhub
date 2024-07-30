
import Navbar from "../../components/navbar"
import About from "./components/about"
import Hero from "./components/hero"
import PopularProject from "./components/popularproject"
import Services from "./components/services"
import Works from "./components/works"

const LandingPage = () => {
  return (
    <div>

      <Hero />
      <About />
      <Services />
      <PopularProject />
      
      <Works />

    </div>
  )
}

export default LandingPage
