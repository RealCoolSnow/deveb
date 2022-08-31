import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
  } from "react-router-dom";
  import "./App.scss";
  import React, { useEffect, useRef } from "react";
  import Frame from "./components/frame";
  // import Scrollbar from "./components/scrollbar/scrollbar.js";
  
  import {
    About,
    Home,
    Contact,
    ErrorPage,
    Services,
    ProjectPage,
    Privacy,
    // Dope,
    // Comfeey,
    // Amarc,
    // Dopop,
  
  } from "./pages";
  import { useAppContext } from "./contexts/appcontext.js";
  import Circle from "./components/circle/circle.js";
  import ScrollToTop from "./utils/ScrollToTop";
  
  import "./utils/loco.css";
  import Test from "./pages/test.jsx";
  
  // import SmoothScrollbar from 'smooth-scrollbar';
  // import ScrollTriggerPlugin from './utils/ScrollTriggerPlugin';
  // import SoftScrollPlugin from './utils/SoftScrollPlugin';
  
  let tl;
  
  function App() {
    const { isMobile, setMobileTrue, setMobileFalse } = useAppContext();
  
    // let location = useLocation();
    // const history = useHistory();
    // const overlayPath = useRef(null)
    // const [firstTime,setFirstTime] = useState(false)
    // const [showPageTransition,setShowPageTransition] = useState(false)
  
    function checkForMobileBg() {
      const width = window.innerWidth;
  
      if (width > 768 ) {
        setMobileFalse();
      } else if (width < 768 ) setMobileTrue();
    }
    // checkForMobileBg();
  
    useEffect(() => {
      checkForMobileBg();
  
      window.addEventListener("resize", checkForMobileBg);
  
      return () => window.removeEventListener("resize", checkForMobileBg);
    }, [isMobile]);
  
    const circleRefs = useRef([]);
    circleRefs.current = [];
    useEffect(() => {
      const onMove = ({ clientX, clientY }) => {
        circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
      };
      window.addEventListener("pointermove", onMove);
  
      return () => window.removeEventListener("pointermove", onMove);
    }, []);
  
    return (
      <Router>
        
        <Frame />
  
        <ScrollToTop />
        {!isMobile ? <Circle size="sm" delay="0" /> : null}
  
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
  
          {/* <Route path="/projects/vimcosmo" >
            <Vimo/>
          </Route> */}
          {/* <Route path="/projects/dopegood" >
            <Dope/>
          </Route>
          <Route path="/projects/dopop"  >
            <Dopop/>
          </Route>
          <Route path="/projects/am-arc" >
            <Amarc/>
          </Route>
          <Route path="/projects/comfeey" >
            <Comfeey/>
          </Route> */}
  
          <Route path="/projects/:id" exact>
            <ProjectPage />
          </Route>
          <Route path="/projects/:tag?" exact>
            <Test />
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
    );
  }
  
  export default withRouter(App);