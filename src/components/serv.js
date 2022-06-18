import React, { useRef, useEffect, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";
import hand from "../assets/hand2.png"
import { gsap } from "gsap";
// import {images} from '../utils/constans.js'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = ['Interior','Exterior','Rendering','Animation','Virtual Tour']

const Serv = () => {
  const { isMobile } = useAppContext();

  const MainWrapper = useRef(null);
  const mobileLinksScroller = useRef(null);
  const q = gsap.utils.selector(MainWrapper);
  gsap.registerPlugin(ScrollTrigger)

  // const[isScrollStarted,setIsScrollStarted]=useState(!1);useEffect(()=>(isMobile&&mobileLinksScroller.current&&mobileLinksScroller.current.addEventListener("scroll",checkLinksScroll),()=>{mobileLinksScroller.current&&mobileLinksScroller.current.removeEventListener("scroll",checkLinksScroll)}),[isMobile,isScrollStarted]);const checkLinksScroll=e=>{const{scrollLeft:l,offsetWidth:t,scrollWidth:r}=e.target;Number(l/(r-t)).toFixed(2)>.04?isScrollStarted&&(setIsScrollStarted(!1),toggleFader(!0)):isScrollStarted||(setIsScrollStarted(!0),toggleFader(!1))},toggleFader=e=>{const l=gsap.utils.selector(MainWrapper),t=gsap.timeline({defaults:{duration:.5}}),r=l(".mobile-fade.fade-right");e?t.to(r,{x:50,autoAlpha:0}):t.to(r,{x:0,autoAlpha:1})};
 
  useLayoutEffect(() => {
    const fadeElems=q("h6, h3 div, .links-wrapper button");
    gsap.set(fadeElems, {
      autoAlpha:0,
    })
    gsap.set(q("h6,.links-wrapper button"),{
      yPercent:100,
    })
    gsap.set(q("h3 div"),
    {yPercent:60})
    gsap.set(q(".head img"), {scale: .7, autoAlpha:0})
    return () => {

    };
  }, [isMobile])
  useEffect(()=>{
    const fadeElems=q("h6, h3 div, .links button");
    gsap.to(fadeElems,{
      autoAlpha:1,
      stagger: .08,
      duration:1.5,
      delay:.2,
      // onComplete:()=>ScrollTrigger.refresh(true),
    })
    gsap.to(fadeElems,{
      yPercent:0,
      stagger: .08,
      duration:.6,
      delay:.2,
      // onComplete:()=>ScrollTrigger.refresh(true),
    })
    gsap.to(q(".head img"), {
      autoAlpha:1,
      scale:1,
      duration:.4,
      ease:"power2.inOut",
      delay:.6,
      // onComplete:()=>ScrollTrigger.refresh(true),
    })
   

  },[isMobile])

  const scrollToService = (idx) => {

    if( isMobile ) {
      const findServ = document.querySelector(`.mobile-showcase-box.box-${idx}`)
      const top = findServ.offsetTop

      window.scrollTo({
        top: top - 120,
        left: 0,
        behavior: 'smooth'
      })
    } else {

      // Services ScrollTo In Web
      // const findServ = document.querySelector(`.serv-showcase-box.box-${idx}`)
      // const top = findServ.offsetTop

      // scrollY(top)
    }
    
  }

  return (
    <main ref={MainWrapper}>
      <section className="head services">
        <div className="h2 center">
          <h6>Services</h6>
          {!isMobile? (
            <h3>
            <div>Branding, concept design &  </div>
            <div>web developments, we've got</div>
            <div>everything covered.</div>
            </h3>
          ): (
            <h3>
           <div>Branding, concept </div><div> design & 
            web </div><div>developments, we've</div><div> got
            everything covered.</div>     
            </h3>
          )}
        </div>
        {!isMobile &&   <img src={hand}/>}
      

      </section>
    </main>
  );
};
export default Serv;
