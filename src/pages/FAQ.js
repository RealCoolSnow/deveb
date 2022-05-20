import React, { lazy, Suspense, useEffect, useState} from 'react'
import FaqHead from '../components/faqhead.js'
// import QuesBody from '../components/faqbody.js'
// import Con from'../components/contact.js'
// import QSeperator from '../components/QSeperator/QSeperator.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLoco from '../utils/useLoco.js';
import {fData, mFData, fSecond} from '../utils/faqData.js'

import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"


const QuesBody = lazy( () => import('../components/faqbody.js'))
const QSeperator = lazy( () => import('../components/QSeperator/QSeperator.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))

// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger);
const FAQPage = () => {
  
  const { isMobile, pageTitle, changePT } = useAppContext();
  useLoco(true);

  useEffect(()=>{
    changePT("FAQ");
       document.title = "FAQ";
    return ()=>{
      // ScrollTrigger.update();
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    }
  },[])

  return (
    <main id="viewport" data-scroll-container>

      <div className="faq-page-content " id="fix-target">

        <FaqHead/>

        <Suspense fallback={ <Loading/> }>

          <QuesBody fdata={ isMobile ? mFData : fData } isFade={ isMobile } fadeFirst={ !isMobile } foot={false}/>

          {
            isMobile && <QSeperator/>
          }

          <QuesBody foot={true} fdata={fSecond}/>

        </Suspense>

      </div>

      <Suspense fallback={ () => Loading }>
        <Footer />
      </Suspense>
      
    </main>
  )
}

export default FAQPage
