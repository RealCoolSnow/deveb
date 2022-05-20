import React, { lazy, Suspense, useEffect } from 'react'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
// import Con from'../components/contact.js'
import gsap from 'gsap'
import useLoco from '../utils/useLoco.js'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
const Con = lazy( () => import('../components/contact.js'))


// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger)
const ContactPage = () => {
  const { isMobile, pageTitle, changePT } = useAppContext();
  useLoco(true);
  useEffect(()=>{
    changePT("Contact");
       document.title = "Contact us";
   return ()=>{
    ScrollTrigger.update();
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill();
    });
   } 
  },[])
  return (
  <div id="viewport" data-scroll-container >
    <div className="contact-page" id="fixed-target" >
      <div className="backLayer" data-scroll data-scroll-sticky data-scroll-target="#fixed-target"></div>
      
      <Suspense fallback={<Loading/> } >
        <Con conn={false}/>
      </Suspense>

    </div>
    </div>
  )
}

export default ContactPage
