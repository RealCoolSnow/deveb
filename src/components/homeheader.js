import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";
import Scene from "./three/scene.js";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";
import "./homeheader.scss";

import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

const Head = () => {
  const { isMobile } = useAppContext();
 const [url, seturl] = useState("")
  const el = useRef();
  const q = gsap.utils.selector(el);
  const vidRef = useRef();
  useLayoutEffect(()=>{
   
    

    const headSpans = q(".headSpan");

    gsap.set(headSpans, { yPercent: 40, autoAlpha: 0 });

  },[])
useEffect(()=>{
  const headSpans = q(".headSpan");

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
 
},[])
  

  return (
    <>
      <section className="head" ref={el} data-scroll data-scroll-sticky data-scroll-target="#sti">
        <div className="backg">
          <div className="darkLay"></div>
          <div className="darkLay2"></div>
        </div>

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
              <span className="headSpan">
                <span>Design.</span>
              </span>
              <span className="headSpan">
                <span>Development.</span>
              </span>
              <span className="headSpan">
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
