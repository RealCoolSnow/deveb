import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";

export default function SecondaryBtn({ txt, isStatic = false, isActive, primary = false, trigger, children, refrence }) {
  
  const [isHover,setIsHover] = useState(false)

  const btn = useRef();

  useEffect(() => {

    if( isStatic ) {
      setIsHover(true)
      showBgHover()
      return
    }

  }, [])

  useEffect(() => {

    // console.log(`isHover: ${isHover},isActive: ${isActive}`)

    if( isStatic ) return () => {}

    if( isActive ) return

    if ( isHover ) {
      showBgHover()
    } else if ( !isHover ) {
      hideBgHover()
    }
  }, [isHover,isActive])

  useEffect(() => {

    if( isStatic ) return () => {}
    
    if( isActive && !isHover ) {
      showBgHover()
      toggleHover()
    } else if ( !isActive ) {
      hideBgHover()
    } 

  }, [isActive])


  const callTrigger = () => {

    if( isActive ) setIsHover(false)

    trigger()
  }

  const showBgHover = () => {

    const q = gsap.utils.selector(btn);

    const ripple = q(".bg-hover");
    const teXt = q("span");

    gsap.to(ripple, 0, { yPercent: -100, borderRadius: 50, autoAlpha: 1 });

    gsap.to(ripple, 0.5, {
      yPercent: 0,
      borderRadius: 0,
    });

    gsap.to(teXt, 0.3, {
      color: "#000",
      fill: "#000"
    });

    gsap.to(teXt, 0.5, {
      transformOrigin: "left top",
      yPercent: -130,
      skewY: -3,
    });

  }

  const hideBgHover = () => {

    const q = gsap.utils.selector(btn);

    const ripple = q(".bg-hover");
    const teXt = q("span");
    
    gsap.to(ripple, 0.5, {
      yPercent: 101,
      borderRadius: 50,
    });
    gsap.to(teXt, 0.4, {
      color: "#fff",
      fill: "#fff"
    });
    gsap.to(teXt, 0.5, {
      transformOrigin: "left top",
      yPercent: 0,
      skewY: 0,
    });
  }

  const toggleHover = () => {
    // setTimeout( () => {
      setIsHover(!isHover)
    // },0)
  }

  return children ?
      (
        <a className={`btn btn-2 sec-btn ${ primary ? 'primary' : '' }`}
          ref={btn}
          onMouseEnter={ toggleHover }
          onMouseLeave={ toggleHover }
          onBlur={ toggleHover }
          onClick={ () => refrence.current.click() }
        >

          {
            children
          }

          <div className="bg-hover"></div>
          
        </a>
      )
    :
      !isStatic ? 
        (
          <a className={`btn btn-2 sec-btn ${ isActive ? 'active' : ''} ${ primary ? 'primary' : '' }`} 
            ref={btn} type="button" onClick={callTrigger} 
            onMouseEnter={ () => setIsHover(true) }
            onMouseLeave={ () => setIsHover(false) }
          >

            <span >{ txt }</span>

            <div className="bg-hover"></div>

          </a>
        )
      :
        (
          <a className={`btn btn-2 sec-btn active ${ primary ? 'primary' : '' }`} ref={btn} type="button" onClick={callTrigger} >

            <span>{ txt }</span>

            <div className="bg-hover"></div>
            
          </a>
        )
}
