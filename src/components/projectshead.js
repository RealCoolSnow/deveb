import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "./SecondaryBtn/SecondaryBtn";
// import Button from "./button.js";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useAppContext } from "../contexts/appcontext.js";

const ProHead = ({ Cat, catFunction }) => {
  const { isMobile, setReset, resetLoco} = useAppContext();

  const [activeTag, setActiveTag] = useState("");

  const [btnhover, setbtnHover] = useState(false);
  const el = useRef();
  const myTl = useRef();
  const prjTl = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  const darklay2 = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background: "black",
    zIndex: 100,
    opacity:0,
  }
  useLayoutEffect(() => {
    const heading = q("#stickbb h1 div");
    // const lines = q(".fil-contain .lines");

    gsap.set([heading], {
      yPercent: 60,
      autoAlpha: 0,
    });
    return () => {
    };
  }, [isMobile])
  useEffect(()=>{
    const heading = q("h1 div");
    const lines = q(".fil-contain .lines");
    prjTl.current = gsap.timeline();
    prjTl.current.to([heading], {
      yPercent: 0,
      duration: 0.6,
      stagger: {
        amount: 0.28,
        ease: "power2.Out",
      },
    }, .4)

    .to([heading], {
      autoAlpha: 1,
      duration: 1.2,
      stagger: {
        amount: 0.3,
        ease: "power2.Out",
      },
    }, .4);
  },[isMobile])

useEffect(()=>{
  // const myHash = document.location.hash.slice(1);
  if(isMobile ){
  
   
  }
  else {
  
  }
 
},[isMobile])

  const tags = ['Projects','Interior','Exterior','Animation','3D Rendering', 'Concept', 'Virtual tour', '3D Model']
  const mTags = ['Projects','Interior','Exterior', 'Concept', 'Animation','Rendering', 'Virtual tour', '3D Model']

  const mapButtons = (txt) => (
 
    <Button
      key={txt}
      txt={txt}
      isActive={ activeTag === txt }
      // trigger={ () => changeActiveTag(txt) }
    />  
  )

   
    

  return (
    <section className="pro-sec"   id="stickbb" ref={el}>
    
      <main data-scroll data-scroll-sticky data-scroll-target="#stickbb">
        {/* <div className="darklay2" style={darklay2}></div> */}
      <div className="darklayer"></div>
        <h1><div>Take a look at</div> <div>some of our projects</div> </h1>

        <div className="fil-contain">

          <div className="little-fade left-fade"></div>

          {/* <div className="lines">
            line1

            <div className="extra-space"></div>

          </div>

          <div className="lines">

           line2

            <div className="extra-space"></div>

          </div> */}

          <div className="little-fade right-fade"></div>

        </div>
      </main>
    </section>
  );
};
export default ProHead;
