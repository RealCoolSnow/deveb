import React, { lazy, Suspense, useEffect } from 'react'
import Head from'../components/homeheader.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
import TestingCompo from '../components/testcompo.js';
// import ServHead from'../components/serviceshead'
// import MServHead from'../components/MServiceHead/MobileServiceHead'
// import Process from'../components/process.js'
// import Con from'../components/contact.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import { homeInt, homeExt } from '../utils/constans.js'
import useLoco from '../utils/useLoco.js';
import { useAppContext } from "../contexts/appcontext.js";
import i1 from "../assets/frame/1.jpg"
import i2 from "../assets/frame/2.jpg"
import i3 from "../assets/frame/3.jpg"
import i4 from "../assets/frame/4.jpg"
import i5 from "../assets/frame/5.jpg"
import i6 from "../assets/frame/6.jpg"
import i7 from "../assets/frame/7.jpg"
import i8 from "../assets/frame/8.jpg"
import i9 from "../assets/frame/9.jpg"
import i10 from "../assets/frame/10.jpg"
import i11 from "../assets/frame/11.jpg"
import i12 from "../assets/frame/12.jpg"
import i13 from "../assets/frame/13.jpg"
import i14 from "../assets/frame/14.jpg"
import i15 from "../assets/frame/15.jpg"
import i16 from "../assets/frame/16.jpg"
import i17 from "../assets/frame/17.jpg"
import i18 from "../assets/frame/18.jpg"
import i19 from "../assets/frame/19.jpg"
import i20 from "../assets/frame/20.jpg"
import i21 from "../assets/frame/21.jpg"
import i22 from "../assets/frame/22.jpg"
import i23 from "../assets/frame/23.jpg"
import i24 from "../assets/frame/24.jpg"
import i25 from "../assets/frame/25.jpg"
import i26 from "../assets/frame/26.jpg"
import i27 from "../assets/frame/27.jpg"
import i28 from "../assets/frame/28.jpg"
import i29 from "../assets/frame/29.jpg"
import i30 from "../assets/frame/30.jpg"
import i31 from "../assets/frame/31.jpg"
import i32 from "../assets/frame/32.jpg"
import i33 from "../assets/frame/33.jpg"
import i34 from "../assets/frame/34.jpg"
import i35 from "../assets/frame/35.jpg"
import i36 from "../assets/frame/36.jpg"
import i37 from "../assets/frame/37.jpg"
import i38 from "../assets/frame/38.jpg"
import i39 from "../assets/frame/39.jpg"
import i40 from "../assets/frame/40.jpg"
import i41 from "../assets/frame/41.jpg"
import i42 from "../assets/frame/42.jpg"
import i43 from "../assets/frame/43.jpg"
import i44 from "../assets/frame/44.jpg"
import i45 from "../assets/frame/45.jpg"
import i46 from "../assets/frame/46.jpg"
import i47 from "../assets/frame/47.jpg"
import i48 from "../assets/frame/48.jpg"
import i49 from "../assets/frame/49.jpg"
import i50 from "../assets/frame/50.jpg"
import i51 from "../assets/frame/51.jpg"
import i52 from "../assets/frame/52.jpg"
import i53 from "../assets/frame/53.jpg"
import i54 from "../assets/frame/54.jpg"
import i55 from "../assets/frame/55.jpg"
import i56 from "../assets/frame/56.jpg"
import i57 from "../assets/frame/57.jpg"
import i58 from "../assets/frame/58.jpg"
import i59 from "../assets/frame/59.jpg"
import i60 from "../assets/frame/60.jpg"
import i61 from "../assets/frame/61.jpg"

import d1 from "../assets/frame/design/1.jpg"
import d2 from "../assets/frame/design/2.jpg"
import d3 from "../assets/frame/design/3.jpg"
import d4 from "../assets/frame/design/4.jpg"
import d5 from "../assets/frame/design/5.jpg"
import d6 from "../assets/frame/design/6.jpg"
import d7 from "../assets/frame/design/7.jpg"
import d8 from "../assets/frame/design/8.jpg"
import d9 from "../assets/frame/design/9.jpg"
import d10 from "../assets/frame/design/10.jpg"
import d11 from "../assets/frame/design/11.jpg"
import d12 from "../assets/frame/design/12.jpg"
import d13 from "../assets/frame/design/13.jpg"
import d14 from "../assets/frame/design/14.jpg"
import d15 from "../assets/frame/design/15.jpg"
import d16 from "../assets/frame/design/16.jpg"
import d17 from "../assets/frame/design/17.jpg"
import d18 from "../assets/frame/design/18.jpg"
import d19 from "../assets/frame/design/19.jpg"
import d20 from "../assets/frame/design/20.jpg"
import d21 from "../assets/frame/design/21.jpg"
import d22 from "../assets/frame/design/22.jpg"
import d23 from "../assets/frame/design/23.jpg"
import d24 from "../assets/frame/design/24.jpg"
import d25 from "../assets/frame/design/25.jpg"
import d26 from "../assets/frame/design/26.jpg"
import d27 from "../assets/frame/design/27.jpg"
import d28 from "../assets/frame/design/28.jpg"
import d29 from "../assets/frame/design/29.jpg"
import d30 from "../assets/frame/design/30.jpg"
import d31 from "../assets/frame/design/31.jpg"
import d32 from "../assets/frame/design/32.jpg"
import d33 from "../assets/frame/design/33.jpg"
import d34 from "../assets/frame/design/34.jpg"
import d35 from "../assets/frame/design/35.jpg"
import d36 from "../assets/frame/design/36.jpg"
import d37 from "../assets/frame/design/37.jpg"
import d38 from "../assets/frame/design/38.jpg"
import d39 from "../assets/frame/design/39.jpg"
import d40 from "../assets/frame/design/40.jpg"
import d41 from "../assets/frame/design/41.jpg"
import d42 from "../assets/frame/design/42.jpg"
import d43 from "../assets/frame/design/43.jpg"
import d44 from "../assets/frame/design/44.jpg"
import d45 from "../assets/frame/design/45.jpg"
import d46 from "../assets/frame/design/46.jpg"
import d47 from "../assets/frame/design/47.jpg"
import d48 from "../assets/frame/design/48.jpg"
import d49 from "../assets/frame/design/49.jpg"
import d50 from "../assets/frame/design/50.jpg"
import d51 from "../assets/frame/design/51.jpg"
import d52 from "../assets/frame/design/52.jpg"
import d53 from "../assets/frame/design/53.jpg"
import d54 from "../assets/frame/design/54.jpg"
import d55 from "../assets/frame/design/55.jpg"
import d56 from "../assets/frame/design/56.jpg"
import d57 from "../assets/frame/design/57.jpg"
import d58 from "../assets/frame/design/58.jpg"
import d59 from "../assets/frame/design/59.jpg"
import d60 from "../assets/frame/design/60.jpg"
import d61 from "../assets/frame/design/61.jpg"

 const iArray= [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10, i11,i12,i13,i14,i15,i16,i17, i18,i19,i20,i21,i22,i23,i24,i25,i26,i27, i28,i29,i30, i31,i32,i33,i34,i35,i36,i37, i38,i39,i40, i41,i42,i43,i44,i45,i46,i47, i48,i49,i50, i51,i52,i53,i54,i55,i56,i57, i58,i59,i60, i61]
 const rArray= [i61,i60,i59,i58,i57,i56,i55,i54,i53,i52,i51,i50,i49,i48,i47,i46,i45,i44,i43,i42,i41,i40,i39,i38,i37,i36,i35,i34,i33,i32,i31,i30,i29, i28,i27,i26,i25,i24,i23, i22,i21,i20,i19,i18, i17,i16,i15,i14,i13,i12,i11,i10,i9,i8,i7,i6,i5,i4,i3,i2,i1]
 const dArray=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10, d11,d12,d13,d14,d15,d16,d17, d18,d19,d20,d21,d22,d23,d24,d25,d26,d27, d28,d29,d30, d31,d32,d33,d34,d35,d36,d37, d38,d39,d40, d41,d42,d43,d44,d45,d46,d47, d48,d49,d50, d51,d52,d53,d54,d55,d56,d57, d58,d59,d60, d61]
 

const ServHead = lazy( () => import('../components/serviceshead'))
const MServHead = lazy( () => import('../components/MServiceHead/MobileServiceHead'))
const Process = lazy( () => import('../components/process.js'))
const Footer = lazy( () => import('../components/footer.js'))
const Showcase = lazy( () => import('../components/showcase.js'))

// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const { isMobile, pageTitle, changePT } = useAppContext();
  useLoco(true)
  useEffect(() => {
    
    changePT("AM-Arc");
    document.title = "AM-Arc";
  //   return()=>{
  //     if (ScrollTrigger.getById("showcaseGradient")) {
  //        ScrollTrigger.getById("showcaseGradient").kill();
  //      }
  //    if (ScrollTrigger.getById("backBlackGrad")) {
  //        ScrollTrigger.
  //        getById("backBlackGrad").kill();
  //    }
  //    if (ScrollTrigger.getById("pinSc")) {
  //        ScrollTrigger.
  //        getById("pinSc").kill();
  //    }
  //  }
  return ()=>{
    ScrollTrigger.update();
   
    // fadeScroll.kill();
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill();
    });
      //  window.scrollTo({
      //   top: 0,
      //   // behavior: 'smooth'
      // })
    
  }
  }, [])

  return( 
   
    <main id="viewport" data-scroll-container >

      <Head />

      <Suspense fallback={ <Loading/> }>
        {
          isMobile ?
            <MServHead txt="Design" />
          :
            <ServHead num="01" text="Design" array={dArray}/>
        }
        <Showcase showcasedata={homeInt} dataHeight="200vh"/>
        {
          isMobile ?
            <MServHead txt="Visualization" />
          :
            <ServHead num="02" text="Visualization" array={rArray}/>
        }

        <Showcase  showcasedata={homeExt} dataHeight="300vh"/>


        
        <Process/>
        <Footer />
        {/* <TestingCompo/> */}

      </Suspense>




    </main>
  )
}

export default HomePage
