import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";
import "./homeheader.scss";


import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

const Head = () => {
  const { isMobile, resetLoco } = useAppContext();
//  const [url, seturl] = useState("")
  const el = useRef();
  const q = gsap.utils.selector(el);
  // const vidRef = useRef();
  useLayoutEffect(()=>{
   
    
    const headSpans = q(".headSpan");
    // gsap.set([headSpans], {  autoAlpha: 0 });
    
    const ctaLinks= q(".call-action a.estimate-btn, .call-action a.view-projects-btn");
    if(isMobile){

      gsap.set([headSpans, ctaLinks[1]], { yPercent: 70, autoAlpha:0 });
      gsap.set( ctaLinks[0], { yPercent: 40, autoAlpha:0 });
   
    } else 
    if(!isMobile){
      gsap.set(headSpans, { yPercent: 40, autoAlpha:0});
    }

  },[isMobile])
useEffect(()=>{
  const headSpans = q(".headSpan");
if(isMobile){
  const ctaLinks= q(".call-action a");
  gsap.to(
    headSpans,
    {
      autoAlpha: 1,
      stagger: .08,
      duration:1.5,
      delay:.65,
    }
  );
  gsap.to(ctaLinks, {
    autoAlpha: 1,
    stagger: .08,
      duration:.6,
      delay:.8,
  })
  gsap.to(
    headSpans,
    {
      yPercent: 0,
      stagger: .08,
      duration:.6,
      delay:.65,
    }
  );
  gsap.to(
    ctaLinks,
    {
      yPercent:0,
      stagger: .08,
      duration:.6,
      delay:.8,
    }
  );

}
else if(!isMobile) {
  gsap.to(
    headSpans,
    {
      autoAlpha: 1,
      duration: 0.8,
      delay:.6,
    }
  );

  gsap.to(
    headSpans,
    {
      yPercent: 0,
      duration: 0.8,
      delay:.6,
    }
  );
}
 
 
},[isMobile])
const callcolor= (color)=>{
  // if(color === "orange"){
  //   options.setorange()
  // }
  //  else if(color === "blue"){
  //   options.setblue()
  // }
  // else if(color === "purple"){
  //   options.setpurple()
  // } else
  // if(color === "white"){
  //   options.main()
  // }

}
  

  return (
    <>
      <section className="head" ref={el} data-scroll data-scroll-sticky data-scroll-target="#sti">
        <div className="backg">
          <div className="darkLay"></div>
          <div className="darkLay2"></div>
        </div>
        {/* <Three/> */}
        {isMobile ? (
          <div className="h1 mobile-home-head">
            <h1 style={{ position: isMobile ? "static" : "" }}>
              <span className="headSpan">
                <span>Design.</span>
              </span>
              <span className="headSpan">
                <span>Development.</span>
              </span>
              <span className="headSpan">
                <span>Branding.</span>
              </span>

              <div className="call-action">
                <Link
                  to="/contact"
                  aria-label="estimate-project"
                  className="estimate-btn btn"
                >
                  Get a quote
                </Link>

                <Link
                  to="/projects"
                  aria-label="estimate-project"
                  className="view-projects-btn"
                >
                  View projects
                </Link>
              </div>
            </h1>
          </div>
        ) : (
          <div className="h1">
            <h1 style={{ position: "absolute" }}>
              <span className="headSpan" onMouseOver={()=>callcolor("orange")} onMouseLeave={()=>callcolor("white")}>
                <span>Design.</span>
              </span>
              <span className="headSpan" onMouseOver={()=>callcolor("purple")} onMouseLeave={()=>callcolor("white")} >
                <span>Development.</span>
              </span>
              <span className="headSpan" onMouseOver={()=>callcolor("blue")} onMouseLeave={()=>callcolor("white")}>
                <span>Branding</span>
              </span>
            </h1>
          </div>
        )}
        {/* <Scene/> */}

        <div className="h2-wrapper" >
          <div className="h2-con">
          <div className="h2 home">
            <h6>Who we are</h6>
            
              {/* {isMobile ? "AMarc " : "am-arc "} */}
              { isMobile? (
                <h3>A digital agency with solid web design and development expertise.</h3>
              ) : (
                <h3> <div>A digital agency with solid web</div> <span>design and development expertise.</span></h3>
              )}
              
            
          </div>

          {isMobile ? (
            <MButton url="/about" text="Learn more" />
          ) : (
            <Button ss=".3" did="btnreveal" text="Learn more" url="/about" />
          )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Head;
