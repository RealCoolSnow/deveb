import React, { useRef, useEffect, useState } from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";
import vid from "../assets/img/website.mp4";
import vid2 from "../assets/img/website2.mp4";
import vid3 from "../assets/img/website3.mp4";

import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useAppContext } from "../contexts/appcontext.js";
import "./homeheader.scss";

const Head = () => {
  const { isMobile } = useAppContext();

  const el = useRef();
  const vidContainer = useRef();
  const vidRef = useRef();
  const h2wrap = useRef();
  const pintl = useRef();

  const videos = [ vid,vid2,vid3];
  const [currentVid, setCurrentVid] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollToPlugin);

  const changeViddy = (e) => {
    const currentVidIdx = currentVid;
    let newVidIdx = 0;

    if (currentVid < videos.length - 1) {
      newVidIdx = currentVid + 1;
      setCurrentVid(newVidIdx);
    } else {
      setCurrentVid(newVidIdx);
    }

    const nextVid = vidContainer.current.childNodes[newVidIdx];
    // console.log(vidContainer.current.childNodes)

    if (nextVid && nextVid.play) nextVid.play();

    showNextVid(currentVidIdx, newVidIdx);
  };

  const showNextVid = (curr, next) => {
    const currentVid = vidContainer.current.childNodes[curr];
    const nextVid = vidContainer.current.childNodes[next];

    gsap.to(currentVid, {
      alpha: 0,
    });
    gsap.to(nextVid, {
      alpha: 1,
    });
  };

  useEffect(() => {
    const allHiddenVids = Array.from(vidContainer.current.childNodes).filter(
      (el, idx) => idx !== currentVid
    );

    gsap.set(allHiddenVids, {
      alpha: 0,
    });

    return () => {
      
    };
  }, []);

  useEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.set(el.current,{
      marginBottom: "15vh"
    })
    gsap.set(q(".h2 h6, .h2 h3,.btn-container"),
    {
      opacity:0,
    })

    const headSpans = q(".headSpan");

    gsap.set(headSpans, { yPercent: 40, autoAlpha: 0 });

    gsap.to(
      headSpans,
      {
        autoAlpha: 1,
        duration: 0.8,
      },
      1
    );

    gsap.to(
      headSpans,
      {
        yPercent: 0,
        duration: 0.8,
      },
      1
    );

    if (isMobile) {
      // console.log('this is mobile')

      const callAction = q("div.call-action");
      gsap.set(callAction, { yPercent: 40, autoAlpha: 0 });

      gsap.to(
        callAction,
        {
          autoAlpha: 1,
          duration: 0.8,
        },
        1
      );

      gsap.to(
        callAction,
        {
          yPercent: 0,
          duration: 0.8,
        },
        1
      );
    }
    // function calcmiddle() {
    //   const hei = h2wrap.current;

    //   if (!hei || !hei.offsetHeight) return;

    //   var myHeight = (window.innerHeight - hei.offsetHeight + 90) / 2;
    //   // console.log(window.innerHeight, hei.offsetHeight, myHeight);
    //   return myHeight;
    // }
    // const scrollToh2 = (yy) => {
    //   gsap.to(window, {
    //     scrollTo: { y: yy, offsetY: () => calcmiddle() },
    //     // onComplete: ()=> console.log("complete"),
    //     duration: 0.2,
    //   });
    // };

    // Animation for homeheader second part
    const spans = q(".h1 h1 ");
    // const myh = q(".h2");
    const revealH2 = gsap.fromTo(
      q(".h2 h6, .h2 h3, .btn-container"),
      { y: 20 },
      {
        y: 0,
        duration: 6,
        autoAlpha: 1,
      }
    );
    pintl.current = gsap
      .timeline({
        onComplete:()=>ScrollTrigger.refresh(true),
        scrollTrigger: {
          scroller:"[data-scroll-container]",
          trigger: el.current,
          start: "top top",
          // endTrigger: q(".btn-container"),
          end: "bottom top+=10%",
          pin:true,
          pinReparent:true,
          anticipatePin:1,
          // markers:true,
          // onLeave: () => gsap.to(q(".backg"), { position: "absolute" }),
          // onEnterBack: () => gsap.to(q(".backg"), { position: "fixed" }),
          // onEnter: () => gsap.to(q(".backg"), { position: "fixed" }),
          invalidateOnRefresh: true,
          scrub: 0.5,
        },
        // onComplete: ()=> scrollToh2(myh),
      })
      .to(q(".darkLay2"), {
        autoAlpha: 1,
        duration: 18,
        onComplete:()=>ScrollTrigger.refresh(true),
      })
      .to(
        spans,
        {
          duration: 4,
          autoAlpha: 0,
          y: -20,
        },
        "<5.5"
      )
      .addLabel("finishedSec1", "<5")
      .add(revealH2, "finishedSec1");

    // gsap.fromTo(
    //   q(".h2-wrapper"),
    //   {
    //     yPercent: () => -40,
    //   },
    //   {
    //     yPercent: () => -180,
    //     ease: "none",
    //     onComplete:()=>ScrollTrigger.refresh(true),
    //     scrollTrigger: {
    //       start: () => "bottom top+=10%",
    //       end: () => "bottom+=100% top",
    //       id: "moveH2",
    //       // markers: true,
    //       scrub: true,
    //       invalidateOnRefresh: true,
    //     },
    //   }
    // );

    return () => {
      // pintl.current.scrollTrigger.kill();
      revealH2.kill();
      // ScrollTrigger.getById("moveH2").kill();

      console.log("firing homehead 3")
    };
  }, [isMobile]);

  return (
    <>
      <section className="head" ref={el}>
        <div className="backg">
          <div ref={vidContainer}>
            {videos.map((vid, idx) => (
              <video
                ref={vidRef}
                autoPlay={idx === currentVid}
                playsInline={idx === currentVid}
                muted
                preload={idx !== 0 ? "none" : "auto"}
                onEnded={(e) => (idx === currentVid ? changeViddy(e) : "")}
                // style={{ display: idx === currentVid ? 'block' : 'none'}}
                style={{ zIndex: videos.length - idx }}
                key={idx}
              >
                <source src={vid} type="video/mp4" />
              </video>
            ))}
          </div>

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
                <span>Architecture.</span>
              </span>
              <span className="headSpan">
                <span>Design.</span>
              </span>
              <span className="headSpan">
                <span>Visualization</span>
              </span>
            </h1>
          </div>
        )}

        <div className="h2-wrapper" ref={h2wrap}>
          <div className="h2-con">
          <div className="h2 home">
            <h6>Who we are</h6>
            <h3>
              {/* {isMobile ? "AMarc " : "am-arc "} */}
              Team of expert Architects and designers who specialize in creating
              cozy, minimalist, modern spaces. Founded by Amir Mohseni
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
