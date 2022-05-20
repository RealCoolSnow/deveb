import React, { useEffect, useState, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { lines, linesM } from "../utils/about";
import aboutImg1 from "../assets/about.jpg";
import aboutImg2 from "../assets/about2.jpg";
import { Link } from "react-router-dom";

const aboutText = 'We are a team of listeners, problem solvers and creative thinkers determined to craft truly singular spaces for each of our clients. We design without ego and work hard to build meaningful and lasting relationships with our clients.'

const splitted = aboutText.split(' ')
const seperators = ['.',',']

const AbHead = () => {

  const aboutWrapper = useRef(null);
  const photoContainer = useRef(null);
  const SceneContainer = useRef(null);
  
  // Scene 1
  const Scene1 = useRef(null);
  const [scene1Lines,setScene1Lines] = useState([]);
  const [scene1ActiveLine,setScene1ActiveLine] = useState(0);

  const [scrollFromTop,setScrollFromTop] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  const onSceneScroll = (e) => {

    console.log('running on scroll')

    const newScrollTop = window.scrollY
    const dir = newScrollTop - scrollFromTop

    // Checking Scenes active lines to be chnaged or not
    changeScene1ActiveLine(newScrollTop,dir)

    setScrollFromTop(window.scrollY)
  }

  useEffect(() => {

    if( !scene1Lines.length ) {
      renderLines(window.innerWidth)
    }

    // adding Event listener for scrolling scenes
    window.addEventListener('scroll', onSceneScroll)

    return () => window.removeEventListener("scroll", onSceneScroll);

  }, [scene1Lines,scrollFromTop]);

  // For Animations
  useEffect(() => {

    const q = gsap.utils.selector(aboutWrapper);

    const aboutSceneImgWrapper = q('div.ab-img')

    const aboutScene1ImgWrapper = q('div.scene1-img')
    const aboutScene2ImgWrapper = q('div.scene2-img')

    const el = document.querySelector('div.scene1-img')
    const imageDisFromTop = window.pageYOffset + el.getBoundingClientRect().top

    ScrollTrigger.create({
      trigger: aboutSceneImgWrapper,
      start: `top ${imageDisFromTop}px`,
      end: () => "+=" + (aboutWrapper.current && aboutWrapper.current.offsetHeight) || 0,
      
      pin: true,
      anticipatePin: 1,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: Scene1.current,
        start: `center 35%`,
        end: 'bottom -1%',
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      defaults: {ease: "none"}
    })

    tl.fromTo( aboutScene1ImgWrapper, 
      {
        height: () => {
          return "100%";
        },
      },
      {
        height: () => {
          return "0%";
        },
      },
      0
    )
    // tl.fromTo( aboutScene2ImgWrapper, 
    //   {
    //     yPercent: 0
    //   },
    //   {
    //     yPercent: -100.5
    //   },
    //   0
    // )

    return () => {
      
    }
  }, [])

  const changeScene1ActiveLine = (scrollFromTop, dir ) => {

    const scene1Height = Scene1.current.offsetHeight

    if( dir > 0 ) { 

      if( scene1ActiveLine < (scene1Lines.length - 1) && scrollFromTop >= ( scene1Height / 3 )) {
        setScene1ActiveLine( scene1ActiveLine + 1 )
      }

    } else {

      if( scene1ActiveLine > 0 && scrollFromTop <= ( scene1Height / 3 )) {
        setScene1ActiveLine( scene1ActiveLine - 1 )
      }

    }

  }

  const renderLines = (width) => {

    renderBigLines()

    // if( width > 1400 ) {
    //   renderBigLines()
    // } else {
    //   renderSmallLines()
    // }

  }

  const renderBigLines = () => {
    console.log('rendering big lines')

    const lines = []
    let currLine = ''

    for ( let i = 0; i < aboutText.length; i++ ) {

      if( seperators.includes(aboutText[i]) && currLine.trim().length >= 50 ) {
        currLine += aboutText[i]
        lines.push(currLine)
        currLine = ''
      } else {

        if( i === aboutText.length - 1 ) {
          currLine += aboutText[i]
          lines.push(currLine)
          currLine = ''
        } else {
          currLine += aboutText[i]
        }

      }
                                                  
    }

    setScene1Lines(lines)
  }

  const renderSmallLines = () => {
    console.log('rendering small lines')

    const lines = []
    let currLine = ''

    for ( let i = 0; i < splitted.length; i++ ) {

      if( currLine.trim().length >= 50 ) {
        lines.push(currLine)
        currLine = ''       
      }
    
      if( i === splitted.length - 1 ) {
        currLine += splitted[i]
        lines.push(currLine)          
        currLine = ''
      } else {
        currLine += splitted[i] + " "
      }
                                                  
    }

    console.log('lines')
    console.log(lines)

    setScene1Lines(lines)
  }

  return (
    <section className="ab-lay">
      <main className="ab-contain" ref={aboutWrapper}>

        <div className="ab-img" ref={photoContainer} >

          <div className="pinContainer">

            <div className="scene scene1-img" style={{ backgroundImage: `url(${aboutImg1})` }}>
            </div>

            <div className="scene scene2-img" style={{ backgroundImage: `url(${aboutImg2})` }}>
            </div>
            
          </div>

        </div>

        <div className="ab-text" ref={SceneContainer}>

          {/* <div className="upperfade"></div> */}

          <div className="scene-1" ref={Scene1}>

            <p>
              {
                scene1Lines.length && scene1Lines.map( (line,idx) => 
                  <span key={idx} className={ scene1ActiveLine === idx ? 'active' : ''} 
                    dangerouslySetInnerHTML={{  __html: line }}
                  >
                  </span>
                )

              }

              <Link
                to="/contact"
                className="btn getintouch"
              >
                <span>Get in touch</span>

                <div className="bg-hover"></div>
              </Link>
            </p>

          </div>

          <div className="scene-2"></div>

          {/* <div className="belowfade"></div> */}

          {/* </div> */}
        </div>

      </main>
      {/* <HeroScroll /> */}
    </section>
  );
};

export default AbHead;


  // const onScroll = (e) => {

  //   if( Math.abs(scene1ScrollUp) > SceneContainer.current.offsetHeight ){
  //     if( isScene1Active ) setIsScene1Active(false)
  //   } else {
  //     if( !isScene1Active ) setIsScene1Active(true)
  //   }
  //   console.log(scene1ScrollUp)

  //   let scrollAmount = Math.abs(e.deltaY * 0.4);

  //   // Scene1Scroll should not get more than 0!!
  //   if( e.deltaY > 0 ) {
      
  //     if( Math.abs(scene1ScrollUp - scrollAmount) >=100 && scene1ActiveLine !== 1 ) {
  //       setScene1ActiveLine(1)
  //       if( fadeNavLinks ) {
  //         closeNavLinks()
  //       }
  //     }

  //     setScene1ScrollUp( scene1ScrollUp - scrollAmount )

  //   } else {
  //     if( scene1ScrollUp + scrollAmount <= 0 ) {

  //       if( Math.abs(scene1ScrollUp + scrollAmount) <= 100 && scene1ActiveLine !== 0 ) {
  //         setScene1ActiveLine(0)
  //         if( !fadeNavLinks ) {
  //           openNavLinks()
  //         }
  //       }
  //       setScene1ScrollUp( scene1ScrollUp + scrollAmount )

  //     } else {
  //       if( scene1ActiveLine !== 0 ) {
  //         if( !fadeNavLinks ) {
  //           openNavLinks()
  //         }
  //         setScene1ActiveLine(0)
  //       }

  //       if( scene1ScrollUp < 0 ) {
  //         setScene1ScrollUp(0)
  //       }
  //     }
  //   }

  // }