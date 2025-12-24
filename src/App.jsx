import './App.css'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Services/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;
