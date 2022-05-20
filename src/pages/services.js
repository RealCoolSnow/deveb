import gsap from 'gsap/all'
import React, { lazy, Suspense, useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import Con from'../components/contact.js'
// import Serv from'../components/serv.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import {servData} from '../utils/constans.js'
import TestingCompo from '../components/testcompo.js'
import { useAppContext } from "../contexts/appcontext.js";

const Serv = lazy( () => import('../components/serv.js'))
const ShowcaseServ = lazy( () => import('../components/serShc.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))


// const Loading = lazy( () => import('./Loading.js'))

gsap.registerPlugin(ScrollTrigger)


const ServicesPage = () => {
  const { isMobile, pageTitle, changePT } = useAppContext();
  useLoco(true)
  
  useEffect(() => {
    
    changePT("AM-Services");
   document.title = "AM-Services";
    // console.log(ScrollTrigger.getAll())
    ScrollTrigger.update()
    ScrollTrigger.refresh();
    return ()=>{
      // ScrollTrigger.update()
      // ScrollTrigger.refresh(true);
      ScrollTrigger.getAll().forEach((instance) => {
        console.log(instance, "killing")
        instance.kill();
      });
    }
  }, [])
  return (
    <main id="viewport" data-scroll-container>
      <Suspense fallback={ <Loading/> }>
        <Serv/>
        <ShowcaseServ showcasedata={servData} dataHeight='100vh'/>
        {/* <Con conn={true}/> */}
<Footer/>
        {/* <TestingCompo/> */}
      </Suspense>
    </main>
  )
}

export default ServicesPage;
