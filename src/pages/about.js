import React, { useEffect, lazy, Suspense, useRef } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../about.scss'
// import AbHead from '../components/abouthead.js'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco';
// const AbHead = lazy( () => import('../components/abouthead.js'))
const About = lazy( () => import('../components/about.js'))
const Footer = lazy( () => import('../components/footer.js'))



// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger);
const AboutPage = () => {
  const { isMobile, pageTitle, changePT } = useAppContext();
  const view= useRef();
  useLoco(true);
  
  useEffect(() => {
    changePT("About");
       document.title = "About us";
    window.history.scrollRestoration = 'manual'
    // gsap.to(document.body, {
    //   height: "100vh",
    //   overflow: "hidden",
    // })
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill();
    });
  }, [])

  return (
    <main ref={view} id="viewport" data-scroll-container>

      <Suspense fallback={ <Loading/> } >
        {/* <AbHead/> */}
        <About/>
        <Footer/>
      </Suspense>

    </main>
  )
}

export default AboutPage
