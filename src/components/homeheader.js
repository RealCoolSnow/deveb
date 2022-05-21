import React, {useEffect, useRef, useState} from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";

import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";
import "./homeheader.scss";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

const Head = () => {
  const { isMobile } = useAppContext();
 const [url, seturl] = useState("")
  const el = useRef();
  const vidRef = useRef();
// useEffect(()=>{

//     el.current.style.transform="none"
//     if(isMobile){
//       seturl("/assets/video/all-mobile.m4v")
//     }
//     else if(!isMobile){
//       seturl("/assets/video/allLow.m4v")
//     }
  
// },[isMobile])
// useEffect(()=>{
//  vidRef.current.load()
// },[url])
  

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
                <span>Architecture.</span>
              </span>
              <span className="headSpan">
                <span>Visualization.</span>
              </span>

              <div className="call-action">
                <Link
                  to="/contact"
                  aria-label="estimate-project"
                  className="estimate-btn btn"
                >
                  Estimate project
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

        <div className="h2-wrapper" >
          <div className="h2-con">
          <div className="h2 home">
            <h6>Who we are</h6>
            <h3>
              {/* {isMobile ? "AMarc " : "am-arc "} */}
              A digital agency with solid web design and development expertise.
            </h3>
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
