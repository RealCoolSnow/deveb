import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { socials } from "../utils/constans";
import Header from "./Header/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroScroll from "./HeroScroll.js"
import { useAppContext } from "../contexts/appcontext.js";

import {
  useLocation,
  useHistory 
} from "react-router-dom";


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

  const [atTheTop, setAtTheTop] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);

  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
  
  const {pageTitle, ScrollYValue, isMobile} = useAppContext();

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
      // .to(overlayPath, {
      //     duration: 0.2,
      //     ease: 'sine.in',
      //     attr: { d: paths.step2.inBetween.curve1 }
      // })
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step2.unfilled },
      });
  };

  useEffect(() => {
    console.log('location changed: frame')
    if (!tl) {
      const overlayPath = document.querySelector(".overlay__path");
      createTimeLine(overlayPath);
    }

    if( !isMobile ) tl.play(0);
  }, [location]);
  

  useEffect(() => {

    const q = gsap.utils.selector(el);
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

  }, []);

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
  useEffect(()=>{
    
    const q = gsap.utils.selector(el);
    console.log(ScrollYValue);
    if(ScrollYValue ===10){
      gsap.to(q(".hero-scroll"), {
        y:  20 ,
        duration: 0.5,
        autoAlpha: 0,
      })

    }
    else if(ScrollYValue< 10){
      gsap.to(q(".hero-scroll"), {
        y:  0 ,
        duration: 0.5,
        autoAlpha: 1,
      })
    }
    console.log("run frame")
  },[ScrollYValue])

  return (
    <div className="frame-wrapper" ref={el}>
      <>

        {/* Top frame and toggle menu */}
        <Header />

        {/* <div className="frame f-right">

            <div className="slider-dots">

              {
                dots.map( (val) => <div key={val}
                  className={`dot dot-${val} ${ currentSection === val ? 'active' : ''}`}
                  onClick={ () => goToDotSection(val) }
                /> )
              }

            </div>

            <div className="copyright-small-txt">
              <h5>
                © {new Date().getFullYear()} Amir Mohseni. All rights reserved.
              </h5>
            </div>

            
            <Link
            to="/"
            className="fullLogo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="52.538" height="35" viewBox="0 0 52.538 35"><g transform="translate(-195.128 -24.023)"><path d="M3051.979,911.042v3.123h-13.934v-3.123Z" transform="translate(-2804.693 -878.71)" /><path d="M2797.822,869.176h-5.762l-.924,2.727H2787.2l5.586-15.439h4.355l5.585,15.439h-3.98Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2592.072 -832.44)" /><path d="M2918.249,856.464V871.9h-3.76v-9.259l-3.453,9.259H2908l-3.474-9.281V871.9h-3.761V856.464h4.442l4.333,10.689,4.289-10.689Z" transform="translate(-2688.325 -832.44)" /><path d="M2839.654,996.635h-5.762l-.924,2.727h-3.937l5.586-15.439h4.355l5.586,15.439h-3.981Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2627.56 -940.448)" /><path d="M2950.468,999.361l-3.211-5.828h-.9v5.828h-3.76V983.923h6.311a6.952,6.952,0,0,1,3.112.638,4.4,4.4,0,0,1,1.924,1.748,4.884,4.884,0,0,1,.638,2.474,4.592,4.592,0,0,1-.869,2.749,4.675,4.675,0,0,1-2.562,1.715l3.563,6.114Zm-4.112-8.489h2.331a2.133,2.133,0,0,0,1.551-.506,1.908,1.908,0,0,0,.517-1.43,1.849,1.849,0,0,0-.517-1.386,2.135,2.135,0,0,0-1.551-.506h-2.331Z" transform="translate(-2723.795 -940.448)" /><path d="M3033.942,986.556a7.075,7.075,0,0,1,2.761-2.793,8.011,8.011,0,0,1,4.014-1,7.681,7.681,0,0,1,4.706,1.451,6.973,6.973,0,0,1,2.617,3.959h-4.134a3.347,3.347,0,0,0-1.309-1.474,3.682,3.682,0,0,0-1.924-.506,3.592,3.592,0,0,0-2.815,1.21,5.388,5.388,0,0,0,0,6.466,3.591,3.591,0,0,0,2.815,1.21,3.678,3.678,0,0,0,1.924-.506,3.344,3.344,0,0,0,1.309-1.474h4.134a6.921,6.921,0,0,1-2.617,3.948,7.721,7.721,0,0,1-4.706,1.44,8.008,8.008,0,0,1-4.014-1,7.093,7.093,0,0,1-2.761-2.782,8.884,8.884,0,0,1,0-8.148Z" transform="translate(-2800.374 -939.463)" /></g></svg>    
            <svg   className="priLogo" xmlns="http://www.w3.org/2000/svg" width="30.296" height="34.998" viewBox="0 0 30.296 34.998"><g transform="translate(-3356.85 6195.275)"><path d="M3387.147-6186.531v12.306l-7.642-4.411v-3.482l-7.506-4.334-7.507,4.334v3.482l-7.642,4.411v-12.306l15.148-8.746Z" transform="translate(0 0.001)"/><path d="M3387.147-6169.041v8.764l-7.574-4.372-7.573,4.372-7.574-4.372-7.575,4.372v-8.764l3.6-2.081,4.038-2.333v.02L3372-6169.1l7.506-4.334v-.02l4.038,2.333Z" transform="translate(0 0)" /></g></svg>
          </Link>
        </div> */}

        {/* <div className="frame f-left">

          <div className="leftsvg" >
            {socials.map((link) => {
              const { id, icon, url, ariaLabel } = link;
              return (
                <li key={id}>
                  <a href={url} aria-label={ariaLabel}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </div>

        </div> */}

        <div className="frame f-bottom">
         {pageTitle === "AM-Arc" || pageTitle === "AM-Services" ? <HeroScroll /> : null}

        </div>
      </>
    </div>
  );
};

export default Frame;
