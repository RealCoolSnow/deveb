import gsap from 'gsap/all'
import React, { lazy, Suspense, useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import Con from'../components/contact.js'
// import Serv from'../components/serv.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import {servData} from '../utils/constans.js'
import TestingCompo from '../components/testcompo.js'
import { useAppContext } from "../contexts/appcontext.js";
import Serv from '../components/serv.js'

// const Serv = lazy( () => import('../components/serv.js'))
const ShowcaseServ = lazy( () => import('../components/serShc.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))

// const Loading = lazy( () => import('./Loading.js'))

const ServicesPage = () => {
  const imageTimeline = useRef()
  const sl = useRef();
  const q = gsap.utils.selector(sl);
  const fooT= useRef();
  const tl = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { resetLoco, setReset, changePT, changePp, isMobile } = useAppContext();
  useLoco(!isMobile)
  
  useEffect(() => {
    setTimeout(() => {
      setReset()
    }, 500);

    
    changePT("Deveb-Services");
    document.title = "Deveb-Services";
    // if(isMobile){
    //       sl.current.style.transform="none";
    //       gsap.set(sl.current,{
    //         clearProps: "transform"
    //       })
    //     }
    return ()=>{
    }
  }, [isMobile])
  // useEffect(()=>{
  //   if(isMobile){
  //     sl.current.style.transform="none";
  //     gsap.set(sl.current,{
  //       clearProps: "transform"
  //     })
  //   }
  // },[isMobile])
  useEffect(()=>{
    const imgTrigger = q(".show-images");
    const imageArrayfull = q(".show-image");
    const imagewrap = q(".show-img-contain");
    const endTr = q(".show-text-contain");
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }
    
if(!isMobile){


    gsap.set(imageArrayfull, {
      zIndex: (i, target, targets) => targets.length - i,
    });
    changePp("other")

    const images = q(".show-image:not(.end)");

    images.forEach((image, i) => {
      const nextImage = image.nextElementSibling;

       imageTimeline.current = gsap.timeline({
        scrollTrigger: {
          scroller:"[data-scroll-container]",
          trigger: imgTrigger,
          start: () => "top -" + window.innerHeight * i,
          endTrigger: endTr,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          id:"repeat"+ i,
          // invalidateOnRefresh: true,
          // markers:true,
         
        },
      })

      .fromTo(
        image,
        {
          height: () => {
            return "100%";
          },
          y: () => {
            return 0;
          },
        },
        {
          height: () => {
            return "0%";
          },
          y: () => {
            return -20;
          },
          ease: "none",
        },
        0
      )

      .fromTo(
        image,
        {
          height: () => {
            return "100%";
          },
        },
        {
          height: () => {
            return "0%";
          },
          ease: "none",
        },
        0
      );
    });

    ScrollTrigger.create({
      scroller:"[data-scroll-container]",
      trigger: imagewrap,
      start: () => "center center",
      endTrigger: endTr,
      end: () => "bottom bottom",
      pin: imagewrap,
      id: "pinSc",
      // onEnter: ()=> console.log("pinning showcase"),
      pin: imagewrap,
    pinReparent: true,
    anticipatePin:1,
    invalidateOnRefresh: true,
      // markers:true,
    });

    
    fooT.current = gsap
    .timeline({
        // duration:10,
        
      scrollTrigger: {
        scroller: "#viewport",
        trigger: q(".footer-sec.fot"),
        start:()=> "center-=8% center-=8%",
        end: ()=> "bottom bottom",
        // markers: true,
        id:"foot",
    //     // scrub:true,
        onLeaveBack: ({direction})=> changeBg(direction),
      onEnter: ({direction})=> changeBg(direction),
      },
    })
       .to(q(".trig"),{
         autoAlpha:1,
        //  stagger: {
        //   amount: 0.3,
        //   ease: "power2.Out",
        // },
         duration:1,
       }, "<")

       return()=>{
        fooT.current.kill()
        if( fooT.current.ScrollTrigger){
          fooT.current.ScrollTrigger.kill();
        }
        if(ScrollTrigger.getById("pinSc")){
          ScrollTrigger.getById("pinSc").kill()
        }
        if(ScrollTrigger.getById("repeat0")){
          ScrollTrigger.getById("repeat0").kill()
        }
        if(ScrollTrigger.getById("repeat1")){
          ScrollTrigger.getById("repeat1").kill()
        }
        if(ScrollTrigger.getById("repeat2")){
          ScrollTrigger.getById("repeat2").kill()
        }
        if(ScrollTrigger.getById("repeat3")){
          ScrollTrigger.getById("repeat3").kill()
        }
        if(ScrollTrigger.getById("repeat4")){
          ScrollTrigger.getById("repeat4").kill()
        }
       }
      } else if( isMobile){
        sl.current.style.transform="none";
        gsap.set(sl.current,{
          clearProps: "transform"
        })
        
        fooT.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: q(".footer-sec.fot"),
            start:()=> "top-=8% center-=8%",
            end: ()=> "bottom bottom",
            // markers: true,
            id:"foot",
            onLeaveBack: ({direction})=> changeBg(direction),
          onEnter: ({direction})=> changeBg(direction),
          },
        })
           .to(q(".trig"),{
             autoAlpha:1,
             duration:1,
           }, "<")
          
           return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
            // mymb.current.kill();
            // if(tl.current.ScrollTrigger){
            //   tl.current.ScrollTrigger.kill();
            // }
           }
      }
  },[resetLoco, isMobile])
  return (
    <main ref={sl} id="viewport" data-scroll-container>
        <Serv/>
      <Suspense fallback={ <Loading/> }>
        <ShowcaseServ showcasedata={servData} dataHeight='100vh'/>
        {/* <Con conn={true}/> */}
        {
        !isMobile ? <Footer /> : <FooterMB/>
        }
        {/* <TestingCompo/> */}
      </Suspense>
    </main>
  )
}

export default ServicesPage;
