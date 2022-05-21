import React, { useEffect, useRef } from 'react'
import Button from '../MobileButton/MButton';
import { useAppContext } from "../../contexts/appcontext.js";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import{Link} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

export default function ShowCaseM({ showcasedata }) {

  const { isMobile } = useAppContext();

  const el = useRef();

  useEffect(() => {

    keepShowcaseSquare()
    window.addEventListener('resize', keepShowcaseSquare)

    const q = gsap.utils.selector(el);

    // const Boxes = q(".mobile-showcase-box");
    
    // Boxes.forEach( (box,idx) => {
    
    //   const bgImage = q(`.mobile-showcase-box.box-${idx} .showcase-full-img`);

    //   gsap.set(bgImage, { scale: 1.08, y: "-2vh" });

    //   gsap.to(bgImage, {
    //     scrollTrigger: {
    //       trigger: bgImage,
    //       start:()=> "top bottom+=20%",
    //       end: ()=>"bottom+=20% top-=30%",
    //       // markers:true,
    //       scrub: true,
    //       invalidateOnRefresh: true,
    //     },
    //     y: "2vh",
    //   });

    // })

    return () => {
      window.removeEventListener('scroll', keepShowcaseSquare)
    }

  }, [])

  const keepShowcaseSquare = () => {

    const sl = 'div.showcase-mobile-container .mobile-showcase-box .showcase-container'
    const showCaseContainers = document.querySelectorAll(sl)

    // console.log('showCaseContainers')
    // console.log(showCaseContainers)

    if( showCaseContainers.length ) {

      showCaseContainers.forEach( el => {
        
        el.style.height = el.offsetWidth + 'px'

      })
    }
  }

  return isMobile ? <div className="showcase-mobile-container" ref={el} >
    {
      showcasedata.map( (item,idx) => {

        const{ h4, img, id, p, a} = item;
        const { klass, cover} = img
  
        return (
          <div className={`mobile-showcase-box box-${idx} ${ p === '' ? 'h-showcase' : 'w-des' }`} key={id} >
            
            <div className={`showcase-container ${klass} `} >
              <Link to={a.url}>
              <div className={`showcase-full-img ${klass}`}  
              style={{backgroundImage:" url(" +cover+")"}}
              >
              </div>
              </Link>
            </div>
  
            <h4>{h4}</h4>

            { p===""? null:  <p >{p}</p> }
  
            <Button url={a.url} text="View more" />
  
          </div>
        )
      })
    }
  </div>
  :
  <></>
}
