import gsap from "gsap/all";
import React, {useEffect, useState, useRef, useCallback} from "react"
import "./scrollbar.scss"

const Scrollbar = (props)=>{
    const observer = useRef();
    const contentRef = useRef();
    const scrollThumbRef= useRef();
    const scrollTrackRef = useRef();
    const [thumbHeight, setThumbHeight] = useState(20);
    const [hovering, setHovering] = useState(false);
    const [scrollBoxTop, setTop] = useState(0);
    const calcHeight = (el)=>{
      const { clientHeight, scrollHeight } = el;
      setThumbHeight(Math.max((clientHeight / scrollHeight)/ clientHeight*100000, 20))
    }

    const handleScroll =(e) => {
      if (!contentRef) {
        return;
      }
      const content = contentRef.current;
      const { scrollHeight, offsetHeight } = content;
      var scrolltop =e.srcElement.body.scrollTop;
      let newTop =
        (parseInt(scrolltop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
        
        console.log(offsetHeight - thumbHeight);
        // newTop = newTop + parseInt(scrollTop, 10);
        newTop = Math.min(newTop, offsetHeight - thumbHeight);
        console.log(newTop, thumbHeight, scrolltop, scrollHeight, offsetHeight);
      setTop(newTop);
    };
    useEffect(()=>{
      console.log( 1)
      calcHeight(contentRef.current )
      window.addEventListener("scroll", handleScroll, true);
    return function cleanup() {
      contentRef.current.removeEventListener("scroll", handleScroll, true);
    };
    },[])
    const handleMouseOver = () => {
      setHovering(true);
    };
    const handleMouseOut =() => {
      setHovering(false);
    };

    return(
        <>
        <div ref={contentRef}>
            {props.children}
        </div>
        <div className="cs-wrapper" 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <div className="cs-track" ref={scrollTrackRef}></div>
            <div className="cs-thumb" ref={scrollThumbRef}  
           style={ 
             { 
              opacity: hovering ? 1 : 0 ,
              height: thumbHeight,
              top: scrollBoxTop
             }
            }></div>
        </div>
        </>
    )
}
export default Scrollbar;