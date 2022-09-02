import React, { lazy, Suspense, useEffect, useRef } from 'react'
import Head from'../components/homeheader.js'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap"
// import Loading from "./Loading.js"
import { home } from '../utils/constans.js'
import useLoco from '../utils/useLoco.js';
import { useAppContext } from "../contexts/appcontext.js";
import "../serv.scss";
import Process from '../components/process.js'
import Footer from'../components/footer.js'
import Showcase  from '../components/showcase.js'
import Helmet from 'react-helmet';
import Three from '../components/Blob/Three.js';
import { options, camera } from '../components/Blob/utils'

const MServHead = lazy( () => import('../components/MServiceHead/MobileServiceHead'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))
const Loading = lazy( () => import('./Loading.js'))



const HomePage = () => {
  const pintl = useRef();
  const el = useRef();
  const proTL = useRef();
  const { isMobile,resetLoco, setReset, changePp, changePointer, changeScPointer, changePT} = useAppContext();
  useLoco(!isMobile)
  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.selector(el);
  const fooT= useRef();
  const imageTimeline = useRef();
 
  useEffect(() => {
    changePT("Home");
    setTimeout(() => {
      setReset()
    }, 500);
    return ()=>{
      }
    }, [isMobile])

  useEffect(()=>{
   
    changePT("Home");
    const changeBg = (dir)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (dir === 1? 1: 0),
        duration:1
      })
      dir === 1? changePp("Contact"): changePp("other")
    }
    if (isMobile=== false){
      console.log("runnig web")
       options.setlightpink();
      if(pintl.current){
        pintl.current.progress(0)
      }
      if( proTL.current ){
        proTL.current.progress(0)
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
             options.setlightpink()

            gsap.to(q(".hue-can"),{
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

  
    pintl.current = gsap
      .timeline({
        scrollTrigger: {
          scroller:"#viewport",
          trigger: q(".head"),
          start:()=> "top top",
          end:()=> "bottom top+=10%",
          id:"pintl",

          scrub: 0.5,
        },
      })
      .to(cam,{
        num: 0,
        zednum: 22,
        duration:25,
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
      
            function updateBodyColor() {
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
          
           imagewrap.forEach((it,j)=>{
          
            gsap.set(imageArrayfull, {
              zIndex: (i, target, targets) => targets.length - i,
            });
            const name = ".show-images."+ "r" +j + " .show-image:not(.end)";
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
           }
          }
          else if(isMobile){
           console.log("runnig mobile")

            el.current.style.transform="none";
            gsap.set(q("section.head"),{
              clearProps: "transform"
            })
            gsap.set(q(".process-grid, .prtrig"),{
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

      <Suspense fallback={ <Loading/> }>
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
       

      </Suspense>

    </main>
  )
}

export default HomePage
