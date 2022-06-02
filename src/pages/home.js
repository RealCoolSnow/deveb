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
// import design from "../assets/design1.jpg"
// import viz from "../assets/viz.jpg"
import "../serv.scss";
import ServHead from '../components/serviceshead'
import MServHead from '../components/MServiceHead/MobileServiceHead'
import Process from '../components/process.js'
import Footer from'../components/footer.js'
import FooterMB from '../components/footermb.jsx'
import Showcase  from '../components/showcase.js'
import Helmet from 'react-helmet';
import Three from '../components/Blob/Three.js';
import { options, camera } from '../components/Blob/utils'


//  const iArray= [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10, i11,i12,i13,i14,i15,i16,i17, i18,i19,i20,i21,i22,i23,i24,i25,i26,i27, i28,i29,i30, i31,i32,i33,i34,i35,i36,i37, i38,i39,i40, i41,i42,i43,i44,i45,i46,i47, i48,i49,i50, i51,i52,i53,i54,i55,i56,i57, i58,i59,i60, i61]
//  const rArray= [i61,i60,i59,i58,i57,i56,i55,i54,i53,i52,i51,i50,i49,i48,i47,i46,i45,i44,i43,i42,i41,i40,i39,i38,i37,i36,i35,i34,i33,i32,i31,i30,i29, i28,i27,i26,i25,i24,i23, i22,i21,i20,i19,i18, i17,i16,i15,i14,i13,i12,i11,i10,i9,i8,i7,i6,i5,i4,i3,i2,i1]
//  const dArray=[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10, d11,d12,d13,d14,d15,d16,d17, d18,d19,d20,d21,d22,d23,d24,d25,d26,d27, d28,d29,d30, d31,d32,d33,d34,d35,d36,d37, d38,d39,d40, d41,d42,d43,d44,d45,d46,d47, d48,d49,d50, d51,d52,d53,d54,d55,d56,d57, d58,d59,d60, d61]
 

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
  const proTL = useRef();
  const { isMobile,resetLoco, setReset, changePp, changePointer, changeScPointer} = useAppContext();
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
      if(pintl.current){
        pintl.current.progress(0)
        // entvideo()
      }
      gsap.set(q(".head"),{
        marginBottom: "15vh"
      })
      changePp("other")
    gsap.set(q(".h2 h6, .h2 h3,.btn-container"),
    {
      opacity:0,
    })

    const headSpans = q(".headSpan");

    // gsap.set(headSpans, { yPercent: 40, autoAlpha: 0 });

    // gsap.to(
    //   headSpans,
    //   {
    //     autoAlpha: 1,
    //     duration: 0.8,
    //   },
    //   1
    // );

    // gsap.to(
    //   headSpans,
    //   {
    //     yPercent: 0,
    //     duration: 0.8,
    //   },
    //   1
    // );

  
    const spans = q(".h1 h1 ");
    const revealH2 = gsap.fromTo(
      q(".h2 h6, .h2 h3, .btn-container"),
        { y: 20 },
        {
          onStart: ()=>  {
            options.setlight2()
            gsap.to(q(".hue-can"),{
              // background: "none",
              autoAlpha:0,
              duration:.1,
              delay:.8,
          })
          },
          onReverseComplete:()=>  {
            options.main()
            gsap.to(q(".hue-can"),{
              // background: "#f5f5f7",
              autoAlpha:1,
              duration:.4,
              // delay:,
          })
          },  
          y: 0,
          duration: 6,
          autoAlpha: 1,
        }
      );
      // options.setblue();

    const cam = {
      num: 9.9,
      zednum: 17,
    }
    // const {size} = options.perlin;

    console.log('Camera')
    console.log(camera)
  
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
      .to(cam,{
        num: 0,
        zednum: 22,
        size: 6,
        duration:25,
        // scrub: true,
        onUpdate: () => {
          camera.position.set(0, cam.num, cam.zednum)
        }
      })
      .to(q(".darkLay2"), {
        autoAlpha:()=> 1,

        duration: 18,
      },"<")
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
              changeScPointer({ curchange:true, cur: cur, })
              gsap.to(el.current, {
                backgroundColor: () => txt.dataset.bg,
                ease: "none",
                autoAlpha: 1,
                // background: "transparent",
              });
            }
            const leavep = ()=>{
              gsap.to( el.current, {background: "#F5F5F7", ease: 'none', duration: .7,})
               changePointer({isHover:false,color:{bg:"#000"}})
            }
            const leaveup = ()=>{
              gsap.to( el.current, {background: "#F5F5F7", ease: 'none', duration: .7,})
              changePointer({isHover:false, color:{bg:"#000"}})
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
              onLeave: ()=> txt.classList.contains("end")? leavep() : null,
              onLeaveBack: ()=> txt.classList.contains("first")? leaveup() : null,
            
            });
          });
          proTL.current = gsap
        .timeline({
          scrollTrigger:{
            trigger: q(".process"),
            scroller: "#viewport",
            start: () => "center bottom-=10%",
            end: () => "bottom bottom-=20%",
            scrub: true,
            // markers:true,
            id: "proce",
            // invalidateOnRefresh: true,
          },
          })
          .to(q(".process-grid"),{
            xPercent: -75,
          })

          
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

      <Helmet>
        <title>Deveb | Art meets development</title>
        <meta name="description" content="A group of web artists, gathered to fulfil your digital dream and deliver it to your customers of choice." />
      </Helmet>
      <div data-scroll style={{height: "186vh", position:"absolute"}} id="mycan">
        <div data-scroll data-scroll-sticky data-scroll-target="#sti">
        <div className="hue-can" style={{position: "absolute",  width: "100vw",  height: "100vh", background: "#f5f5f7",mixBlendMode: "hue"}}></div>
       <Three/>
        </div>
      </div>
   
      
      <div id="sti" style={!isMobile ? {height: "190vh"}: {}}>
      <Head />

      </div>

      {/* <Suspense fallback={ <Loading/> }> */}
        {
          isMobile ?
            <MServHead txt="Top projects" />
          :
          null
        }
        <Showcase showcasedata={home} dataHeight="200vh" sci="i1"/>
      
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
