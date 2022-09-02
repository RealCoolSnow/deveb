import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { useAppContext } from "../contexts/appcontext.js";

gsap.registerPlugin(ScrollTrigger);
// let player;
const PrjContain = ({ projects }) => {
  const { isMobile, changePointer } = useAppContext();

  const el = useRef();
  // const q = gsap.utils.selector(el);

  const zoomPic = (e) => {
    gsap.fromTo(
      e.target,
      {
        backgroundSize: "100%",
      },
      {
        backgroundSize: "103%",
        yPercent: -0.5,
        duration: 0.4,
        ease: "power2.Out",
      }
    );
    // console.log(e);
  };

  const zoomOut = (e) => {
    gsap.fromTo(
      e.target,
      {
        backgroundSize: "103%",
      },
      {
        backgroundSize: "100%",
        yPercent: 0,
        duration: 0.4,
        ease: "power2.Out",
      }
    );
    // console.log(e);
  };
  useLayoutEffect(() => {
    // if (isMobile) return;
    const q = gsap.utils.selector(el);
      const scaledProjectsRef = q(".project").slice(0, 2);
      gsap.set(scaledProjectsRef, {
        // yPercent: 10,
        scale: ()=> isMobile?.98 :0.85,
        autoAlpha: 0,
        y: ()=> isMobile? 30 :0,
        transformOrigin: "bottom center",
      });
    return () => {
     
    };
  }, [isMobile])
  useEffect(() => {
    // if (isMobile) return;

    const q = gsap.utils.selector(el);
    const scaledProjectsRef = q(".project").slice(0, 2);
   
    gsap.to(scaledProjectsRef, {
      // yPercent: 0,
      autoAlpha: 1,
      scale: 1,
      delay: 0.55,
      duration: 1.1,
      y:0,
      stagger: 0.13,
      ease: "power2.out",
    });
    
  }, [isMobile]);
  
  

  const keepShowcaseSquare = () => {
    const sl = ".pro-cont .outerPro div.project a.pro-item";
    const showCaseContainers = document.querySelectorAll(sl);


    if (showCaseContainers.length) {
      showCaseContainers.forEach((el) => {
        el.style.height = el.offsetWidth + "px";
      });
    }

    const vrSl = ".pro-cont .outerPro .project .vr-item";
    const vrContainers = document.querySelectorAll(vrSl);

    if (vrContainers.length) {
      vrContainers.forEach((el) => {
        if (!el.offsetWidth) {
          setTimeout(keepShowcaseSquare, 100);
          return;
        }

        el.style.height = isMobile
          ? el.offsetWidth + "px"
          : window.innerHeight * 0.9 + "px";
      });
    }
  };


  return (
    <div className="pro-cont" ref={el}>
      <div className="outerPro">
        {projects.map((item, idx) => {
          const { name, img, a, desc} = item;

          const urlLink = a ? `/projects/${a.url}` : "";

          return isMobile ? (
            <div
              key={idx}
              className={`project`}
            >
                <Link
                  className="pro-item"
                  style={{ backgroundImage: `url(${img.url})` }}
                  to={urlLink}
                ></Link>  

              <h6>{name}</h6>

              <span>{desc}</span>

            
                <Link className="view" to={urlLink}>
                  View project
                </Link>
            </div>
          ) :  (
            <Link
              to={`/projects/${a.url}`}
              key={idx}
              className={`project project-${idx + 2} `}
              data-scroll
              onMouseEnter={() =>
                changePointer({
                  isHover: true,
                  sesize:"1.9",
                  fsize:"7px",
                  color: { bg: img.colors.left, txt: "#ffffff" },
                  text: name,
                })
              }
              onMouseLeave={() => changePointer({ isHover: false })}
            >
              <div
                className="pro-item"
                style={{ backgroundImage: `url(${img.url})` }}
                onMouseEnter={zoomPic}
                onMouseOver={zoomPic}
                onMouseLeave={zoomOut}
              ></div>
            </Link>
          ) 
        })}
      </div>
    </div>
  );
};
export default PrjContain;