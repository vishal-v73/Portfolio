import About from "./Components/About/About"
import Experience from "./Components/Experinece/Experience"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
