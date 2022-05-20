import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../serv.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import design from "../assets/design1.jpg"
import viz from "../assets/viz.jpg"
import vid from "../assets/img/Visualization.mp4"
import { useAppContext } from "../contexts/appcontext.js";





gsap.registerPlugin(ScrollTrigger);
const style = {
  background: "radial-gradient(50% 42.9% at 50% 42.91%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.549) 100%)",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  opacity: .5,
}
const ServHead = ({ num, text , array }) => {
  const { isMobile } = useAppContext();

  const el = useRef();
  const headTitle = useRef();
  const tl = useRef();
  const [set, setset] = useState(false);
  const canvRef = useRef();
       

  
  // useEffect(()=>{

  //   ScrollTrigger.create({
  //     trigger: el.current,
  //     start: "center center",
  //     end:  "bottom+=400vh bottom",
  //     pin: true,
  //     anticipatePin: 1,
  //   });
  //   setset(true);
  // },[set])

  useEffect(() => {
    
    const q = gsap.utils.selector(el);

    const aside = q(".aside");
    const asidewrap = q(".aside-wrapper");
    // const imurl = aside[0].dataset.img;
    // console.log(imurl)
    // gsap.set(aside, {background: })
    gsap.set([asidewrap, aside], { scale: 1.45});
    // gsap.set(aside, {y: "-23vh" })
     tl.current = gsap.timeline({
      onComplete:()=>ScrollTrigger.refresh(true),
      scrollTrigger: {
        scroller:"[data-scroll-container]",
        trigger: el.current,
        start: ()=> "top bottom",
        end:()=> "center center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    .to([asidewrap, aside], { scale: 1 , onComplete:()=>ScrollTrigger.refresh(true), });

    // gsap.to(aside, {
    //   y: "0",
    //   onComplete:()=>ScrollTrigger.refresh(true),
    //   scrollTrigger: {
    //     trigger: aside,
    //     start:()=> "top+=50 bottom",
    //     end:()=> "bottom top",
    //     id: "aside-parallex",
    //     // markers:true,
    //     invalidateOnRefresh: true,
    //     scrub: true,
    //   },
    // });

    //  tl.to(aside, {
    //    clipPath: "inset(0 0% 0 50%)",
    //  })
    //  gsap.set(aside, {clipPath: "inset(0 0% 0 0%)"})
    const canvas = canvRef.current;
const context = canvas.getContext("2d");
canvas.width = 931;
canvas.height = 523;
const frameCount = 61;
const airpods = {
  boo: 0
};
const images = [];

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = array[i];
  images.push(img);

}
const cans = q(".aside-wrapper");
gsap.to(airpods, {
  boo: frameCount - 1,
  snap: "boo",
  ease:"none",
  scrollTrigger: {
    scroller:"[data-scroll-container]",
    trigger: q(".aside-wrapper"),
    // start: "bottom-=19% bottom",
    start: "bottom-=14% bottom",
    end: "top+=10% top",
    // end: "center center-=10%",
    // markers: true,
    scrub:true,
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.boo], 0, 0,931, 523); 
}
 
    return () => {
      tl.current.scrollTrigger.kill();
      if (ScrollTrigger.getById("aside-parallex")) {
        ScrollTrigger.getById("aside-parallex").kill();
      }
      console.log("firing serhead 4")
    }
    
  }, [set]);

  return (
    <section className="sec-grid-contain" ref={el}>
      <div className="serv-head-contain">
        <div className="serv-text">
          <p ref={headTitle}>
            <span>{num}</span>
            {text}
          </p>
        </div>
      </div>
      <div className="aside-wrapper">
        <div className="aside" 
        data-img= { text === "Visualization" ? viz  : design}
        // style={{background: "url("+ `${text=== "Visualization"? viz : design}`+")", backgroundSize: "cover" }}
        >
          <canvas id="canva" ref={canvRef}/>
          <div className="drkLayer" style={style}></div>
          
        </div>
      </div>
    </section>
  );
};

export default ServHead;
