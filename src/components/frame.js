import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Header from "./Header/Header";
import gsap from "gsap";
import { useAppContext } from "../contexts/appcontext.js";
// import ScrollTrigger from "gsap/ScrollTrigger";

import { useLocation } from "react-router-dom";

const paths = {
  step1: {
    unfilled: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
    inBetween: {
      curve1: "M 0 100 V 50 Q 50 100 100 50 V 100 z",
      curve2: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
    },
    filled: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
  },
  step2: {
    filled: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
    inBetween: {
      curve2: "M 0 0 V 50 Q 50 0 100 50 V 0 z",
      curve1: "M 0 0 V 50 Q 50 100 100 50 V 0 z",
    },
    unfilled: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
  },
};

let tl;

const Frame = () => {

  const [lastLocation,setLastLocation] = useState('')

  // const el = useRef();
  
  const { isMobile, isMenuOpen} = useAppContext();

  const location = useLocation()

  const createTimeLine = (overlayPath) => {
    tl = gsap.timeline({
        paused: true
      })
      .set(overlayPath, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPath,
        {
          duration: 0.3,
          ease: "power4.in",
          attr: { d: paths.step1.inBetween.curve2 },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.1,
        ease: "power1",
        attr: { d: paths.step1.filled },
      })

      .set(overlayPath, {
        attr: { d: paths.step2.filled },
      })
    
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step2.unfilled },
      });
  };

  useEffect(() => {
    
    if (!tl) {
      const overlayPath = document.querySelector(".overlay__path");
      createTimeLine(overlayPath);
    }

    if( !isMenuOpen ) {

      if( !lastLocation ) {
        setLastLocation(location.pathname)
        tl.play(0);
      } else if ( location.pathname !== lastLocation ) {
        setLastLocation(location.pathname)
        tl.play(0);
      }
    }

  }, [location]);
  

  // useEffect(() => {

    // const q = gsap.utils.selector(el);
    // const scrollFromTop = window.scrollY
    // const logos = q(".frame.f-right svgs");
  
    // console.log(logos)

    // const pageHeight = document.getElementById("root").offsetHeight
    // const scrolledPart = (scrollFromTop / pageHeight) * 100
    // determinScrolledPart(scrolledPart)

    // if( ScrollYValue > 0 ) {
    //   if( atTheTop ) setAtTheTop(false)
    // } else {
    //   if( !atTheTop ) setAtTheTop(true)
    // }


    // return ()=>{
    //   // navTrigger.ScrollTrigger.kill();
    //   // fadeScroll.kill();
    //   console.log("firing framejs 1")
    // }

  // }, []);

  // const determinScrolledPart = () => {

  //   const scrollFromTop = window.scrollY
  //   const pageHeight = document.getElementById("root").offsetHeight - window.innerHeight
  //   const scrolledPart = (scrollFromTop / pageHeight) * 100

  //   if( scrolledPart < 33 ) {
  //     if( currentSection !== 1 ) setCurrentSection(1)
  //   }
  //   else if( scrolledPart <= 66 ) {
  //     if( currentSection !== 2 ) setCurrentSection(2)
  //   }
  //   else if( scrolledPart > 66 ) {
  //     if( currentSection !== 3 ) setCurrentSection(3)
  //   }
  // }

  // const goToDotSection = (idx) => {

  //   const pageHeight = document.getElementById("root").offsetHeight - window.innerHeight

  //   const ScrollToPart = idx === 1 ? 0 : ( idx === 3 ? pageHeight : pageHeight / 2 ) 

  //   window.scroll({
  //     top: ScrollToPart, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //    });
  //   setCurrentSection(idx)
  // }

  // const dots = [
  //   1,
  //   2,
  //   3
  // ]
  // useEffect(()=>{
    
  //   const q = gsap.utils.selector(el);
  //   // console.log(ScrollYValue);
  //   if(ScrollYValue ===10){
  //     gsap.to(q(".hero-scroll"), {
  //       y:  20 ,
  //       duration: 0.5,
  //       autoAlpha: 0,
  //     })

  //   }
  //   else if(ScrollYValue< 10){
  //     gsap.to(q(".hero-scroll"), {
  //       y:  0 ,
  //       duration: 0.5,
  //       autoAlpha: 1,
  //     })
  //   }
  //   // console.log("run frame")
  // },[ScrollYValue])

  return (
    <div className="frame-wrapper" >
      <>

        {/* Top frame and toggle menu */}
        <Header />
    
      </>
    </div>
  );
};

export default Frame;
