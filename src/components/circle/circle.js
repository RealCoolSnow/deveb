import React,{ useEffect, useRef } from "react"
import gsap from "gsap";
import "./circle.scss"
import { useAppContext } from "../../contexts/appcontext.js";

        
        const Circle = ({size})=>{
  const { isMobile, pointer } = useAppContext();
  const {isHover, color, text, blend, fsize, curchange, cur, sesize} = pointer;
 
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(()=>{
    // const circ = q(".circle")
    const moveCursor= (e)=>{
      gsap.to(el.current, {
        x: e.clientX,
        y: e.clientY,
        duration:.3,
        ease:"Power3.Out",
        // delay: .1,
    });
    }
   
    document.addEventListener("mousemove", moveCursor)
  },[])
  useEffect(()=>{
    if(isHover){
      gsap.to(el.current, {
        scale:()=> sesize? sesize: 1.7,
        duration: .4,
        ease: "Power3.InOut",
      });
      if(fsize) {el.current.childNodes[0].style.fontSize= fsize;}

      if(blend){
        gsap.to(el.current,{
          background: color.bg,
          duration: 0,
        ease: "Power3.InOut",
        });
        el.current.style.mixBlendMode="difference";
        // console.log(el.current.childNodes[0]);
        if(fsize) {el.current.childNodes[0].style.fontSize= fsize;}
      }  
      if(color){
        gsap.to(q("p"),{
          color: color.txt,
          duration: .3,
        ease: "Power3.InOut",
        })
        gsap.to(el.current,{
          background: color.bg,
          duration: 0,
        ease: "Power3.InOut",
        })
      }
    }
    else {
      gsap.to(el.current,{
        scale: .22,
        duration: .4,
        ease: "Power3.InOut",
        // background:"#ffffff"
      });
      el.current.style.mixBlendMode="normal";
    }
  }, [isHover,color,isMobile])
  useEffect(()=>{
    if(!isHover){
      gsap.to(el.current,{
        duration: 0,
        ease: "Power3.InOut",
        // background:()=> color? color.bg :"#000000"
        background:()=> "#000000"
      })
    }
  }, [isHover, color])
  useEffect(()=>{
    if(curchange){
      isHover && (
        gsap.to(el.current,{
          duration: 0,
          ease: "Power3.InOut",
          background:()=> color? color.bg: cur ,
        })
      )
      !isHover && (
        gsap.to(el.current,{
          duration: 0,
          ease: "Power3.InOut",
          background:()=> cur? cur:color.bg ,
        })
      )
    
    }
  },[curchange, cur, color, isHover])
  return(
    <div className={`circle ${size}`} ref={el}>{text?  (<p>{text}</p>) : null}</div>
  )
}
  export default Circle;