import gsap from 'gsap/all'
import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import Con from'../components/contact.js'
// import Serv from'../components/serv.js'
// import Showcase from '../components/showcase.js'
import Footer from '../components/footer.js'
import FooterMB from '../components/footermb.jsx'
import ShowcaseServ from "../components/serShc.js"
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import {servData} from '../utils/constans.js'
import { useAppContext } from "../contexts/appcontext.js";
import Serv from '../components/serv.js'
import Helmet from 'react-helmet'

// const Serv = lazy( () => import('../components/serv.js'))
// const ShowcaseServ = lazy( () => import('../components/serShc.js'))
// const Con = lazy( () => import('../components/contact.js'))
// const Footer = lazy( () => import('../components/footer.js'))
// const FooterMB = lazy( () => import('../components/footermb.jsx'))

// const Loading = lazy( () => import('./Loading.js'))

const ServicesPage = () => {
  const imageTimeline = useRef()
  const sl = useRef();
  const q = gsap.utils.selector(sl);
  const fooT= useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { resetLoco, setReset, changePT, changePp, isMobile } = useAppContext();
  useLoco(!isMobile)
  

  useEffect(() => {
    changePT("Services");
    setTimeout(() => {
      setReset()
    }, 300);

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
    const texts = q(".grid-text-contain .span-back");

    texts.forEach((txt) => {
     // const creategrad = (rcolor, lcolor) => {
     //   const gra =
     //     "linear-gradient(90deg," + rcolor + " 0%," + lcolor + " 100%)";
     //   return gra;
     // };

     function updateBodyColor(color) {
       var bg = txt.dataset.bg;
       var cur = txt.dataset.cur;
       // changePointer({isHover: true, bg: })
       gsap.to(sl.current, {
         backgroundColor: () => txt.dataset.bg,
         ease: "none",
         autoAlpha: 1,
         // background: "transparent",
       });
     }

     ScrollTrigger.create({
       trigger: txt,
       scroller: "#viewport",
       start: () => "top bottom-=10%",
       end: () => "bottom top",
       // scrub: true,
       // markers:true,
       id: "showcaseGradient",
       invalidateOnRefresh: true,
       onEnter: () => updateBodyColor(),
       onEnterBack: () => updateBodyColor(),
       onLeave: ()=> txt.classList.contains("end")? gsap.to( sl.current, {background: "#F5F5F7", ease: 'none', duration: .7,}) : null,
       onLeaveBack: ()=> txt.classList.contains("first")? gsap.to( sl.current, {background: "#ffffff", ease: 'none', duration: .7,}) : null,
     
     });
   });

    const images = q(".show-image:not(.end)");
    const fulimages = q(".show-image");

    images.forEach((image, i) => {
      const nextImage = image.nextElementSibling;
      // console.log(image[i+1])
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
          clipPath:()=> "inset(0px 0px 0px 0px)",
          backgroundPosition: () => "0 40%",
                       
        },
        {
          clipPath: ()=>"inset(0px 0px 100% 0px)",
          backgroundPosition: () => "0 80%",
          ease: "none",
          // onComplete:()=>console.log(images[i+1])
        },
        0
      )
      .fromTo(fulimages[i+1], {
        backgroundPosition: () => "0 0%",

         }, 
         { 
          backgroundPosition: () => "0 40%",
          ease: "none" 
         }, 0
        )
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
    gsap.fromTo(q(".head.services img"),
      {y:0,},
      {y:-20,
        
        duration:1,
        ease:"power2.inOut",
        yoyo: true,
        repeat:-1,
        // delay:1,
      }
    )

    
    fooT.current = gsap
    .timeline({
        // duration:10,
        
      scrollTrigger: {
        scroller: "#viewport",
        trigger: q(".footer-sec.fot"),
        start:()=> "top-=8% center-=8%",
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
        

        gsap.to(q(".showcase-container"),{
          autoAlpha:1, yPercent:0, duration:.6, delay:.7,
        })
        
        const images =q(".showcase-full-img");
        images.forEach((img, i)=>{
          var imgtl = gsap.timeline({
            scrollTrigger:{
              trigger: img,
              start:()=> "top bottom",
              end: ()=> "bottom top",
              // markers:true,
              scrub:true,
            }
          })
          .fromTo(img,{
            backgroundPosition: "0 70%"
          }, {
            backgroundPosition: "0 30%",
            ease:"none",
          })

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

      <Helmet>
        <title>Deveb | Services we offer in Deveb</title>
        <meta name="description" content="We provide all the services you need to ship your digital product and reach to your target audience. From analysis to design, development and finally launching." />
      </Helmet>

        <Serv/>
      {/* <Suspense fallback={ <Loading/> }> */}
        <ShowcaseServ showcasedata={servData} dataHeight='100vh'/>
        {/* <Con conn={true}/> */}
        {
        !isMobile ? <Footer /> : <FooterMB/>
        }
        {/* <TestingCompo/> */}
      {/* </Suspense> */}
    </main>
  )
}

export default ServicesPage;
