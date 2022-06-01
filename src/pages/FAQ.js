import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState} from 'react'
import FaqHead from '../components/faqhead.js'
import Scene from '../components/three/scene.js';
// import QuesBody from '../components/faqbody.js'
// import Con from'../components/contact.js'
// import QSeperator from '../components/QSeperator/QSeperator.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLoco from '../utils/useLoco.js';
import {fData, mFData, fSecond} from '../utils/faqData.js'

import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import QuesBo from '../components/faqbody.js'
import Helmet from 'react-helmet';

const QuesBody = lazy( () => import('../components/faqbody.js'))
const QSeperator = lazy( () => import('../components/QSeperator/QSeperator.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))


// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger);
const FAQPage = () => {
  const el = useRef()
  const q = gsap.utils.selector(el);
  const fooT= useRef();
  const myTl = useRef();
  const mymb= useRef();
  const { isMobile, pageTitle, changePT,resetLoco, changePp, setReset, faqp} = useAppContext();
  useLoco(!isMobile);
  

  return (
    <main id="viewport" ref={el} data-scroll-container style={{height:"50px"}}>

      <Helmet>
        <title>Deveb | FAQ</title>
        <meta name="description" content="Answers to frequently asked questions" />
      </Helmet>

      <Scene/>
      
    </main>
  )
}

export default FAQPage