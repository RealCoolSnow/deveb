import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation
} from "react-router-dom";
import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import Frame from "./components/frame";
// import Scrollbar from "./components/scrollbar/scrollbar.js";

import {
  About,
  Home,
  Contact,
  FaQ,
  Portfolio,
  ErrorPage,
  Services,
  ProjectPage,
  Privacy,
} from "./pages";
import { useAppContext } from "./contexts/appcontext.js";
import Circle from "./components/circle/circle.js"
import ScrollToTop from "./utils/ScrollToTop";

import "./utils/loco.css";
import Test from "./pages/test.jsx"
import gsap from "gsap";

const paths = {
  step1: {
    unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    inBetween: {
        curve1: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
        curve2: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
    },
    filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
  },
  step2: {
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
      inBetween: {
          curve2: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
          curve1: 'M 0 0 V 50 Q 50 100 100 50 V 0 z'
      },
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
  }
};

// import SmoothScrollbar from 'smooth-scrollbar';
// import ScrollTriggerPlugin from './utils/ScrollTriggerPlugin';
// import SoftScrollPlugin from './utils/SoftScrollPlugin';

function App({ history }) {
  const { isMobile, setMobileTrue, setMobileFalse } = useAppContext();

  history.listen( loc => {
    console.log('Route just changed')
    console.log('new Location')
    console.log(loc)
  })
  let location = useLocation()
  // const overlayPath = useRef(null)
  const [firstTime,setFirstTime] = useState(false)
  // const [showPageTransition,setShowPageTransition] = useState(false)

  function checkForMobileBg() {
    const width = window.innerWidth;

    if (width > 768 && isMobile) {
      setMobileFalse();
    } else if (width < 768 && !isMobile) setMobileTrue();
  }
  checkForMobileBg();

  useEffect(() => {
    
    checkForMobileBg();

    window.addEventListener("resize", checkForMobileBg);

    return () => window.removeEventListener("resize", checkForMobileBg);
    
  }, [isMobile,setMobileTrue,setMobileFalse]);

  const circleRefs = useRef([]);
  circleRefs.current = [];
  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);

    history.listen((location, action) => {
      console.log('Route changed ......')
    });

    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  useEffect( () => {

    const overlayPath = document.querySelector('.overlay__path')

    const pageSwitchTimeline = gsap.timeline()
      .set(overlayPath, {
          attr: { d: paths.step1.unfilled }
      })
      .to(overlayPath, { 
          duration: 0.4,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve2 }
      }, 0)
      .to(overlayPath, { 
          duration: 0.2,
          ease: 'power1',
          attr: { d: paths.step1.filled }
      })

      .set(overlayPath, { 
          attr: { d: paths.step2.filled }
      })
  // .to(overlayPath, { 
  //     duration: 0.2,
  //     ease: 'sine.in',
  //     attr: { d: paths.step2.inBetween.curve1 }
  // })
      .to(overlayPath, { 
          duration: 1,
          ease: 'power4',
          attr: { d: paths.step2.unfilled }
      });

    if( !firstTime ) {
      pageSwitchTimeline.play(0);
    } else setFirstTime(true)

  }, [location,firstTime])

  return (
    <div>
      <Frame />
      <ScrollToTop />

      {/* <svg class={`overlay ${showPageTransition ? '':'hidden'}`} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={overlayPath} class="overlay__path" vector-effect="non-scaling-stroke" d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z" />
      </svg> */}

    <Router>
      {
        !isMobile?<Circle size="sm" delay="0"/> : null
        
        }
     
      <Switch>


        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/projects/:id" children={<ProjectPage />} />

        <Route path="/projects/:tag?" exact >
          <Test />
        </Route>

        <Route path="/faq" exact>
          <FaQ />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/services" exact>
          <Services />
        </Route> 
        <Route path="/privacyandpolicy" exact>
          <Privacy />
        </Route>
        
        {/* <Route path="/test" exact>
          <Test />
        </Route>  */}
        
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      
    </Router>
    </div>
  );
}

export default withRouter(App);
