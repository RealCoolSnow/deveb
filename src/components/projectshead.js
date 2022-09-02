import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "./SecondaryBtn/SecondaryBtn";
// import Button from "./button.js";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useAppContext } from "../contexts/appcontext.js";

const ProHead = () => {
  const { isMobile,} = useAppContext();
  const el = useRef();
  const prjTl = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const heading = q("#stickbb h1 div");

    gsap.set([heading], {
      yPercent: 60,
      autoAlpha: 0,
    });
    return () => {
    };
  }, [isMobile])
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(()=>{
    const heading = q("h1 div");
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

    

  return (
    <section className="pro-sec"   id="stickbb" ref={el}>
    
      <main data-scroll data-scroll-sticky data-scroll-target="#stickbb">
      <div className="darklayer"></div>
      {
        isMobile? width> 500? ( <h1><div>Take a look at</div> <div>some of our projects</div> </h1>)
        :
       ( <h1><div>Take a look at</div> <div>some of our</div> <div>projects</div> </h1>)
        :
       ( <h1><div>Take a look at</div> <div>some of our projects</div> </h1>)

      }
        
      </main>
    </section>
  );
};
export default ProHead;