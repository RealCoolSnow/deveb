import React, { lazy, Suspense, useEffect, useRef } from 'react'
import Head from'../components/homeheader.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
import TestingCompo from '../components/testcompo.js';
// import ServHead from'../components/serviceshead'
// import MServHead from'../components/MServiceHead/MobileServiceHead'
// import Process from'../components/process.js'
// import Con from'../components/contact.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import { home, homeExt } from '../utils/constans.js'
import useLoco from '../utils/useLoco.js';
import { useAppContext } from "../contexts/appcontext.js";
import i1 from "../assets/frame/1.jpg"
import i2 from "../assets/frame/2.jpg"
import i3 from "../assets/frame/3.jpg"
import i4 from "../assets/frame/4.jpg"
import i5 from "../assets/frame/5.jpg"
import i6 from "../assets/frame/6.jpg"
import i7 from "../assets/frame/7.jpg"
import i8 from "../assets/frame/8.jpg"
import i9 from "../assets/frame/9.jpg"
import i10 from "../assets/frame/10.jpg"
import i11 from "../assets/frame/11.jpg"
import i12 from "../assets/frame/12.jpg"
import i13 from "../assets/frame/13.jpg"
import i14 from "../assets/frame/14.jpg"
import i15 from "../assets/frame/15.jpg"
import i16 from "../assets/frame/16.jpg"
import i17 from "../assets/frame/17.jpg"
import i18 from "../assets/frame/18.jpg"
import i19 from "../assets/frame/19.jpg"
import i20 from "../assets/frame/20.jpg"
import i21 from "../assets/frame/21.jpg"
import i22 from "../assets/frame/22.jpg"
import i23 from "../assets/frame/23.jpg"
import i24 from "../assets/frame/24.jpg"
import i25 from "../assets/frame/25.jpg"
import i26 from "../assets/frame/26.jpg"
import i27 from "../assets/frame/27.jpg"
import i28 from "../assets/frame/28.jpg"
import i29 from "../assets/frame/29.jpg"
import i30 from "../assets/frame/30.jpg"
import i31 from "../assets/frame/31.jpg"
import i32 from "../assets/frame/32.jpg"
import i33 from "../assets/frame/33.jpg"
import i34 from "../assets/frame/34.jpg"
import i35 from "../assets/frame/35.jpg"
import i36 from "../assets/frame/36.jpg"
import i37 from "../assets/frame/37.jpg"
import i38 from "../assets/frame/38.jpg"
import i39 from "../assets/frame/39.jpg"
import i40 from "../assets/frame/40.jpg"
import i41 from "../assets/frame/41.jpg"
import i42 from "../assets/frame/42.jpg"
import i43 from "../assets/frame/43.jpg"
import i44 from "../assets/frame/44.jpg"
import i45 from "../assets/frame/45.jpg"
import i46 from "../assets/frame/46.jpg"
import i47 from "../assets/frame/47.jpg"
import i48 from "../assets/frame/48.jpg"
import i49 from "../assets/frame/49.jpg"
import i50 from "../assets/frame/50.jpg"
import i51 from "../assets/frame/51.jpg"
import i52 from "../assets/frame/52.jpg"
import i53 from "../assets/frame/53.jpg"
import i54 from "../assets/frame/54.jpg"
import i55 from "../assets/frame/55.jpg"
import i56 from "../assets/frame/56.jpg"
import i57 from "../assets/frame/57.jpg"
import i58 from "../assets/frame/58.jpg"
import i59 from "../assets/frame/59.jpg"
import i60 from "../assets/frame/60.jpg"
import i61 from "../assets/frame/61.jpg"

import d1 from "../assets/frame/design/1.jpg"
import d2 from "../assets/frame/design/2.jpg"
import d3 from "../assets/frame/design/3.jpg"
import d4 from "../assets/frame/design/4.jpg"
import d5 from "../assets/frame/design/5.jpg"
import d6 from "../assets/frame/design/6.jpg"
import d7 from "../assets/frame/design/7.jpg"
import d8 from "../assets/frame/design/8.jpg"
import d9 from "../assets/frame/design/9.jpg"
import d10 from "../assets/frame/design/10.jpg"
import d11 from "../assets/frame/design/11.jpg"
import d12 from "../assets/frame/design/12.jpg"
import d13 from "../assets/frame/design/13.jpg"
import d14 from "../assets/frame/design/14.jpg"
import d15 from "../assets/frame/design/15.jpg"
import d16 from "../assets/frame/design/16.jpg"
import d17 from "../assets/frame/design/17.jpg"
import d18 from "../assets/frame/design/18.jpg"
import d19 from "../assets/frame/design/19.jpg"
import d20 from "../assets/frame/design/20.jpg"
import d21 from "../assets/frame/design/21.jpg"
import d22 from "../assets/frame/design/22.jpg"
import d23 from "../assets/frame/design/23.jpg"
import d24 from "../assets/frame/design/24.jpg"
import d25 from "../assets/frame/design/25.jpg"
import d26 from "../assets/frame/design/26.jpg"
import d27 from "../assets/frame/design/27.jpg"
import d28 from "../assets/frame/design/28.jpg"
import d29 from "../assets/frame/design/29.jpg"
import d30 from "../assets/frame/design/30.jpg"
import d31 from "../assets/frame/design/31.jpg"
import d32 from "../assets/frame/design/32.jpg"
import d33 from "../assets/frame/design/33.jpg"
import d34 from "../assets/frame/design/34.jpg"
import d35 from "../assets/frame/design/35.jpg"
import d36 from "../assets/frame/design/36.jpg"
import d37 from "../assets/frame/design/37.jpg"
import d38 from "../assets/frame/design/38.jpg"
import d39 from "../assets/frame/design/39.jpg"
import d40 from "../assets/frame/design/40.jpg"
import d41 from "../assets/frame/design/41.jpg"
import d42 from "../assets/frame/design/42.jpg"
import d43 from "../assets/frame/design/43.jpg"
import d44 from "../assets/frame/design/44.jpg"
import d45 from "../assets/frame/design/45.jpg"
import d46 from "../assets/frame/design/46.jpg"
import d47 from "../assets/frame/design/47.jpg"
import d48 from "../assets/frame/design/48.jpg"
import d49 from "../assets/frame/design/49.jpg"
import d50 from "../assets/frame/design/50.jpg"
import d51 from "../assets/frame/design/51.jpg"
import d52 from "../assets/frame/design/52.jpg"
import d53 from "../assets/frame/design/53.jpg"
import d54 from "../assets/frame/design/54.jpg"
import d55 from "../assets/frame/design/55.jpg"
import d56 from "../assets/frame/design/56.jpg"
import d57 from "../assets/frame/design/57.jpg"
import d58 from "../assets/frame/design/58.jpg"
import d59 from "../assets/frame/design/59.jpg"
import d60 from "../assets/frame/design/60.jpg"
import d61 from "../assets/frame/design/61.jpg"
import design from "../assets/design1.jpg"
// import viz from "../assets/viz.jpg"
import "../serv.scss";
import ServHead from '../components/serviceshead'
import MServHead from '../components/MServiceHead/MobileServiceHead'
import Process from '../components/process.js'
import Footer from'../components/footer.js'
import FooterMB from '../components/footermb.jsx'
import Showcase  from '../components/showcase.js'

 const iArray= [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10, i11,i12,i13,i14,i15,i16,i17, i18,i19,i20,i21,i22,i23,i24,i25,i26,i27, i28,i29,i30, i31,i32,i33,i34,i35,i36,i37, i38,i39,i40, i41,i42,i43,i44,i45,i46,i47, i48,i49,i50, i51,i52,i53,i54,i55,i56,i57, i58,i59,i60, i61]
 const rArray= [i61,i60,i59,i58,i57,i56,i55,i54,i53,i52,i51,i50,i49,i48,i47,i46,i45,i44,i43,i42,i41,i40,i39,i38,i37,i36,i35,i34,i33,i32,i31,i30,i29, i28,i27,i26,i25,i24,i23, i22,i21,i20,i19,i18, i17,i16,i15,i14,i13,i12,i11,i10,i9,i8,i7,i6,i5,i4,i3,i2,i1]
 const dArray=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10, d11,d12,d13,d14,d15,d16,d17, d18,d19,d20,d21,d22,d23,d24,d25,d26,d27, d28,d29,d30, d31,d32,d33,d34,d35,d36,d37, d38,d39,d40, d41,d42,d43,d44,d45,d46,d47, d48,d49,d50, d51,d52,d53,d54,d55,d56,d57, d58,d59,d60, d61]
 

// const ServHead = lazy( () => import('../components/serviceshead'))
// const MServHead = lazy( () => import('../components/MServiceHead/MobileServiceHead'))
// const Process = lazy( () => import('../components/process.js'))
// const Footer = lazy( () => import('../components/footer.js'))
// const FooterMB = lazy( () => import('../components/footermb.jsx'))

// const Showcase = lazy( () => import('../components/showcase.js'))

// const Loading = lazy( () => import('./Loading.js'))
const HomePage = () => {
  const h2wrap = useRef();
  const pintl = useRef();
  const el = useRef();
  const tl = useRef();
  const { isMobile, pageTitle, changePT,resetLoco, setReset, changePp } = useAppContext();
  useLoco(!isMobile)
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);
  const fooT= useRef();
  const imageTimeline = useRef();
  const style = {
    background: "radial-gradient(50% 42.9% at 50% 42.91%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.549) 100%)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: .5,
  }
  useEffect(() => {

    setTimeout(() => {
      setReset()
    }, 500);
    return ()=>{
      }
    }, [isMobile])
    const ref = React.createRef();
    const refviz = React.createRef();
    // const leftvideo= ()=>{
    //   if(document.querySelector("#homevid")){
    //     document.querySelector("#homevid").pause()
    //     gsap.to(q("#homevid"), {display: "none", duration:0})
    //   }
    //   else return;
    // }
    // const entvideo= ()=>{
    //   document.querySelector("#homevid").play()
    //   gsap.to(q("#homevid"), {display: "block", duration:0})
    // }
  useEffect(()=>{
   
    
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }
    if (!isMobile){
      changePp("other")
      if(pintl.current){
        pintl.current.progress(0)
        // entvideo()
      }
    gsap.set(q(".head"),{
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

  
    const spans = q(".h1 h1 ");
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
        scrollTrigger: {
          scroller:"#viewport",
          trigger: q(".head"),
          start:()=> "top top",
          end:()=> "bottom top+=10%",
          // markers:true,
          id:"pintl",
          pin:true,
          pinReparent:true,
          anticipatePin:1,
          // invalidateOnRefresh: true,
          // onLeave:()=> leftvideo(),
          // onEnterBack: ()=> entvideo(),

          scrub: 0.5,
        },
      })
      .to(q(".darkLay2"), {
        autoAlpha:()=> 1,
        duration: 18,
        // onComplete:()=>ScrollTrigger.refresh(true),
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

      // ScrollTrigger.addEventListener("refreshInit", () => {progress = pintl.current.progress});
      // ScrollTrigger.addEventListener("refresh", () => pintl.current.scroll(progress * ScrollTrigger.maxScroll(window)));

        fooT.current = gsap
        .timeline({
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
             duration:1,
           }, "<");

           const aside = q(".aside");
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
              gsap.to(el.current, {
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
              onLeave: ()=> txt.classList.contains("end")? gsap.to( el.current, {background: "#F5F5F7", ease: 'none', duration: .7,}) : null,
              onLeaveBack: ()=> txt.classList.contains("first")? gsap.to( el.current, {background: "#F5F5F7", ease: 'none', duration: .7,}) : null,
            
            });
          });
           const imgTrigger = q(".show-images");
           const imageArrayfull = q(".show-image");
           const imagewrap = q(".show-img-contain");
           const endTr = q(".show-text-contain");
           const imgset0= [imageArrayfull[0],imageArrayfull[1]];
           const imgset1= [imageArrayfull[2],imageArrayfull[3],imageArrayfull[4]]
          
           imagewrap.forEach((it,j)=>{
          
            gsap.set(imageArrayfull, {
              zIndex: (i, target, targets) => targets.length - i,
            });
            const name = ".show-images."+ "r" +j + " .show-image:not(.end)";
            console.log(name)
                    const images = q(name);
              
                    images.forEach((image, i) => {
                      const nextImage = image.nextElementSibling;
              
                       imageTimeline.current = gsap.timeline({
                        scrollTrigger: {
                          scroller: "[data-scroll-container]",
                          trigger: imgTrigger[j],
                          start: () => "top -" + window.innerHeight * i,
                          endTrigger: endTr[j],
                          end: () => "+=" + window.innerHeight,
                          scrub: true,
                          // invalidateOnRefresh: true,
                          // markers:true,
                          anticipatePin: 1,
                          // onEnter: () => console.log(images),
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
                      scroller:"#viewport",
                      trigger: imagewrap[j],
                      start: ()=> "center center",
                      endTrigger: endTr[j],
                      end: ()=> "bottom bottom",
                      // pin: imagewrap[j],
                      id: "pinSc",
                      // onEnter: ()=> console.log("pinning showcase"),
                      // anticipatePin: 1,
                      // pinReparent:true,
                      // invalidateOnRefresh:true,
                      // markers:true,
                     });
            })
            
            
            // const killsc = (i)=> {console.log(ScrollTrigger.getById(i))}
            // ScrollTrigger.addEventListener("refreshInit", ()=>killsc("pintl") )
            return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
           if( tl.current){
            tl.current.kill()
           }
           if( pintl.current.ScrollTrigger){
            pintl.current.ScrollTrigger.kill()
           }
           if(pintl.current){
            pintl.current.kill();
           }
            if (ScrollTrigger.getById("tl0")){
              ScrollTrigger.getById("tl0").kill()
            }
            if (ScrollTrigger.getById("tl1")){
              ScrollTrigger.getById("tl1").kill()
            }
            if(ScrollTrigger.getById("can")){
              ScrollTrigger.getById("can").kill()
            }
            if(ScrollTrigger.getById("pinSc")){
              ScrollTrigger.getById("pinSc").kill()
            }
            // imageTimeline.current.kill()
           }
          }
          else if(isMobile){
            el.current.style.transform="none";
            gsap.set(q("section.head"),{
              clearProps: "transform"
            })
            // entvideo()
            
            gsap.set(q(".h2.home h3, .h2.home h6, h1"),{
              autoAlpha:1,
              y:0,
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
               
               }
           }
  }, [resetLoco, isMobile])

  

  return( 
   
    <main id="viewport" ref={el} data-scroll-container >
      <div id="sti" style={!isMobile ? {height: "190vh"}: {}}>
      <Head />
      </div>

      {/* <Suspense fallback={ <Loading/> }> */}
        {
          isMobile ?
            <MServHead txt="Design" />
          :
          null
        }
        <Showcase showcasedata={home} dataHeight="200vh" sci="i1"/>
        {
          isMobile ?
            <MServHead txt="Visualization" />
          :
            // <ServHead num="02" text="Visualization" ref={ref} array={rArray}/>
            null
        }

        {/* <Showcase  showcasedata={homeExt} dataHeight="300vh" sci="i2"/> */}


        
        <Process/>
        {
          isMobile?  <FooterMB />: <Footer /> 
        }
       
        {/* <TestingCompo/> */}

      {/* </Suspense> */}




    </main>
  )
}

export default HomePage
