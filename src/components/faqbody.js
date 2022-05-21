import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Dropdown from "./dropdown.js";
import { gsap } from "gsap";
import { useAppContext } from "../contexts/appcontext.js";
import ScrollTrigger from "gsap/ScrollTrigger";

const QuesBody = ({ fdata, isFade, fadeFirst, foot,  }) => {

  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();

  
  const [activeFaq,setActiveFaq] = useState('')
  
  const { isMobile, setReset,setfaqp } = useAppContext();
  const q = gsap.utils.selector(el);
  // useLayoutEffect(() => {
  //   if ( fadeFirst ) {

  //     const wrapper = q('.faq-grid')

  //     gsap.set( wrapper, {
  //       autoAlpha: 0,
  //       yPercent:40,
  //     })
  //   }
  
  //   return () => {
  //   };
  // }, [])

  // useEffect(() => {
    
    // if( isFade ) {

    //   const fade = q('div.m-faq-fade')

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: el.current,
    //       start: 'top center+=15%',
    //       id: "s2",
    //       end: 'top top'
    //     }
    //   })

    //   tl.to(fade, {
    //     alpha: 0,
    //     duration: 0.3
    //   })

    // } 
    //  if ( fadeFirst ) {

      // const wrapper = q('.faq-grid')

      // gsap.set( wrapper, {
      //   autoAlpha: 0,
      //   yPercent:40,
      // })
      // gsap.to(wrapper, {
      //   yPercent: 0,
      //   autoAlpha: 1,
      //   delay: 0.55,
      //   duration: 1,
      //   stagger: 0.04,
      //   ease: "power2.out",
      // })
      // const myTl = gsap.timeline({
      //   scrollTrigger: {
      //     scroller: "#viewport",
      //     id:"faqbody",
      //   },
      // });

      // myTl.to(wrapper, {
      //   autoAlpha: 1,
        
      // })
  //   }
  //   return () => {
  //     if(ScrollTrigger.getById("s2")){
  //       ScrollTrigger.getById("s2").kill()
  //   }
  //   }
  // }, [isFade])

  const changeActiveFaq = (newFaq) => {
    if( activeFaq !== newFaq ) {
      setActiveFaq(newFaq)
    // setReset()
    }
    else setActiveFaq('')
    setfaqp({act: true, pd:0,})
  }

  const status = (id) => {

    if( !activeFaq.length ) {
      return undefined
    } else {
      return activeFaq === id
    }
  }

  const hideMbFade = () => {

    const q = gsap.utils.selector(el);

    const fade = q('div.m-faq-fade')

    gsap.to(fade, {
      alpha: 0,
      duration: 0.3
    })
  }

  const hideFadeIfExists = () => {
    if( isFade ) hideMbFade()
  }

  return (
    <section className={foot? "faqBody footer-preSec" : "faqBody"} ref={el} >

      {
        isFade && <div className="m-faq-fade"></div>
      }
<div className="faqwrapper">

      <div className="faq-grid" onClick={hideFadeIfExists}>
        {fdata.slice(0, 5).map((data) => {
          const { ques, ans, id } = data;
          return (
            <Dropdown ques={ques} ans={ans} idx={id} key={id}
            isActive={ status(id) }
            toggleActive={changeActiveFaq}
            isMobile={isMobile}
            
            />
            );
        })}
      </div>

      <div className="faq-grid">
        {fdata.slice(5).map((data) => {
          const { ques, ans, id } = data;
          return (
            <Dropdown ques={ques} ans={ans} idx={id} key={id} 
            isActive={ status(id) }
            toggleActive={changeActiveFaq}
            isMobile={isMobile}
           
            />
            );
          })}
      </div>

    </div>
    </section>
  );
};

export default QuesBody;
