import React, { lazy, Suspense, useEffect, useRef } from 'react'
import Head from'../components/homeheader.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
import TestingCompo from '../components/testcompo.js';
// import Con from'../components/contact.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import { home, homeExt } from '../utils/constans.js'
import useLoco from '../utils/useLoco.js';
import { useAppContext } from "../contexts/appcontext.js";
import Bowser from "bowser";
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

// const Loading = lazy( () => import('./Loading.js'))
const HomePage = () => {
  const h2wrap = useRef();
  const pintl = useRef();
  const el = useRef();
  const tl = useRef();
  const proTL = useRef();
  const { isMobile,resetLoco, setReset, changePp, changePointer, changeScPointer, changePT} = useAppContext();
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
    changePT("Home");
    setTimeout(() => {
      setReset()
    }, 500);
    return ()=>{
      }
    }, [isMobile])
    const ref = React.createRef();
    const refviz = React.createRef();
  
  useEffect(()=>{
    // const browser = Bowser.getParser(window.navigator.userAgent);

// console.log(`The current browser name is "${browser.getBrowserName()}"`);
    // window.onload = function () {
      // var uagent = browser.getBrowserName();
      // var safari = uagent.match(/safari\/(\S+)/);
      // console.log(uagent)
      //  if(uagent === "Safari"){
        // options.setpurple();
        // gsap.set(q(".hue-can"), {autoAlpha:0})
      //  }
    // }
   
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }
    if (!isMobile){
       options.setlightpink();
      if(pintl.current){
        pintl.current.progress(0)
        // entvideo()
      }
      if( proTL.current ){
        proTL.current.progress(0)
        // entvideo()
      }
      camera.position.set(0, 9.9, 17)
      gsap.set(q(".head"),{
        marginBottom: "15vh"
      })
      changePp("other")
    gsap.set(q(".h2 h6, .h2 h3,.btn-container"),
    {
      opacity:0,
    })

    const headSpans = q(".headSpan");

  
    const spans = q(".h1 h1 ");
    const revealH2 = gsap.fromTo(
      q(".h2 h6, .h2 h3, .btn-container"),
        { y: 20 },
        {
          onStart: ()=>  {
          
              options.setlight2()
            //  options.setlightpink()
            gsap.to(q(".hue-can"),{
              // background: "none",
              autoAlpha:0,
              duration:.1,
              delay:.7,
          })
        
          },
          onReverseComplete:()=>  {
            // uagent !== "Safari" && 
             options.setlightpink()
            // uagent === "Safari" &&  options.setpurple()

            gsap.to(q(".hue-can"),{
              // background: "#f5f5f7",
              autoAlpha:()=> 0,
              duration:.4,
          })
          },  
          y: 0,
          duration: 6,
          autoAlpha: 1,
        }
      );

    const cam = {
      num: 9.9,
      zednum: 17,
    }

    // console.log('Camera')
    // console.log(camera)
  
    pintl.current = gsap
      .timeline({
        scrollTrigger: {
          scroller:"#viewport",
          trigger: q(".head"),
          start:()=> "top top",
          end:()=> "bottom top+=10%",
          // markers:true,
          id:"pintl",
          // pin:true,
          // pinReparent:true,
          // anticipatePin:1,
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

      fooT.current = gsap
        .timeline({
          scrollTrigger: {
            scroller: "#viewport",
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
           }, "<");

           const aside = q(".aside");
           const texts = q(".grid-text-contain .span-back");

           texts.forEach((txt) => {
      
            function updateBodyColor(color) {
              var bg = txt.dataset.bg;
              var cur = txt.dataset.cur;
              changeScPointer({ curchange:true, cur: cur, })
              gsap.to(el.current, {
                backgroundColor: () => txt.dataset.bg,
                ease: "none",
                autoAlpha: 1,
              });
            }
            const leavep = ()=>{
              gsap.to( el.current, {background: "#F5F5F7", ease: 'none', duration: .7,})
               changePointer({isHover:false,color:{bg:"#000"}})
            }
            const leaveup = ()=>{
              gsap.to( el.current, {background: "#ffffff", ease: 'none', duration: .7,})
              changePointer({isHover:false, color:{bg:"#000"}})
            }
      
            ScrollTrigger.create({
              trigger: txt,
              scroller: "#viewport",
              start: () => "top bottom-=10%",
              end: () => "bottom top",
              // markers:true,
              id: "showcaseGradient",
              invalidateOnRefresh: true,
              onEnter: () => updateBodyColor(),
              onEnterBack: () => updateBodyColor(),
              onLeave: ()=> txt.classList.contains("end")? leavep(0) : null,
              onLeaveBack: ()=> txt.classList.contains("first")? leaveup(1) : null,
            
            });
          });
          proTL.current = gsap
        .timeline({
          scrollTrigger:{
            trigger: q(".process"),
            scroller: "#viewport",
            // start: () => "center bottom-=10%",
            start: () => "center bottom+=10%",

            end: () => "bottom bottom-=20%",
            scrub: true,
            // markers:true,
            id: "proce",
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
                          // anticipatePin: 1,
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

                    // ScrollTrigger.create({
                    //   scroller:"#viewport",
                    //   trigger: imagewrap[j],
                    //   start: ()=> "center center",
                    //   endTrigger: endTr[j],
                    //   end: ()=> "bottom bottom",
                    //   id: "pinSc",
                    //  });
            })
            
            return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
           if( pintl.current.ScrollTrigger){
            pintl.current.ScrollTrigger.kill()
           }
           if(pintl.current){
            pintl.current.kill();
           }
           if( proTL.current.ScrollTrigger){
            proTL.current.ScrollTrigger.kill()
           }
           if(proTL.current){
            proTL.current.kill();
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
            if(ScrollTrigger.getById("showcasegradient")){
              ScrollTrigger.getById("showcasegradient").kill()
            }
            if(imageTimeline.current){
              imageTimeline.current.kill()
            }
            // camera.position.set(0, -12, 50)
            // if(ScrollTrigger.getById("pinSc")){
            //   ScrollTrigger.getById("pinSc").kill()
            // }
            // imageTimeline.current.kill()
           }
          }
          else if(isMobile){
            el.current.style.transform="none";
            gsap.set(q("section.head"),{
              clearProps: "transform"
            })
            options.setlightpink();
            if(pintl.current){
              pintl.current.progress(0)
              // entvideo()
            }
            // entvideo()
            camera.position.set(0, -11, 50);
            gsap.set(q(".h2.home h3, .h2.home h6"),{
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
        <title>Deveb | Branding, Design, Development</title>
        <meta name="description" content="We create websites, UI/UX design, and shape brands. Deveb team has a solid design and development expertise." />
      </Helmet>
      <div data-scroll style={{height: "100vh", position:"absolute"}} id="mycan">
        <div data-scroll data-scroll-sticky data-scroll-target="#sti">
        <div className="hue-can" style={{position: "relative",  width: "100vw",  height: "100vh", background: "#f5f5f7",mixBlendMode: "hue", opacity:"0"}}></div>
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
