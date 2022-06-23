import React, { lazy, Suspense, useEffect, useRef } from 'react'

import gsap from 'gsap'
import useLoco from '../utils/useLoco.js'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "../components/footer.scss";
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import Helmet from 'react-helmet';
const Con = lazy( () => import('../components/contact.js'))

// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger)
const ContactPage = () => {
  const ref= useRef();
  const { isMobile, pageTitle, setReset, changePT, resetLoco} = useAppContext();
  useLoco(!isMobile);

  useEffect(()=>{
       setTimeout(() => {
         setReset()
       }, 500);

       changePT("contact")
   return ()=>{
    // ScrollTrigger.update();
    // ScrollTrigger.getAll().forEach((instance) => {
    //   instance.kill();
    // });
   } 
  },[])
  useEffect(()=>{
    if(isMobile){
      ref.current.style.transform="none";
    }
  },[ isMobile])
  return (
  <div ref={ref} id="viewport" data-scroll-container >

      <Helmet>
        <title>Deveb | Get in touch</title>
        <meta name="description" content="Feel free to get in touch with us. We will be happy to talk with you about your project." />
      </Helmet>
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
