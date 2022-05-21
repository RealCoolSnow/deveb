import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./about.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/about.jpg";
import img2 from "../assets/about2.jpg";
import imgMB from "../assets/aboutmb.jpg";

import { useAppContext } from "../contexts/appcontext";
const About = () => {
  const el = useRef();
  const myTl = useRef();
  const imgTl = useRef();

  gsap.registerPlugin(ScrollTrigger);
const {isMobile} = useAppContext();
  const q = gsap.utils.selector(el);
  // useLayoutEffect(() => {
  //   const texts = q(".texts-wrap h2 div,.texts-wrap h5,.texts-wrap p");
  //   const spans = q("h2 div");
  //   gsap.set(texts, { autoAlpha: 0 });

  //   gsap.set(q(".mem-row"), {
  //     xPercent: (index, target) => (index === 0 ? -5 : 5),
  //   });
  //   gsap.set(q(".image-wrap"), {
  //     // yPercent: 55,
  //     scale: 1.4,
  //     autoAlpha: 0,
  //     transformOrigin: "top center",
  //   });
  //   gsap.set(spans, {
  //     y: 20,
  //   });
  //   return () => {};
  // }, []);

  // useEffect(() => {
  //   const pis = q(".text-wrap2 p");
  //   const texts = q(".texts-wrap h2 div,.texts-wrap h5,.texts-wrap p");
  //   const imgTrig = q(".image-wrap img");
  //   console.log(imgTrig);
  //   const spans = q("h2 div");

  //   const loadingTL = gsap
  //     .timeline({})
  //     .to(
  //       spans,
  //       {
  //         y: 0,
  //         duration: 0.6,
  //         stagger: {
  //           amount: 0.1,
  //           ease: "power2.Out",
  //         },
  //       },
  //       0.4
  //     )
  //     .to(
  //       spans,
  //       {
  //         autoAlpha: 1,
  //         duration: 1.2,
  //         stagger: {
  //           amount: 0.1,
  //           ease: "power2.Out",
  //         },
  //       },
  //       0.4
  //     )
  //     .to(
  //       q(".image-wrap"),
  //       {
  //         yPercent: 0,
  //         autoAlpha: 1,
  //         scale: 1.5,
  //         duration: 0.5,
  //         stagger: 0.13,
  //         ease: "power2.out",
  //       },
  //       0.5
  //     )
  //     // .to(
  //     //   document.body,
  //     //   {
  //     //     overflow: "auto",
  //     //   },
  //     //   ">-.1"
  //     // );

  //   // myTl.current = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: q(".texts-wrap"),
  //   //     start: () => "top center",
  //   //     end: () => "bottom+=65% top",
  //   //     //   invalidateOnRefresh:true,
  //   //     //  markers:true,
  //   //     // pin: true,
  //   //     // scrub:true,
  //   //     anticipatePin: 10,
  //   //   },
  //   // });

  //   // .to(spans, {
  //   //   autoAlpha: 1,
  //   //   y: 0,
  //   //   duration: 1,
  //   //   stagger:.3,
  //   //   ease: "Power3.Out",
  //   // },0.3)

  //   imgTl.current = gsap.timeline({
  //     scrollTrigger: {
  //       scroller: "[data-scroll-container]",
  //       trigger: imgTrig,
  //       start: () => "top center-=10%",
  //       end: () => "bottom top",
  //       //  markers:true,
  //       invalidateOnRefresh: true,
  //       onEnter: ({ direction }) => fadeOut(direction),
  //       onLeaveBack: ({ direction }) => fadeOut(direction),
  //     },
  //   });

  //   const fadeOut = (direction) => {
  //     return (
  //       gsap.to(spans, {
  //         autoAlpha: () => (direction === 1 ? 0 : 1),
  //         duration: 0,
  //       }),
  //       gsap.to(texts[2], {
  //         autoAlpha: () => (direction === 1 ? 1 : 0),
  //         duration: 0,
  //       }),
  //       gsap.to(
  //         q(".darkLayer"),
  //         {
  //           autoAlpha: () => (direction === 1 ? 1 : 0),
  //           duration: 0,
  //         },
  //         "<"
  //       )
  //     );
  //   };
  //   ScrollTrigger.refresh();
  //   const images = q(".image-wrap");
  //   images.forEach((img, i) => {
  //     console.log(img.offsetTop - img.offsetHeight / 5, img.offsetTop);
  //     const tl = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           scroller: "[data-scroll-container]",
  //           start: () =>
  //             "top+=" +
  //             (img.offsetTop +
  //               (img.offsetHeight / 4) * (images.length - 1 - i)) +
  //             " bottom",
  //           end: () => "bottom+=" + img.offsetTop + " bottom",
  //           scrub: true,
  //           invalidateOnRefresh: true,
  //           // markers:true,
  //         },
  //       })
  //       .to(img, { scale: 1 });
  //   });

  //   const memtl = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         scroller: "[data-scroll-container]",
  //         trigger: q(".members-wrap"),
  //         start: () => "top-=5% bottom",
  //         end: () => "bottom+=5% top",
  //         // markers: true,
  //         scrub: true,
  //         invalidateOnRefresh: true,
  //       },
  //     })
  //     .to(q(".mem-row"), {
  //       xPercent: (index, target) => (index === 0 ? 5 : -5),
  //       duration: 20,
  //       ease: "none",
  //     })
  //     .to(
  //       texts[2],
  //       {
  //         autoAlpha: 0,
  //         duration: 3.3,
  //         ease: "Power3.Out",
  //       },
  //       "<4"
  //     );
  //   const philTl = gsap
  //     .timeline({
  //       duration: 10,
  //       scrollTrigger: {
  //         scroller: "[data-scroll-container]",
  //         trigger:q(".text-wrap2.pi"),
  //         start: () => "bottom bottom-=5%",
  //         end: () => "bottom+=10% top",
  //         markers: true,
  //         scrub: true,
  //         pin:true,
  //         pinReparent:true,
  //         invalidateOnRefresh: true,
  //       },
  //     })
  //     .to(
  //       imgTrig[1],
  //       {
  //         autoAlpha: 0,
  //         duration:1.1,
  //       },
  //       0
  //     )
  //     .to(
  //       pis[0],
  //       {
  //         autoAlpha: 1,
  //         duration: 0.8,
  //       },
  //       "<.34"
  //     )
  //     // .to(
  //     //   pis[0],
  //     //   {
  //     //     y: "-35vh",
  //     //     // height:100,
  //     //     duration: 2,
  //     //   },
  //     //   "<.2"
  //     // )
  //     .to(
  //       pis[0],
  //       {
  //         y: "-65vh",
  //         // height:100,
  //         duration: 4,
  //       },
  //       "<.2"
  //     )
  //     .to(
  //       pis[0],
  //       {
  //        autoAlpha:0,
  //         // height:100,
  //         duration: 1,
  //       },
  //       "<55%"
  //     )
  //     .to(
  //       pis[1],
  //       {
  //        autoAlpha:1,
  //         // height:100,
  //         duration: .8,
  //       },
  //       "<60%"
  //     )
  //     // .to(
  //     //   pis[1],
  //     //   {
  //     //     y: "-40vh",
  //     //     // height:100,
  //     //     duration: 2,
  //     //   },
  //     //   "<.1"
  //     // )
  //     .to(
  //       pis[1],
  //       {
  //         y: "-70vh",
  //         // height:100,
  //         duration: 4,
  //       },
  //       "<.2"
  //     )
  //     .to(
  //       pis[1],
  //       {
  //        autoAlpha:0,
  //         // height:100,
  //         duration: 1,
  //       },
  //       "<45%"
  //     )
  //   // pis.forEach(p=>{
  //   //   gsap
  //   // .timeline({
  //   //   duration:5,
  //   //   scrollTrigger: {
  //   //       trigger: p,
  //   //     start: () => "bottom+=20% bottom",
  //   //     end: () => "bottom+=10% top",
  //   //     markers: true,
  //   //     scrub: true,
  //   //     invalidateOnRefresh: true,
  //   //   },
  //   // })

  //   // })
  // }, []);

  return (
    <div  style={{ position: "relative" }} id="stick">
      {/* <div style={{ height: "81vh" }}></div> */}
      <div className="texts-wrap" data-scroll data-scroll-sticky data-scroll-target="#stick">
        <div className="darkLayer"></div>
        {isMobile? 
       ( <div className="mb">
          <p>About</p>
          <h2 >
             We help people feel good in a space.
          </h2>
        </div> )
        : 
        (
        <h2 style={{paddingTop:"150px"}}>
          <div>We help people feel</div> <div> good in a space.</div>
        </h2>
        )
        }
        
        
        <h5 style={!isMobile?{paddingTop:"170px" }: null}>
          A team of expert architects and designers who create cozy, modern, and
          minimalist spaces.
        </h5>
      </div>
      <div className="image-wrap fc">
        <img src={isMobile?imgMB: img2} />
      </div>
      <div className="members-wrap">
        <div className="mem-row">
          <div className="members"></div>
          <div className="members"></div>
          {!isMobile?<div className="members"></div> : null }
          
        </div>
        <div className="mem-row">
          <div className="members"></div>
          <div className="members"></div>
          {!isMobile?<div className="members"></div> : null }
        </div>
      </div>
      <div className="text-wrap2">
        <h5>
          For each of our clients, we create spaces that are truly unique to
          them by listening, solving problems, and being creative.
        </h5>
      </div>
      <div className="image-wrap so">
        <img src={img1} id="im" />
      </div>
      
      <div className="ab" >
      <div className="text-wrap2 pi" data-scroll data-scroll-sticky data-scroll-target="#im">
        <p>
          <span>Philosophy</span> Less is more
        </p>
        {isMobile? <p>Worldwide <span style={{  position: "relative",top: "0", display: "block"}}>we work with</span></p> : 
          <p>Worldwide, we work with</p>
        }
      
      </div>
      </div>
    </div>
  );
};
export default About;
