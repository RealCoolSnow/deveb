import React, { useEffect, lazy, Suspense, useRef, useLayoutEffect } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../about.scss'
// import AbHead from '../components/abouthead.js'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco';
// const AbHead = lazy( () => import('../components/abouthead.js'))
import About from '../components/about.js'
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))




// const Loading = lazy( () => import('./Loading.js'))
const AboutPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { isMobile, pageTitle, changePT, resetLoco,setReset, changePp } = useAppContext();
  const view= useRef();
  useLoco(!isMobile);
  const el = useRef();
  const imgTl = useRef();
  const loadingTL = useRef();
  const philTl = useRef()
  const fooT = useRef()
  const tl = useRef();

  const q = gsap.utils.selector(el);
  useLayoutEffect(() => {
    const texts = q(".texts-wrap h2 div,.texts-wrap h5");
    const spans = q("h2 div");
    gsap.set(texts, { autoAlpha: 0 });

    gsap.set(q(".mem-row"), {
      xPercent: (index, target) => (index === 0 ? -5 : 5),
    });
    !isMobile && gsap.set(q(".image-wrap"), {
      // yPercent: 55,
      scale: 1.4,
      autoAlpha: 0,
      transformOrigin: "top center",
    });
    gsap.set(spans, {
      y: 20,
    });
    // gsap.set(q(".texts-wrap h5"),{ autoAlpha:0})
    return () => {};
  }, [resetLoco]);
  useEffect(() => {
    changePT("About");
       document.title = "About us";
    window.history.scrollRestoration = 'manual'
    setTimeout(() => {
      setReset()
    }, 300);

  }, [isMobile])
  useEffect(()=>{
    const pis = q(".text-wrap2 p");
      const texts = q(".texts-wrap h2 div,.texts-wrap h5,.texts-wrap p");
      const imgTrig = q(".image-wrap img");
      const spans = q("h2 div");
      if(!isMobile){
        changePp("other")
        if(loadingTL.current){
          loadingTL.current.progress(0)
        }
        if(tl.current){
          tl.current.progress(0)
        }
        if(philTl.current){
          philTl.current.progress(0)
        }
        gsap.set(pis,{
          clearProps: "transform"
        })
        gsap.set( imgTrig[1],{ autoAlpha:1})
        gsap.set(
          q(".darkLayer"),{autoAlpha:0})

        loadingTL.current = gsap
        .timeline({})
        .to(
          spans,
          {
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.1,
              ease: "power2.Out",
            },
          },
          0.4
        )
        .to(
          spans,
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: {
              amount: 0.1,
              ease: "power2.Out",
            },
          },
          0.4
        )
        .to(
          q(".image-wrap"),
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: 1.5,
            duration: 0.5,
            stagger: 0.13,
            ease: "power2.out",
          },
          0.5
        )
    
      imgTl.current = gsap.timeline({
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: imgTrig,
          start: () => "top center-=10%",
          end: () => "bottom top",
          //  markers:true,
          invalidateOnRefresh: true,
          onEnter: ({ direction }) => fadeOut(direction),
          onLeaveBack: ({ direction }) => fadeOut(direction),
        },
      });
  
      const fadeOut = (direction) => {
        return (
          gsap.to(spans, {
            autoAlpha: () => (direction === 1 ? 0 : 1),
            duration: 0,
          }),
          gsap.to(texts[2], {
            autoAlpha: () => (direction === 1 ? 1 : 0),
            duration: 0,
          }),
          gsap.to(
            q(".darkLayer"),
            {
              autoAlpha: () => (direction === 1 ? 1 : 0),
              duration: 0,
            },
            "<"
          )
        );
      };
      const images = q(".image-wrap");
      images.forEach((img, i) => {
        console.log(img.offsetTop - img.offsetHeight / 5, img.offsetTop, img);
         tl.current = gsap
          .timeline({
            scrollTrigger: {
              scroller: "#viewport",
              start: () =>
                "top+=" +
                (img.offsetTop +
                  (img.offsetHeight / 4) * (images.length - 1 - i)) +
                " bottom",
              end: () => "bottom+=" + img.offsetTop + " bottom",
              scrub: true,
              id: "imgs",
              invalidateOnRefresh: true,
              // markers:true,
            },
          })
          .to(img, { scale: 1 });
      });
  
      const memtl = gsap
        .timeline({
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: q(".members-wrap"),
            start: () => "top-=5% bottom",
            end: () => "bottom+=5% top",
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(q(".mem-row"), {
          xPercent: (index, target) => (index === 0 ? 5 : -5),
          duration: 20,
          ease: "none",
        })
        .to(
          texts[2],
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          },
          "<4"
        );
       philTl.current = gsap
        .timeline({
          duration: 10,
          scrollTrigger: {
            scroller: "#viewport",
            trigger:q(".text-wrap2.pi"),
            start: () => "bottom bottom-=5%",
            end: () => "bottom+=10% top",
            // markers: true,
            scrub: true,
            // pin:true,
            // pinReparent:true,
            // invalidateOnRefresh: true,
          },
        })
        .to(
          imgTrig[1],
          {
            autoAlpha: 0,
            duration:1.1,
          },
          0
        )
        .to(
          pis[0],
          {
            autoAlpha: 1,
            duration: 0.8,
          },
          "<.34"
        )
      
        .to(
          pis[0],
          {
            y: "-65vh",
            // height:100,
            duration: 4,
          },
          "<.2"
        )
        .to(
          pis[0],
          {
           autoAlpha:0,
            duration: 1,
          },
          "<55%"
        )
        .to(
          pis[1],
          {
           autoAlpha:1,
            duration: .8,
          },
          "<60%"
        )
       
        .to(
          pis[1],
          {
            y: "-70vh",
            duration: 4,
          },
          "<.2"
        )
        .to(
          pis[1],
          {
           autoAlpha:0,
            duration: 1,
          },
          "<45%"
        );
        const changeBg = (direction)=>{
          gsap.to(q(".backgr"), { 
            autoAlpha: ()=> (direction === 1? 1: 0),
            duration:1
          })
          direction === 1? changePp("Contact"): changePp("other")
        }
        fooT.current = gsap
          .timeline({
              
            scrollTrigger: {
              scroller: "#viewport",
              trigger: q(".footer-sec.fot"),
              start:()=> "center-=8% center-=8%",
              end: ()=> "bottom bottom",
              // markers: true,
              id:"foot",
              onLeaveBack: ({direction})=> changeBg(direction),
            onEnter: ({direction})=> changeBg(direction),
            },
          })
             .to(q(".trig"),{
               autoAlpha:1,
               duration:1,
             }, "<")
  
  
  
  
        return()=>{
          loadingTL.current.kill();
          imgTl.current.kill();
          if(imgTl.current.ScrollTrigger){
            imgTl.current.ScrollTrigger.kill();
          }
         if( memtl){memtl.kill()};
          if(memtl.ScrollTrigger){
            memtl.ScrollTrigger.kill();
          }
          philTl.current.kill();
          if(philTl.current.ScrollTrigger){
            philTl.current.ScrollTrigger.kill();
          }
          if( ScrollTrigger.getById("imgs")){
            ScrollTrigger.getById("imgs").kill();
          }
          fooT.current.kill()
          if( fooT.current.ScrollTrigger){
            fooT.current.ScrollTrigger.kill();
          }
         
        }
      }
      else if (isMobile){
        el.current.style.transform="none";
        // if(fooT.current){
        //   fooT.current.progress(0)
        // }
        const texts = q(".texts-wrap h2,.texts-wrap h5,.texts-wrap p");
        const spans = q(".mb h2");
        gsap.set(q(".text-wrap2.pi p"),{
          fontSize: "35px"
        } )
        gsap.set(pis[1], {y:230})
        gsap.set(q(".darkLayer"), {autoAlpha:0})
        loadingTL.current = gsap
        .timeline({})
        .to(
          spans,
          {
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.1,
              ease: "power2.Out",
            },
          },
          0.4
        )
        .to(
          spans,
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: {
              amount: 0.1,
              ease: "power2.Out",
            },
          },
          0.4
        );
    
      imgTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgTrig,
          start: () => "top center-=30%",
          end: () => "bottom top",
          //  markers:true,
          invalidateOnRefresh: true,
          onEnter: ({ direction }) => fadeOut(direction),
          onLeaveBack: ({ direction }) => fadeOut(direction),
        },
      });
  
      const fadeOut = (direction) => {
        return (
          gsap.to(spans, {
            autoAlpha: () => (direction === 1 ? 0 : 1),
            duration: 0,
          }),
          gsap.to(texts[2], {
            autoAlpha: () => (direction === 1 ? 1 : 0),
            duration: 0,
          }),
          gsap.to(
            q(".darkLayer"),
            {
              autoAlpha: () => (direction === 1 ? 1 : 0),
              duration: 0,
            },
            "<"
          )
        );
      };
  
      const memtl = gsap
        .timeline({
          scrollTrigger: {
            trigger: q(".members-wrap"),
            start: () => "top-=5% bottom",
            end: () => "bottom+=5% top",
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(q(".mem-row"), {
          xPercent: (index, target) => (index === 0 ? 5 : -5),
          duration: 20,
          ease: "none",
        })
        .to(
          texts[2],
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          },
          "<5"
        );
       philTl.current = gsap
        .timeline({
          duration: 10,
          scrollTrigger: {
            trigger:q(".text-wrap2.pi"),
            start: () => "bottom bottom-=5%",
            end: () => "bottom+=10% top",
            // markers: true,
            scrub: true,
            // pin:true,
            // pinReparent:true,
            // invalidateOnRefresh: true,
          },
        })
        .to(
          imgTrig[1],
          {
            autoAlpha: 0,
            duration:2.5,
          },
          ".8"
        )
        .to(
          pis[0],
          {
            autoAlpha: 1,
            duration: 0.8,
          },
          "<.34"
        )
      
        .to(
          pis[0],
          {
            y: "-10vh",
            // height:100,
            duration: 10,
          },
          "<.2"
        )
        .to(
          pis[0],
          {
           autoAlpha:0,
            duration: 1,
          },
          "<75%"
        )
        .to(
          pis[1],
          {
           autoAlpha:1,
            duration: .8,
          },
          "<60%"
        )
       
        .to(
          pis[1],
          {
            y: "-7vh",
            duration: 10,
          },
          "<.2"
        )
        .to(
          pis[1],
          {
           autoAlpha:0,
            duration: 1,
          },
          "<45%"
        );
        const changeBg = (direction)=>{
          gsap.to(q(".backgr"), { 
            autoAlpha: ()=> (direction === 1? 1: 0),
            duration:1
          })
          direction === 1? changePp("Contact"): changePp("other")
        }
        fooT.current = gsap
        .timeline({
          delay: .2,
          scrollTrigger: {
            trigger: q(".footer-sec.fot"),
            start:()=> "top-=8% center-=8%",
            end: ()=> "bottom bottom",
            // markers: true,
            id:"foot",
            onLeaveBack: ({direction})=> changeBg(direction),
          onEnter: ({direction})=> changeBg(direction),
          },
        })
           .to(q(".trig"),{
             autoAlpha:1,
             duration:1,
           }, "<")
          
           return()=>{
            loadingTL.current.kill();
          imgTl.current.kill();
          if(imgTl.current.ScrollTrigger){
            imgTl.current.ScrollTrigger.kill();
          }
         if( memtl){memtl.kill()};
          if(memtl.ScrollTrigger){
            memtl.ScrollTrigger.kill();
          }
          philTl.current.kill();
          if(philTl.current.ScrollTrigger){
            philTl.current.ScrollTrigger.kill();
          }
          if( ScrollTrigger.getById("imgs")){
            ScrollTrigger.getById("imgs").kill();
          }
          fooT.current.kill()
          if( fooT.current.ScrollTrigger){
            fooT.current.ScrollTrigger.kill();
          }
          
           }
      }
     
  },[resetLoco, isMobile])

  return (
    <main ref={el} id="viewport" data-scroll-container>

        <About/>
      <Suspense fallback={ <Loading/> } >
        {/* <AbHead/> */}
       { 
       !isMobile?    <Footer/> : <FooterMB/>
    
       }
      </Suspense>

    </main>
  )
}

export default AboutPage
