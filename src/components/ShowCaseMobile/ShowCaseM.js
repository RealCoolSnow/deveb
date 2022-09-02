import React, { useEffect, useRef } from 'react'
import Button from '../MobileButton/MButton';
import { useAppContext } from "../../contexts/appcontext.js";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import{Link} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

export default function ShowCaseM({ showcasedata }) {

  const { isMobile } = useAppContext();


  

  return isMobile ? <div className="showcase-mobile-container" >
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
