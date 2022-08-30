import React, { useEffect, useState, lazy, Suspense, useRef} from 'react'
import ProHead from '../components/projectshead.js'
import { useAppContext } from "../contexts/appcontext.js";
import Footer from '../components/footer.js'
import FooterMB from '../components/footermb.jsx'

import { prjData } from '../utils/projectsData.js'
import { useParams } from 'react-router'
import {gsap} from 'gsap';
import useLoco from '../utils/useLoco.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading.js"
import PrjCon from'../components/projectscontainer.js'


const PrjContain = lazy( () => import('../components/projectscontainer.js'))
const Test = () => {
  const [cat, setCat] = useState('Projects');
  // const init= prjData.filter( (ei) => ei.tags.includes('Projects') )
  const [projects, setProjects] = useState(prjData);
  const my = useRef()
  const mymb = useRef()
  const el = useRef();
  const q = gsap.utils.selector(el);
  const fooT= useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { setReset, resetLoco, changePT,changePp,isMobile,changePointer } = useAppContext();
  useLoco(!isMobile);
  const darklay1 = {
    position: "absolute",
    width: "100%",
    height: "200%",
    top: 0,
    background: "black",
    zIndex: 1,
  }
  const { tag } = useParams();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    changePointer({isHover: false})
    // if(window.location.hash){
    //   var hashcat= window.location.hash.split("#")[1];
    //   if(hashcat === "3dr"){catFunction("3DRendering")}
    //   if(hashcat === "VR"){catFunction("Virtual tour")}
    //   if(hashcat === "3dm"){catFunction("3D Model")}
    //   if(hashcat === "In"){catFunction("Interior")}
    //   if(hashcat === "Ex"){catFunction("Exterior")}
    //   if(hashcat === "Ani"){catFunction("Animation")}
    //   if(hashcat === "Con"){catFunction("Concept")}


    //   // else if(hashcat !== "3dr" && hashcat !== "VR" && hashcat !== "3dm") {catFunction(hashcat.charAt(0).toUpperCase() + hashcat.slice(1))}
    // }
    setTimeout(() => {
      setReset()
    }, 550);

    changePT("Deveb-Projects");
    document.title = "Deveb-Projects";
    // if( tag ) {
    //   const newTag = tag[0].toUpperCase() + tag.substr(1)

    //   setCat(newTag)
    // }

  }, [isMobile])
 
  useEffect(()=>{
   
    if(!isMobile){
      changePp("other")
      if(my.current ){
        my.current.progress(0)
      }
    my.current = gsap.timeline({
        scrollTrigger:{
          scroller: "#viewport",
          trigger: q(".fade"),
          start: () => "top top",
          end: () => "65% top",
          scrub:true,
        //   markers:true,
          ease:"none",
        },
      })
      .to(q(".fade"), {autoAlpha:0 });

      const oddItems = q(".project").filter(function (element, index) {
        return index % 2 !== 0;
      });
      const evenItems = q(".project ").filter(function (element, index) {
        return index % 2 === 0;
      });
   
      const scaledProjectsRef = q(".project").slice(0, 2);
  
      const parallexT = gsap.timeline({
        scrollTrigger: {
          trigger: scaledProjectsRef[0],
          scroller:"#viewport",
          start: ()=>"center bottom",
          endTrigger: q(".pro-cont"),
          end: ()=>"bottom+=10% bottom",
          scrub: true,
          ease:"none",
          onEnter: ()=> console.log("run paralax"),
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
        const changeBg = (direction)=>{
          gsap.to(el.current, { 
            backgroundColor:()=> direction === 1?"#f5f5f7" : "#ffffff",
            duration:1
          })
          gsap.to(q(".backgr"), { 
            autoAlpha: ()=> (direction === 1? 1: 0),
            duration:1
          })
          direction === 1? changePp("Contact"): changePp("other")
        }
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
             duration:1,
           }, "<")
          
           return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
            parallexT.kill();
            if(parallexT.ScrollTrigger){
              parallexT.ScrollTrigger.kill()
            }
            my.current.kill();
            if( my.current.ScrollTrigger){
              my.current.ScrollTrigger.kill()
            }
           }
          }
          else if (isMobile){
            el.current.style.transform="none";
            gsap.set(el.current,{transform:"none"})
            gsap.set(q(".pro-sec main"),{
              clearProps: "transform"
            })
            gsap.set(q(".fade"), {autoAlpha:1 })
            // gsap.to(q("#stickbb h1"), {autoAlpha: 1, duration:.5, onComplete: ()=> ScrollTrigger.refresh()})
           my.current = gsap.timeline({
              scrollTrigger:{
                trigger: q(".pro-sec"),
                start: () => "top top",
                end: () => "center top",
                scrub:true,
                ease:"none",
                // markers: true,
              },
            })
            .to(q(".darklay2"), {autoAlpha:1 })
            .to(q(".fade-layer1"), {autoAlpha:0 });

            const changeBg = (direction)=>{
              gsap.to(q(".backgr"), { 
                autoAlpha: ()=> (direction === 1? 1: 0),
                duration:1
              })
              direction === 1? changePp("Contact"): changePp("other")
            }
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
               }, "<");
             
              
               return()=>{
                fooT.current.kill()
                if( fooT.current.ScrollTrigger){
                  fooT.current.ScrollTrigger.kill();
                }
                my.current.kill();
                if(my.current.ScrollTrigger){
                  my.current.ScrollTrigger.kill();
                }
               }
          
          }
  }, [resetLoco, isMobile])

  const catFunction = (input)=>{
    setCat(input);
    const newProjects = prjData.filter( (ei) => ei.tags.includes(input) )
    setProjects(newProjects);
    console.log("running catFunc")
    setReset();
  }

  return( 
    <main id="viewport" ref={el} data-scroll-container className="projects-page" >
      <div className="fade" >
        {/* <div className="fade-layer1" style={darklay1}></div> */}

       <ProHead Cat={cat} catFunction={catFunction} width={width}/>
      </div>
      {
        isMobile && ( <PrjCon projects={projects} Cat={cat}/>)
      }

      <Suspense fallback={  <Loading/> } >

       { !isMobile && <PrjContain projects={projects} Cat={cat}/>}
      {
        !isMobile ? <Footer /> : <FooterMB/>
      }
        
      </Suspense>

    </main>
  )
}

export default Test;