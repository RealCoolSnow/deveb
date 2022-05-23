import React, { lazy, Suspense, useEffect } from 'react'

import gsap from 'gsap'
import useLoco from '../utils/useLoco.js'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "../components/footer.scss";
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
const Con = lazy( () => import('../components/contact.js'))

// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger)
const ContactPage = () => {
  const { isMobile, pageTitle, changePT, setReset } = useAppContext();
  useLoco(!isMobile);
  useEffect(()=>{
    changePT("Contact");
       document.title = "Get in touch";
       setTimeout(() => {
         setReset()
       }, 500);
   return ()=>{
    // ScrollTrigger.update();
    // ScrollTrigger.getAll().forEach((instance) => {
    //   instance.kill();
    // });
   } 
  },[])
  return (
  <div id="viewport" data-scroll-container >
    <div className="contact-page" id="fixed-target" >
      {/* <div className="backLayer" data-scroll data-scroll-sticky data-scroll-target="#fixed-target"></div> */}
      
      <Suspense fallback={<Loading/> } >
        <Con conn={false}/>
     
      </Suspense>

    </div>
    </div>
  )
}

export default ContactPage
