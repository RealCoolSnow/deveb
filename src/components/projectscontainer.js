import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { useAppContext } from "../contexts/appcontext.js";

gsap.registerPlugin(ScrollTrigger);

const PrjContain = ({ projects, Cat }) => {
  const { isMobile } = useAppContext();

  const el = useRef();
  const newCat = Cat.split(" ").join("");

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
    console.log(e);
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
    console.log(e);
  };
useLayoutEffect(() => {
  // if (isMobile) return;
  const q = gsap.utils.selector(el);
    const scaledProjectsRef = q(".project").slice(0, 2);
    gsap.set(scaledProjectsRef, {
      // yPercent: 10,
      scale: 0.85,
      autoAlpha: 0,
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
      stagger: 0.13,
      ease: "power2.out",
    });
console.log("prj body")
    return () => {};
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const q = gsap.utils.selector(el);

    const allprojects = q(".project");
    const oddProj = allprojects.filter(function (element, index) {
      return index % 2 !== 0;
    });
    const oddItems = q(".project .pro-item").filter(function (element, index) {
      return index % 2 !== 0;
    });
    const evenItems = q(".project .pro-item").filter(function (element, index) {
      return index % 2 === 0;
    });
    // gsap.set(oddProj, {
    //   css: {marginTop: 122}
    // })
    // gsap.set(oddItems, {
    //   css: {margin: "0 auto 0 30px"},
    // })
    const scaledProjectsRef = q(".project").slice(0, 2);

    // gsap.set(scaledProjectsRef[1], {
    //   xPercent: 100
    // })
    // gsap.set(scaledProjectsRef[0], {
    //   xPercent: -3
    // })

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: scaledProjectsRef[0],
    //     start: `top center+=35%`,
    //     end: `top center-=5%`,
    //     scrub: true,
    //     // markers: true,
    //   },
    //   defaults: {
    //     // duration: 0.3,
    //     // ease: Power3.easeInOut
    //   },
    // });

    // const parallexTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: i,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: true,
    //   },
    //   defaults: {
    //     ease: 'none',
    //     duration: 0.3
    //   }
    // })

    // tl.to(
    //   scaledProjectsRef,
    //   {
    //     xPercent: 0,
    //   },
    //   "<"
    // );

    const parallexT = gsap.timeline({
      scrollTrigger: {
        trigger: scaledProjectsRef[0],
        scroller:"[data-scroll-container]",
        start: "center bottom",
        endTrigger: el.current,
        end: "bottom+=10% bottom",
        scrub: .4,
        ease:"none",
        // markers: true,
      },
    });

    parallexT
      .to(oddItems, {
        y: 100,
      })
      .to(
        evenItems,
        {
          y: -200,
        },
        0
      );

    // ScrollTrigger.refresh();

    return () => {};
  }, [projects, isMobile]);

  useEffect(() => {
    
    window.addEventListener('resize', keepShowcaseSquare)
    
    setTimeout(keepShowcaseSquare, 200);

    return () => {
      window.removeEventListener('scroll', keepShowcaseSquare)
    }
  }, [])

  const keepShowcaseSquare = () => {

    const sl = '.pro-cont .outerPro div.project a.pro-item'
    const showCaseContainers = document.querySelectorAll(sl)

    console.log('showCaseContainers')
    console.log(showCaseContainers)

    if( showCaseContainers.length ) {

      showCaseContainers.forEach( el => {
        
        el.style.height = el.offsetWidth + 'px'

      })
    }

    const vrSl = '.pro-cont .outerPro .project .vr-item'
    const vrContainers = document.querySelectorAll(vrSl)

    if( vrContainers.length ) {
      
      vrContainers.forEach( el => {

        if( !el.offsetWidth ) {
          setTimeout(keepShowcaseSquare,100)
          return
        }
      
        el.style.height = isMobile ? el.offsetWidth + 'px' : (window.innerHeight * 0.9) + 'px'

      })

    }
    
  }

  return (
    <div className="pro-cont" ref={el}>

      <div className="outerPro">
        {projects.map((item, idx) => {
          const { name, img, a, iframeSrc, desc } = item;

          const urlLink = a ? `/projects/${a.url}?${newCat}` : '';

          return isMobile ? (
            <div key={idx} className={`project`}>

              {
                !iframeSrc ? 
                  <Link
                    className="pro-item"
                    style={{ backgroundImage: `url(${img.url})` }}
                    to={urlLink}
                  ></Link>
                :
                  <iframe src={iframeSrc} frameBorder="0"
                    allowFullScreen={true}
                    scrolling='no'
                    marginWidth="0"
                    marginHeight="0"
                    className="pro-item vr-item"
                  >
                  </iframe>
              }

              <h6>{name}</h6>

              <span>{desc}</span>

              {
                !iframeSrc ? 
                  <Link className="view" to={urlLink}>
                    View project
                  </Link>
                : ''
              }
            </div>
          ) : (
            !iframeSrc ? 
              <Link
                to={`/projects/${a.url}?${newCat}`}
                key={idx}
                className={`project project-${idx + 2} `}
                data-scroll
                // data-scroll-speed={idx % 2 === 0? 1.5: 0 }
                // data-scroll-offset="40%, 0%"
              >
                <div
                  className="pro-item"
                  style={{ backgroundImage: `url(${img.url})` }}
                  onMouseEnter={(e) => zoomPic(e)}
                  onMouseOver={(e) => zoomPic(e)}
                  onMouseLeave={(e) => zoomOut(e)}
                ></div>
              </Link>
            :
            <div className={`project project-${idx + 2} vr-project`}>

              <iframe
                src={iframeSrc}
                key={idx}
                className='vr-item'
                allowFullScreen={true}
                scrolling='no'
                marginWidth="0"
                marginHeight="0"
                frameBorder="0"
              >
              </iframe>

            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PrjContain;
