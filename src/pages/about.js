import React, { useEffect, lazy, Suspense, useRef, useLayoutEffect } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
// import '../about.scss'
// import AbHead from '../components/abouthead.js'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useAppContext } from "../contexts/appcontext.js";
import useLoco from '../utils/useLoco';
import Footer from '../components/footer';
import FooterMB from "../components/footermb.jsx"
import SplitText from "../utils/split3.js"
// const AbHead = lazy( () => import('../components/abouthead.js'))
import About from '../components/about.js'
import Helmet from 'react-helmet';
// const Footer = lazy( () => import('../components/footer.js'))
// const FooterMB = lazy( () => import('../components/footermb.jsx'))

// const Loading = lazy( () => import('./Loading.js'))
const AboutPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { isMobile, changePT, resetLoco,setReset, changePp } = useAppContext();
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
    // const spans = q("h2 div");

    gsap.set(texts, { autoAlpha: 0 });

    gsap.set(q(".mem-row"), {
      xPercent: (index, target) => (index === 1 ? 5 : -5),
    });
    !isMobile && gsap.set(q(".image-wrap"), {
      yPercent: 35,
      scale: 1.4,
      autoAlpha: 0,
      transformOrigin: "top center",
    });
    // gsap.set(spans, {
    //   y: 20,
    // });
    isMobile && gsap.set(q(".mb p"),{
      autoAlpha:0,
      y:20,
    })
    // gsap.set(q(".texts-wrap h5"),{ autoAlpha:0})
    return () => {};
  }, [resetLoco]);
  useEffect(() => {
    changePT("About");
    window.history.scrollRestoration = 'manual'
    setTimeout(() => {
      setReset()
    }, 300);

  }, [isMobile])
  // document.fonts.ready.then(
    var functionnn= ()=> {
    const split = new SplitText("#headLines", {
      type: "lines",
      linesClass: "lineChildren",
    }); 
    gsap.to(
      split.lines,
      {
        y: 0,
        duration: 0.6,
        delay:.6,
        stagger: {
          amount: 0.15,
          ease: "power2.Out",
        },
      },
      // 0.4
    );
    gsap.to(
      split.lines,
      {
        autoAlpha: 1,
        delay:.6,
        duration: 1.2,
        onComplete: ()=>  {
          gsap.to(q("h1"),{
          display:"block",
          duration:0,
        })
        gsap.to(q("#headLines"),{
          display:"none",
          duration:0,
        })
      },
        stagger: {
          amount: 0.15,
          ease: "power2.Out",
        },
      },
      // 0.4
    )
     }
    //  );
    useEffect(()=>{
      document.fonts.ready.then(()=>{
        functionnn()
      })    
    },[])
  useEffect(()=>{
    const pis = q(".text-wrap2 p");
    const h5selector = q(".texts-wrap h5");
      const texts = q(".texts-wrap .lineChildren,.texts-wrap h5,.texts-wrap p");
      const imgTrig = q(".image-wrap img");
      const imgWr = q(".image-wrap.fc");

      const spans = q(".lineChildren");
      const h1select = q("h1");

   
      if(!isMobile){
        changePp("other")
        if(loadingTL.current){
          loadingTL.current.progress(0)
        }
        if(tl.current){
          tl.current.progress(10)
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
        // .to(
        //   split.lines,
        //   {
        //     y: 0,
        //     duration: 0.6,
        //     stagger: {
        //       amount: 0.1,
        //       ease: "power2.Out",
        //     },
        //   },
        //   0.4
        // )
        // .to(
        //   split.lines,
        //   {
        //     autoAlpha: 1,
        //     duration: 1.2,
        //     stagger: {
        //       amount: 0.1,
        //       ease: "power2.Out",
        //     },
        //   },
        //   0.4
        // )
        // .to(
        //   q(".image-wrap"),
        //   {
        //     yPercent: 0,
        //     duration: .8,
        //     ease: "power2.out",
        //   },
        //   0.4
        // )
        .to(
          q(".image-wrap"),
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: 1.5,
            duration: .8,
            // transformOrigin:"bottom center",
            // stagger: 0.13,
            ease: "power2.out",
          },
          0.35
        )
    
      imgTl.current = gsap.timeline({
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          // trigger: imgWr,
          start: () => "bottom center",
          end: () => "bottom top",
          //  markers:true,
          // invalidateOnRefresh: true,
          onEnter: ({ direction }) => fadeOut(direction),
          onLeaveBack: ({ direction }) => fadeOut(direction),
        },
      });
  
      const fadeOut = (direction) => {
        return (
          gsap.to(h1select, {
            autoAlpha: () => (direction === 1 ? 0 : 1),
            duration: 0,
          }),
          gsap.to(h5selector, {
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
        // console.log(img.offsetTop - img.offsetHeight / 5, img.offsetTop, img);
         tl.current = gsap
          .timeline({
            scrollTrigger: {
              scroller: "#viewport",
              start: () =>
                "top+=" +
                (img.offsetTop +
                  (img.offsetHeight / 3) * (images.length - 1 - i)) +
                " bottom",
              end: () => "bottom+=" + img.offsetTop + " bottom",
              scrub: true,
              id: "imgs" + i,
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
          xPercent: (index, target) => (index === 1 ? -5 : 5),
          duration: 20,
          ease: "none",
        })
        .to(
          h5selector,
          {
            autoAlpha: 0,
            duration: 3.3,
            ease: "Power3.Out",
          },
          "<2.5"
        );
       philTl.current = gsap
        .timeline({
          duration: 10,
          scrollTrigger: {
            scroller: "#viewport",
            trigger:imgTrig[1],
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
            duration:5.1,
          },
          0
        )
        .to(
          pis[0],
          {
            autoAlpha: 1,
            duration: 1,
          },
          "<.94"
        )
      
        .to(
          pis[0],
          {
            y: "-20vh",
            // height:100,
            duration: 28,
          },
          "<-2.5"
        )
        .to(
          pis[0],
          {
           autoAlpha:0,
            duration:5,
          },
          "<75%"
        )
        .to(
          pis[1],
          {
           autoAlpha:1,
            duration: 2,
          },
          "<80%"
        )
       
        .to(
          pis[1],
          {
            y: "3vh",
            duration: 28,
          },
          ">-7"
        )
        .to(
          pis[1],
          {
           autoAlpha:0,
            duration: 5,
          },
          "<65%"
        );
        const changeBg = (direction)=>{
          gsap.to(q(".backgr"), { 
            autoAlpha: ()=> (direction === 1? 1: 0),
            duration:1
          })
          gsap.to(el.current,{
            backgroundColor: ()=> (direction === 1? "#f5f5f7": "#ffffff"),
            duration:1,
          })
          gsap.to(q(".darkLayer"),{
            backgroundColor: ()=> (direction === 1? "#f5f5f7": "#ffffff"),
            duration:1,
          })
          direction === 1? changePp("Contact"): changePp("other")
        }
        fooT.current = gsap
          .timeline({
              
            scrollTrigger: {
              scroller: "#viewport",
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
          if(loadingTL.current){
            loadingTL.current.kill()
          }
          imgTl.current.kill();
          if(imgTl.current.ScrollTrigger){
            imgTl.current.ScrollTrigger.kill();
          }
         if( memtl){memtl.kill()};
          if(memtl.ScrollTrigger){
            memtl.ScrollTrigger.kill();
          }
          if(tl.current){
            tl.current.kill();
          }
          if(tl.current.ScrollTrigger){
            tl.current.ScrollTrigger.kill();
          }
          if(ScrollTrigger.getById("imgs0")){
            ScrollTrigger.getById("imgs0").kill()
          }
          philTl.current.kill();
          if(philTl.current.ScrollTrigger){
            philTl.current.ScrollTrigger.kill();
          }
          if( ScrollTrigger.getById("imgs1")){
            ScrollTrigger.getById("imgs1").kill();
          }
          fooT.current.kill()
          if( fooT.current.ScrollTrigger){
            fooT.current.ScrollTrigger.kill();
          }
         
        }
      }
      else if (isMobile){
        // functionnn()

        el.current.style.transform="none";
        gsap.set(q(".texts-wrap"), {
          transform:"none"
        })
        if(loadingTL.current){
          loadingTL.current.kill()
        }
        // if(fooT.current){
        //   fooT.current.progress(0)
        // }
        const texts = q(".texts-wrap h2,.texts-wrap h5,.texts-wrap p");
        // const spans = q(".mb h2 div");
        const mbp= q(".mb p");
        gsap.set(q(".text-wrap2.pi p"),{
          fontSize: "35px"
        } )
        gsap.set(q(".image-wrap"), {scale:1, yPercent:10, autoAlpha:0})
        gsap.set(pis[1], {y:"15rem"})
        gsap.set(q(".darkLayer"), {autoAlpha:0})
        loadingTL.current = gsap
        .timeline({})
        .to(
          [mbp ],
          {
            y: 0,
            duration: 0.45,
            stagger: {
              amount: 0.2,
              ease: "power2.Out",
            },
          },
          0.4
        )
        .to(
          [mbp],
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: {
              amount: 0.2,
              ease: "power2.Out",
            },
          },
          0.4
        )
        .to(q(".image-wrap"),{
          yPercent:0,
          autoAlpha:1,
          duration:.5,
        }, "<.2")
    
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
          gsap.to(q(".lineChildren, h1"), {
            autoAlpha: () => (direction === 1 ? 0 : 1),
            duration: 0,
          }),
          gsap.to(q("h5"), {
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
          xPercent: (index, target) => (index === 1 ? -5 : 5),
          duration: 20,
          ease: "none",
        })
        .to(
          q("h5")[0],
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
            start: () => "top center-=5%",
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
            duration:1.5,
          },
          ".8"
        )
        .to(
          pis[0],
          {
            autoAlpha: 1,
            duration: 0.8,
          },
          "<.7"
        )
      
        .to(
          pis[0],
          {
            y: "0vh",
            // height:100,
            duration: 5,
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
          "<10%"
        )
       
        .to(
          pis[1],
          {
            y: "-1vh",
            duration: 8,
          },
          "<.2"
        )
        .to(
          pis[1],
          {
           autoAlpha:0,
            duration: 1,
          },
          "<38%"
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
    <main ref={el} id="viewport" data-scroll-container className='aboutpage'>

      <Helmet>
        <title>Deveb | About</title>
        <meta name="description" content="We at deveb strive to fulfill your digital dreams and present your product in the most approachable way possible." />
      </Helmet>

        <About />
        {/* <AbHead/> */}
       { 
       !isMobile?    <Footer prj={true}/> : <FooterMB/>
    
       }

    </main>
  )
}

export default AboutPage
