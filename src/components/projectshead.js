import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "./SecondaryBtn/SecondaryBtn";
// import Button from "./button.js";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useAppContext } from "../contexts/appcontext.js";

const ProHead = ({ Cat, catFunction }) => {
  const { isMobile } = useAppContext();

  const [activeTag, setActiveTag] = useState('');

  const [btnhover, setbtnHover] = useState(false);
  const el = useRef();
  const myTl = useRef();
  const prjTl = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const heading = q("h1");
    const lines = q(".fil-contain .lines");

    gsap.set([heading, lines], {
      yPercent: 60,
      autoAlpha: 0,
    });
    return () => {
    };
  }, [isMobile])

  useEffect(() => {
    const heading = q("h1");
    const lines = q(".fil-contain .lines");

   
    prjTl.current = gsap.timeline();

    prjTl.current.to([heading, lines[0], lines[1]], {
      yPercent: 0,
      // onComplete:()=>ScrollTrigger.refresh(true),
      duration: 0.6,
      stagger: {
        amount: 0.28,
        ease: "power2.Out",
      },
    }, .4)

    .to([heading, lines[0], lines[1]], {
      autoAlpha: 1,
      duration: 1.2,
      // onComplete:()=>ScrollTrigger.refresh(true),
      stagger: {
        amount: 0.3,
        ease: "power2.Out",
      },
    }, .4);

     myTl.current = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        start: () => "top top",
        end: () => "65% top",
        id:"head",
        scrub:true,
        markers:true,
        ease:"none",
        // onEnter: ()=> gsap.to(q(".lines .btn-container button"), {pointerEvents: "none"}),
        // onLeaveBack:  ()=> gsap.to([heading, lines], {autoAlpha: 1, duration: 1.5})
      },
    })

    .fromTo(q(".darklayer"), {autoAlpha:0 },{ autoAlpha: 1  });

    // ScrollTrigger.update();
    console.log("prj head")
    return () => {
      myTl.current.kill();
      if(myTl.current.ScrollTrigger){
        myTl.current.ScrollTrigger.kill();
      }
      prjTl.current.kill();
      if( prjTl.current.ScrollTrigger){
        prjTl.current.ScrollTrigger.kill()
      }

    };
  }, [isMobile]);

  const tags = ['Projects','Interior','Exterior','Animation','3D Rendering', 'Concept', 'Virtual tour', '3D Model']
  const mTags = ['Projects','Interior','Exterior', 'Concept', 'Animation','Rendering', 'Virtual tour', '3D Model']

  const mapButtons = (txt) => (
 
    <Button
      key={txt}
      txt={txt}
      isActive={ activeTag === txt }
      trigger={ () => changeActiveTag(txt) }
    />  
  )

  const changeActiveTag = (name) => {
    if( activeTag !== name ) {
      setActiveTag(name)
      catFunction(name)
    }
  }

  return (
    <section className="pro-sec"   id="stickbb" ref={el}>
    
      <main data-scroll data-scroll-sticky data-scroll-target="#stickbb">
      <div className="darklayer"></div>
        <h1>Take a look at some of our</h1>

        <div className="fil-contain">

          <div className="little-fade left-fade"></div>

          <div className="lines">

            {
              !isMobile ? 
                tags.slice(0,3).map( mapButtons )
              :
                mTags.slice(0,4).map( mapButtons )
            }

            <div className="extra-space"></div>

          </div>

          <div className="lines">

            {
              !isMobile ? 
                tags.slice(3).map( mapButtons )
              :
                mTags.slice(4).map( mapButtons )
            }

            <div className="extra-space"></div>

          </div>

          <div className="little-fade right-fade"></div>

        </div>
      </main>
    </section>
  );
};
export default ProHead;
