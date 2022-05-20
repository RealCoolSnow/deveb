import React,{ useRef} from "react"
import gsap from "gsap";
import "./circle.scss"
import { useEffect } from "react/cjs/react.development";
import { useAppContext } from "../../contexts/appcontext.js";
//  const  Circle = forwardRef(({ size, delay }, ref) => {
  //     const el = useRef();
  
  //     useImperativeHandle(ref, () => {           
    
    //       // return our API
    //       return {
      //         moveTo(x, y) {
        //           gsap.to(el.current, { x, y, delay });
        //         }
        //       };
        //     }, [delay]);
        
        //     return <div className={`circle ${size}`} ref={el}></div>;
        //   });
        
        const Circle = ({ size})=>{
  const { isMobile, pointer } = useAppContext();
  const {isHover, color, text} = pointer;
 
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(()=>{
    const circ = q(".circle")
    const moveCursor= (e)=>{
      gsap.to(el.current, {
        x: e.clientX,
        y: e.clientY,
        duration:.4,
        ease:"Power3.Out",
        // delay: .1,
    });
    }
   
    document.addEventListener("mousemove", moveCursor)
  },[])
  useEffect(()=>{
    if(isHover){
      gsap.to(el.current, {
        scale: 1.7,
        duration: .4,
        ease: "Power3.InOut",
      });
      if(color){
        gsap.to(q("p"),{
          color: color.txt,
          duration: .3,
        ease: "Power3.InOut",
        })
        gsap.to(el.current,{
          background: color.bg,
          duration: .2,
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
      })
    }
  }, [isHover,color])
  useEffect(()=>{
    if(!isHover){
      gsap.to(el.current,{
        duration: .2,
        ease: "Power3.InOut",
        background:"#ffffff"
      })
    }
  }, [isHover])
  return(
    <div className={`circle ${size}`} ref={el}>{text?  (<p>{text}</p>) : null}</div>
  )
}
  export default Circle;
 