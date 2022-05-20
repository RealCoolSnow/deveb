import React, { useEffect, useRef,useLayoutEffect } from "react";
import { useAppContext } from "../contexts/appcontext.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const FaqHead = () => {

  const { isMobile } = useAppContext();

  const el = useRef();
  const myTl = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(()=> {
    if( !isMobile ) {
    const q = gsap.utils.selector(el);
    const heading = q(".fHead h3");
    const lines = q(".fHead p .lines");
    gsap.set(heading, {
      yPercent: 60,
      autoAlpha: 0,
    })
    gsap.set( lines, {
      yPercent: 180,
      autoAlpha: 0,
    })}
    return ()=>{
      
    }
  },[isMobile])
  
  // Animations if not mobile
  useEffect(() => {
    
    ScrollTrigger.refresh()
    if( isMobile ) return

    const q = gsap.utils.selector(el);
  
    // const headingWrapper = q(".fHead");
    const heading = q(".fHead h3");
    const lines = q(".fHead p .lines");

    // if( window.scrollY < 100 ) {
      
     
  
      const fromUp = gsap.to([heading,lines], {
        yPercent: 0,
       delay: 0.4,
       duration: 0.6,
      //  onComplete:()=>ScrollTrigger.refresh(),
        stagger: {
          amount: 0.10,
          ease: "power2.Out",
        },
      });
  
      const fadeIn = gsap.to([heading,lines], {
        autoAlpha: 1,
        duration: 1.2,
        delay: 0.4,
        // onComplete:()=>ScrollTrigger.refresh(),
        stagger: {
          amount: 0.1,
          ease: "power2.Out",
        },
      });
  
      // gsap.to(lines, {
      //   yPercent: 0,
      //   delay: 0.5,
      //   duration: 0.4,
      //   stagger: {
      //     amount: 0.10,
      //     ease: "power2.Out",
      //   },
      // });
  
      // gsap.to(lines, {
      //   autoAlpha: 1,
      //   duration: 1.2,
      //   delay: 0.5,
      //   stagger: {
      //     amount: 0.1,
      //     ease: "power2.Out",
      //   },
      // });
    // }

     myTl.current = gsap.timeline({
      // onComplete: ()=> ScrollTrigger.refresh(),

      scrollTrigger: {
        scroller: "#viewport",
        start: () => "top top",
        end: () => "center top+=10%",
        scrub: 0.25,
        invalidateOnRefresh: true,
        // markers:true,
        // fastScrollEnd: true
      },
    })

    .to(q(".darkLayer"), { autoAlpha: 1,});

    ScrollTrigger.update();

    return () => {
      myTl.current.kill();
      if ( myTl.current.ScrollTrigger){
        myTl.current.ScrollTrigger.kill();
      }
      fromUp.kill();
      fadeIn.kill();
    }
  }, [isMobile])

  const mbText =
    "Most common questions about CGI, our studio and the process. <span>Scroll</span> and<span> tap </span>on the question to find the answer.";
  const dsText =
    "<div class='lines'>Most common questions about CGI, our studio and the process in general.</div> <div class='lines'><span>Scroll</span> and<span> click </span>on the section and find the answer.</div>";

  return (
    <section className="fHead" ref={el}>
      <div className="fHead" data-scroll data-scroll-sticky data-scroll-target="#viewport">
        <div className="darkLayer"></div>
        <h3>Questions {isMobile ? "and" : "&"} answers</h3>
        <p >
        <div class='lines'>Most common questions about CGI, our studio and the process in general.</div> <div class='lines'><span>Scroll</span> and<span> click </span>on the section and find the answer.</div>
        </p>
        
      </div>
    </section>
  );
};
export default FaqHead;
