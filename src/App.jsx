import './App.css'

import { Suspense, lazy } from "react";
import useInView from "./hooks/useInView";

/* lazy imports */
const Nav  =lazy(()=> import ('./Components/Nav/Nav.jsx'));
const Header  = lazy(()=> import('./Components/Header/Header.jsx'));
const About = lazy(() => import("./Components/About/About"));
const Projects = lazy(()=> import('./Components/Projects/Projects.jsx'));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const Services = lazy(() => import('./Components/Services/Services.jsx'));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(()=> import ("./Components/Footer/Footer.jsx"));




 
function App() {
  const [aboutRef, showAbout] = useInView();
  const [expRef, showExp] = useInView();
  const [contactRef, showContact] = useInView();
const [headerRef, showHeader] = useInView();
const [navRef, showNav]= useInView();
const [projectRef,showProjects]=useInView();
const[seviceRef,showServices]=useInView();
const[footerRef,showFooter]= useInView();

  return (
    <>
    <div ref={navRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading Nav...</div>}>
            <Nav />
          </Suspense>
        )}
      </div>
    <div ref={headerRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading Header...</div>}>
            <Header/>
          </Suspense>
        )}
      </div>
      <div ref={aboutRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        )}
      </div>
      <div ref={seviceRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading Services...</div>}>
            <Services />
          </Suspense>
        )}
      </div>

      <div ref={projectRef}>
        {showExp && (
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
        )}
      </div>
      <div ref={expRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading Experience...</div>}>
            <Experience />
          </Suspense>
        )}
      </div>

      <div ref={contactRef}>
        {showContact && (
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        )}
      </div>
      <div ref={footerRef}>
        {showAbout && (
          <Suspense fallback={<div>Loading Fo0ter...</div>}>
            <Footer />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;



// function App() {
//   return (
//     <>
//     <Nav/>
//     <Header/>
//     <About/>
//     <Services/>
//     <Projects/>
//     <Experience/>
//     <Contact/>
//     <Footer/>
//     </>
//   )
// }
// export default App;
