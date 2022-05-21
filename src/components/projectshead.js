import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "./SecondaryBtn/SecondaryBtn";
// import Button from "./button.js";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useAppContext } from "../contexts/appcontext.js";

const ProHead = ({ Cat, catFunction }) => {
  const { isMobile, setReset, resetLoco} = useAppContext();

  const [activeTag, setActiveTag] = useState("");

  const [btnhover, setbtnHover] = useState(false);
  const el = useRef();
  const myTl = useRef();
  const prjTl = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  const darklay2 = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background: "black",
    zIndex: 100,
    opacity:0,
  }
  useLayoutEffect(() => {
    const heading = q("#stickbb h1");
    const lines = q(".fil-contain .lines");

    gsap.set([heading, lines], {
      yPercent: 60,
      autoAlpha: 0,
    });
    return () => {
    };
  }, [isMobile])
  useEffect(()=>{
    const heading = q("h1");
    const lines = q(".fil-contain .lines");
    prjTl.current = gsap.timeline();
    prjTl.current.to([heading, lines[0], lines[1]], {
      yPercent: 0,
      duration: 0.6,
      stagger: {
        amount: 0.28,
        ease: "power2.Out",
      },
    }, .4)

    .to([heading, lines[0], lines[1]], {
      autoAlpha: 1,
      duration: 1.2,
      stagger: {
        amount: 0.3,
        ease: "power2.Out",
      },
    }, .4);
  },[isMobile])

useEffect(()=>{
  const myHash = document.location.hash.slice(1);
  if(isMobile ){
    setTimeout(() => {
      if(myHash === "3dr"){
      setActiveTag("Rendering")
    }
    else
    if(myHash === "3dm"){
      setActiveTag("3D Model")
    } else
    if(myHash === "VR"){
      setActiveTag("Virtual tour")
    } else
    if(myHash === "In"){
      setActiveTag("Interior")
    } else
    if(myHash === "Ex"){
      setActiveTag("Exterior")
    } else
    if(myHash === "Ani"){
      setActiveTag("Animation")
    } else
    if(myHash === "Con"){
      setActiveTag("Concept")
    }
    
    else if(!myHash){  setActiveTag("Projects")}
    else
    setActiveTag(document.location.hash.slice(1))
  }, 300);
   
  }
  else {
  setTimeout(() => {
    if(myHash === "3dr"){
      setActiveTag("3D Rendering") 
    
    } else
    if(myHash === "3dm"){
      setActiveTag("3D Model")
    } else
    if(myHash === "VR"){
      setActiveTag("Virtual tour")
    } else
    if(myHash === "In"){
      setActiveTag("Interior")
    } else
    if(myHash === "Ex"){
      setActiveTag("Exterior")
    } else
    if(myHash === "Ani"){
      setActiveTag("Animation")
    } else
    if(myHash === "Con"){
      setActiveTag("Concept")
    }
    
    else if(!myHash){  setActiveTag("Projects")}
    else
    setActiveTag(document.location.hash.slice(1))

  }, 300);
  }
 
},[isMobile])

  const tags = ['Projects','Interior','Exterior','Animation','3D Rendering', 'Concept', 'Virtual tour', '3D Model']
  const mTags = ['Projects','Interior','Exterior', 'Concept', 'Animation','Rendering', 'Virtual tour', '3D Model']

  const mapButtons = (txt) => (
 
    <Button
      key={txt}
      txt={txt}
      isActive={ activeTag === txt }
      trigger={ () => changeActiveTag(txt) }
    />  
  )

  const changeActiveTag = (name) => {
    if( activeTag !== name ) {
      setActiveTag(name)
      if(name === "Rendering" || name === "3D Rendering"){
        catFunction("3D Rendering");
     
        window.history.replaceState(null, '', `/projects#3dr`)
      } else 
      if(name === "Virtual tour"){
        window.history.replaceState(null, '', `/projects#VR`)
        catFunction(name)
      } else
      if(name === "3D Model"){
      window.history.replaceState(null, '', `/projects#3dm`)
      catFunction(name)
    } else
    // if(name === "3D Rendering"){
    //   window.history.replaceState(null, '', `/projects#3dr`)
      
    // }
    // else
    if(name === "Interior"){
      window.history.replaceState(null, '', `/projects#In`)
      catFunction(name)
    }
    else
    if(name === "Exterior"){
      window.history.replaceState(null, '', `/projects#Ex`)
      catFunction(name)
    }
    else
    if(name === "Concept"){
      window.history.replaceState(null, '', `/projects#Con`)
      catFunction(name)
    }
    else
    if(name === "Animation"){
      window.history.replaceState(null, '', `/projects#Ani`)
      catFunction(name)
    }
    else
    if(name === "Projects"){
      window.history.replaceState(null, '', `/projects`)
      catFunction(name)
    }
    // else  
    // window.history.replaceState(null, '', `/projects#${name}`)
    // name !=="Rendering" && catFunction(name)
    }
  }

  return (
    <section className="pro-sec"   id="stickbb" ref={el}>
    
      <main data-scroll data-scroll-sticky data-scroll-target="#stickbb">
        {/* <div className="darklay2" style={darklay2}></div> */}
      <div className="darklayer"></div>
        <h1>Take a look at some of our</h1>

        <div className="fil-contain">

          <div className="little-fade left-fade"></div>

          <div className="lines">

            {
              !isMobile ? 
                tags.slice(0,3).map( mapButtons )
              :
                mTags.slice(0,4).map( mapButtons )
            }

            <div className="extra-space"></div>

          </div>

          <div className="lines">

            {
              !isMobile ? 
                tags.slice(3).map( mapButtons )
              :
                mTags.slice(4).map( mapButtons )
            }

            <div className="extra-space"></div>

          </div>

          <div className="little-fade right-fade"></div>

        </div>
      </main>
    </section>
  );
};
export default ProHead;
