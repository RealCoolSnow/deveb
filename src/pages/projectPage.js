import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { prjData } from "../utils/projectsData.js";
import "../projects.scss";
import { gsap } from "gsap";
import Textbox from "../components/textbox/textbox.js";
import Coverimage from "../components/textbox/coverimage.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading.js"
import SplitText from "../utils/split3.js"
import useLoco,{ scrolltop} from '../utils/useLoco.js'
import Footer from'../components/footer.js'
import FooterMB from '../components/footermb.jsx'
import { useAppContext } from "../contexts/appcontext.js";
import Helmet from "react-helmet";
import Button from "../components/textbox/button.js";
import Buttonsec from "../components/textbox//buttonsec.js"


gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const { isMobile, resetLoco, changePp, changePointer } = useAppContext();
 
  const [project, setProject] = useState();
  const el = useRef();
  const fooT= useRef();
  let { id } = useParams();
  useLoco(!isMobile)
  

  // const prName = "project" + id.split("pr")[1].split("-")[0];
  const category = window.location.href.split("projects/")[1];
  // console.log(category)

  const finded = prjData.filter(
    (pr) =>
       pr.family === category
      // pr.family === prName && pr.tags.includes(category) && pr.a.url !== id

  );

  let newArr = [];

  // const clickedItem = prjData.filter((pr) => pr.a.url === id);

  newArr = [...finded];
  const title= finded[0]? finded[0].elements[0].h3: ""
  // console.log(finded)

  const callUpd = () => {
    return setProject(newArr);
  };
 
  useLayoutEffect(()=>{
    const q = gsap.utils.selector(el);
  
    gsap.set(q("h3"), {autoAlpha:0, y: 20,});
    gsap.set(q(".cover.full-H")[0], {autoAlpha:0, yPercent:10,});


  },[isMobile])

  useEffect(() => {
    const q = gsap.utils.selector(el);
    // gsap.set(q("h1"),{autoAlpha:1})
    const split = new SplitText("#headLines", {
      type: "lines",
      linesClass: "lineChildren",
    });
    gsap.to(split.lines,{
      y: 0,
      duration:.4,
      delay:.65,
      stagger: .1,
    })
    gsap.to(q("h3"),{
      y: 0,
      duration:.4,
      delay:.45,
      // stagger: .1,
    })
    gsap.to(split.lines,{
      autoAlpha: 1 ,
      duration:.85,
      delay:.65,
      stagger: .1,
    })
    gsap.to(q("h3"),{
      autoAlpha: 1,
      duration:.865,
      delay:.45,
      // stagger: .1,
    })
    gsap.to(q(".cover.full-H")[0], 
     {
        autoAlpha:1, yPercent:0,
        duration:.4,
        delay:.8,
     }
    );
    changePointer({isHover: false})
  
    if(!isMobile){
      const images = q(".cover");
      // const fulimages = q(".show-image");
  
      images.forEach((image, i) => {
        // const nextImage = image.nextElementSibling;
        // console.log(image[i+1])
       var imageTimeline = gsap.timeline({
          scrollTrigger: {
            scroller:"[data-scroll-container]",
            trigger: image,
            start: () => "top bottom",
            endTrigger: image,
            end: () =>  "bottom top",
            scrub: true,
            id:"repeat"+ i,
            // invalidateOnRefresh: true,
            // markers:true,
          },
        })
  
        .fromTo(
          image,
          {
            backgroundPosition: () => "0% 0%",
          },
          {
            backgroundPosition: () => "0 100%",
            ease: "none",
          },
          0
        )}
        )}
    
  }, [isMobile]);
  useEffect(()=>{
    
    const q = gsap.utils.selector(el);
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }

if(!isMobile){
    
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
       }
      } else if( isMobile){
        el.current.style.transform="none";
        
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
           }
      }
  },[resetLoco, isMobile])

  return(
    <main className="single-pj" ref={el} id="viewport" data-scroll-container>
      
       <Helmet>
        <title>{`Deveb | ${title ? title : ""}`}</title>
        <meta name="description" content={`About how we built ${title? title: ""} `} />
       </Helmet>

       {newArr.map((i) => {
    const { img, id, elements } = i;
    return (
      <>
      {/* <div key={id} className="single-pr-co">
        <img src={img.url} loading="lazy" decoding="async" />
      </div> */}
      {  
         elements.map(elem =>{
          const{type}= elem;
          if (type === "cover") {
            const {width, height, double, h2, id, align,mt,src,pb, end }= elem
            // console.log(double)
            return (
              <Coverimage key={id} width={width} height={height} mt={mt} double={double} h2={h2} align={align} img={src} pb={pb} end={end}/>
            )
          } 
          else if(type === "textbox"){
            const{h1,h2,h3,pi, width, alignment, id, double, mt, h2width, } = elem;
            return <Textbox key={id} h1={h1} h2={h2} h3={h3} pi={pi} mb={isMobile} mt={mt} double={double} width={width} alignment={alignment} h2width={h2width} />
          }
          else if(type === "button"){
            const {url, id} = elem;
            return <Button key={id} url={url}/>
          }
          else if(type === "butsec"){
            const {url, id, width, height, double, h2, align,mt,src,pb, end } = elem;
            return <Buttonsec key={id} width={width} height={height} mt={mt} double={double} h2={h2} align={align} img={src} url={url}/>
          }
        })
      }
      </>
    );
  })}
   {
      isMobile?  <FooterMB />: <Footer prj={true} /> 
    }
    </main>
  );
};
export default ProjectPage;
