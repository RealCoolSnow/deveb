import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import tele from "../assets/telegram.svg";
import { useAppContext } from "../contexts/appcontext.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const myTl = useRef();
  const {changePp} = useAppContext();

  const btnmove = (e) => {
    const q = gsap.utils.selector(el);
    const btnArea = q(".cobtn-contain");
    const {target}= e;
    const ofTop = target.getBoundingClientRect().top;
      const ofLeft = target.getBoundingClientRect().left;
      var s = e.clientX - ofLeft;
      var o = (e.clientY - ofTop)/e.target.getBoundingClientRect().height;
      // console.log(o, e.target.getBoundingClientRect().height)
      console.log(e.target)
    gsap.to(e.target, {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 40,
      y:( o - .5) * 20,
      ease: "Power3.inOut",
      duration: .3,
    });

  };
  const btnL = (e)=>{
    const btnArea = q(".cobtn-contain");

    gsap.to(e.target, {
      x: 0,
      y:0,
      ease: "Power3.inOut",
      duration: .3,
    });
  }
  useEffect(() => {
    ScrollTrigger.refresh();
    // ScrollTrigger.update();
    const bc = q(".backgr");
    const footer = q(".footer-foot h5");
    // gsap.set(q(".footer-main"), {
      //     yPercent: 59,
      // });
      gsap.set(q(".backgr"), {
        autoAlpha:0,
      });
      const changeBg = (direction)=>{
        console.log(direction)
        gsap.to(q(".backgr"), { 
          autoAlpha: ()=> (direction === 1? 1: 0),
          duration:1
        })
        direction === 1? changePp("Contact"): changePp("other")
      }
      const prt1 =q(".footer-main h6");
      const prt2 = q(".tabs-holder");
      const prt3 = q(".footer-foot");
      gsap.set([prt1,prt2,prt3], {
        autoAlpha:0,
        yPercent:60,
      })
    myTl.current = gsap
      .timeline({
          // duration:10,
          
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: el.current,
          start: "center-=8% center-=8%",
          end: "bottom bottom",
          // markers: true,
          id:"foot",
          // scrub:true,
          onLeaveBack: ({direction})=> changeBg(direction),
        onEnter: ({direction})=> changeBg(direction),
        },
      })
      .to([prt1,prt2,prt3], { 
          yPercent:0,
          stagger: {
            amount: 0.28,
            ease: "power2.Out",
          },
          duration:.6,
         }, "0")
         .to([prt1,prt2,prt3],{
           autoAlpha:1,
           stagger: {
            amount: 0.3,
            ease: "power2.Out",
          },
           duration:1,
         }, "<")
        
      //    .fromTo(q(".footer-foot"),{
      //     yPercent: 158,
      // }, {
      //       yPercent: 0,
      //       duration:50,
      //   }, "<1")
      console.log("footer")
    return () => {
      if(myTl.current.ScrollTrigger){
        myTl.current.ScrollTrigger.kill();
      }
      myTl.current.kill();
      // // ScrollTrigger.kill()
      ScrollTrigger.refresh();
      // ScrollTrigger.update();

    };
  }, []);
  return (
    <section ref={el}  id="bab"   className="sec-form footer-sec" >
      <div className="trig">
        <div className="backgr" data-scroll data-scroll-sticky data-scroll-target="#bab"></div>
        <div className="footer-main">
          <h6>
            We are always <br />
            <span>
              happy to <p>help</p>
            </span>
          </h6>

          <div className="tabs-holder" data-scroll data-scroll-speed=".8">
            <div className="cobtn-contain" onMouseMove={btnmove} onMouseLeave={btnL}>
              <Link className="co-btn co-white" to="/contact"  >
                 Send brief
              </Link>
            </div>
            <div className="cobtn-contain" onMouseMove={btnmove} onMouseLeave={btnL}>
              <Link className="co-btn co-white" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="footer-secs l">
            <h5>am@amarcs.com</h5>
            <p>Mechnykova St, 2, Kyiv, 02000</p>
          </div>
          <div className="footer-secs r">
            <div>
              <img className="be" src={be} />
              <img className="up" src={up} />
              <img className="insta" src={insta} />
              <img className="tele" src={tele} />
              <img className="whats" src={whats} />
            </div>
            <Link to="/privacyandpolicy">
            <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
