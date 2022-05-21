import React, { useEffect, useState, useRef } from "react";
import "../showcase.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/button.js";
import ShowCaseM from "./ShowCaseMobile/ShowCaseM";
import{Link} from "react-router-dom"
import { useAppContext } from "../contexts/appcontext.js";

const ShowcaseServ = ({ showcasedata, dataHeight, ell }) => {
  const { isMobile, changePointer } = useAppContext();

  const imageTimeline = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  const [set, setset] = useState(false);

  useEffect(() => {
    // if (!isMobile) {
      const imgTrigger = q(".show-images");
      const imageArrayfull = q(".show-image");
      const imagewrap = q(".show-img-contain");
      const endTr = q(".show-text-contain");

      gsap.set(imageArrayfull, {
        zIndex: (i, target, targets) => targets.length - i,
      });

      // const images = q(".show-image:not(.end)");

      // images.forEach((image, i) => {
      //   const nextImage = image.nextElementSibling;

      //    imageTimeline.current = gsap.timeline({
      //     scrollTrigger: {
      //       scroller:"[data-scroll-container]",
      //       trigger: imgTrigger,
      //       start: () => "top -" + window.innerHeight * i,
      //       endTrigger: endTr,
      //       end: () => "+=" + window.innerHeight,
      //       scrub: true,
      //       // invalidateOnRefresh: true,
      //       markers:true,
           
      //     },
      //   })

      //   .fromTo(
      //     image,
      //     {
      //       height: () => {
      //         return "100%";
      //       },
      //       y: () => {
      //         return 0;
      //       },
      //     },
      //     {
      //       height: () => {
      //         return "0%";
      //       },
      //       y: () => {
      //         return -20;
      //       },
      //       ease: "none",
      //     },
      //     0
      //   )

      //   .fromTo(
      //     image,
      //     {
      //       height: () => {
      //         return "100%";
      //       },
      //     },
      //     {
      //       height: () => {
      //         return "0%";
      //       },
      //       ease: "none",
      //     },
      //     0
      //   );
      // });

      // ScrollTrigger.create({
      //   scroller:"[data-scroll-container]",
      //   trigger: imagewrap,
      //   start: () => "center center",
      //   endTrigger: endTr,
      //   end: () => "bottom bottom",
      //   pin: imagewrap,
      //   id: "pinSc",
      //   // onEnter: ()=> console.log("pinning showcase"),
      //   pin: imagewrap,
      // pinReparent: true,
      // anticipatePin:1,
      // invalidateOnRefresh: true,
      //   // markers:true,
      // });

      // ScrollTrigger.create({
      //   scroller:"[data-scroll-container]",
      //   trigger: imgTrigger,
      //   id: "backBlackGrad",
      //   start: () => "center bottom",
      //   endTrigger: endTr,
      //   end: () => "bottom+=14% bottom-=20%",
      //   onLeave: () =>
      //     gsap.to(q(".show-back"), {
      //       // backgroundImage:
      //       //   "linear-gradient(90deg, rgb(0 0 0)  0%, rgb(0 0 0) 100%)",
      //       opacity:0,
      //       ease: "none",
      //       duration: .6,
      //     }),
      //   onLeaveBack: () =>
      //     gsap.to(q(".show-back"), {
      //       // backgroundImage: "linear-gradient(90deg,  #000  0%, #000 100%)",
      //       opacity:0,
      //       autoAlpha: 0,
      //       ease: "none",
      //       duration: .6,
      //     }),
      //   invalidateOnRefresh: true,
      //   // markers:true,
      // });
      
      // ScrollTrigger.refresh();
      // setset(true);
    // }
    const texts = q(".grid-text-contain .span-back");

 
    console.log("running showcase")
    return()=>{
    
      // if (ScrollTrigger.getById("backBlackGrad")) {
      //     ScrollTrigger.
      //     getById("backBlackGrad").kill();
      // }
      // if (ScrollTrigger.getById("pinSc")) {
      //     ScrollTrigger.
      //     getById("pinSc").kill();
      // }
      // ScrollTrigger.refresh();
      // console.log("cleaning showcase 3")
      // // setset(false)
    }
  }, []);

  return (
    <section
      style={!isMobile? {marginTop: 0 } : {}}
      className="showcase-pin footer-preSec"
      ref={el}
      dataheight={dataHeight}

    >
      {isMobile && <ShowCaseM showcasedata={showcasedata} />}

      {!isMobile && (
        <>
          <div className="show-text">
            <div className="show-text-contain">
              {showcasedata.map((item, idx) => {
                const { num, h4, p, a, img, id } = item;
                return (
                  <div key={idx} className={`serv-showcase-box box-${idx}`}>
                    <div className="grid-text-contain text">
                      <span
                        className="span-back"
                        data-cr={img.colors.right}
                        data-cl={img.colors.left}
                      >
                        {num}
                      </span>
                      <h4 style={num === "" ? { marginTop: "110px" } : {}}>
                        {h4}
                      </h4>
                      {p === "" ? null : <p>{p}</p>}
                      <Button
                        did={id}
                        active={true}
                        url={a.url}
                        text="View more"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="show-images">
            <div className="show-img-contain">
              {showcasedata.map((item, idx, ) => {
                const { img } = item;
                const {
                  cover,
                  klass,
                  colors: { right, left },
                } = img;
                return (
                  <Link to={item.a.url}>
                  <div key={idx} 
                    className={klass+ " show-image fixed"} 
                    style={{backgroundImage:" url(" +cover+")"}}
                    onMouseOver={()=> changePointer({isHover: true, color:{bg:"#000000", txt: "#ffffff"}, text: "Click"})}
                    onMouseLeave={()=> changePointer({isHover: false})}
                  ></div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="show-back"></div>
        </>
      )}
    </section>
  );
};
export default ShowcaseServ;
