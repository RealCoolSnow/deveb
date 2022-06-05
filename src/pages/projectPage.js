import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { prjData } from "../utils/projectsData.js";
import "../projects.scss";
import { gsap } from "gsap";
import Textbox from "../components/textbox/textbox.js";
import Coverimage from "../components/textbox/coverimage.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import { useAppContext } from "../contexts/appcontext.js";
import Helmet from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const { isMobile, pageTitle, changePT, changePointer } = useAppContext();
 
  const [project, setProject] = useState();
  const el = useRef();
  let { id } = useParams();
  useLoco(!isMobile)
  

  // const prName = "project" + id.split("pr")[1].split("-")[0];
  const category = window.location.href.split("projects/")[1];
  console.log(category)

  const finded = prjData.filter(
    (pr) =>
       pr.family === category
      // pr.family === prName && pr.tags.includes(category) && pr.a.url !== id

  );

  let newArr = [];

  // const clickedItem = prjData.filter((pr) => pr.a.url === id);

  newArr = [...finded];

  const callUpd = () => {
    return setProject(newArr);
  };

  useEffect(() => {
    const q = gsap.utils.selector(el);
    callUpd();
    changePointer({isHover: false})

    // const images = q("img");
    // // console.log(images)
    // gsap.set(images, {
    //   css: {
    //     zIndex: (i, target, targets) => targets.length - i,
    //     //  webkitClipPath: 'inset(0% 0% 100% 0%)',
    //     //  clipPath: 'inset(0% 0% 100% 0%)'
    //   },
    // });
    // // gsap.to(el.current,{
    // //   backgroundImage: "linear-gradient(90deg, rgb(130, 103, 76) 0%, rgb(232, 220, 211) 100%)",
    // //   duration: .5,
    // // })
    // gsap.fromTo(
    //   images[0],
    //   {
    //     css: { clipPath: "inset(0% 0% 100% 0%)" },
    //   },
    //   {
    //     css: { clipPath: "inset(0% 0% 0% 0%)" },
    //     duration: 0.7,
    //     delay: 0.3,
    //     ease: "power3.Out",
    //   }
    // );
    // images.forEach((img, i) => {
    //   gsap.fromTo(
    //     img,
    //     {
    //       y: "-0vh",
    //     },
    //     {
    //       y: "0vh",
    //       scrollTrigger: {
    //         trigger: q(".single-pr-co")[i],
    //         scrub: true,
    //         // markers:true,
    //         start: "top bottom", // position of trigger meets the scroller position
    //         snap: {
    //           snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
    //           duration: 1,
    //           ease: "power4.inOut",
    //         },
    //       },
    //       ease: "none",
    //     }
    //   );
    // });

    //  ScrollTrigger.create({
    //   snap: {
    //     snapTo: .5,
    //     duration: 0.5
    //   }
    // });
    // return () => {
    //   ScrollTrigger.update()
    //   ScrollTrigger.getAll().forEach((instance) => {
    //     instance.kill();
    //   });
    // };
  }, []);

  return (
    <main className="single-pj" ref={el} id="viewport">

      <Helmet>
        <title>Deveb | Project </title>
        <meta name="description" content={`About how we built `} />
      </Helmet>

      {newArr.map((i) => {
        const { img, id, elements } = i;
        return (
          <>
          <div key={id} className="single-pr-co">
            <img src={img.url} loading="lazy" decoding="async" />
          </div>
          {  
             elements.map(elem =>{
              const{type}= elem;
              if (type === "cover") {
                const {width, height}= elem
                return (
                  <Coverimage width={width} height={height}/>
                )
              } 
              else if(type === "textbox"){
                const{h1,h2,h3,pi, width, alignment} = elem;
                return <Textbox h1={h1} h2={h2} h3={h3} pi={pi} width={width} alignment={alignment}/>
              }
            })
          }
          </>
        );
      })}

      <div className="pj-footer">
        <span> 01/ 0{newArr.length} </span>
        {/* <Textbox h3="dopop" h1="Online marketplace for create, buy and sell NFT's"/>
        <Textbox h3="Expectaion" pi="Ultimately, we were aiming to build a NFT market with a user-friendly interface that would appeal to people who are new to crypto space. Our main challenge was handling the large amount of user data and their NFT assets while keeping the contract transactions secure."/>
        <Textbox h2="Front-end development" />
        <Textbox pi="Dopop had a simple and modern design with two themes. Since the design shared many similar components we had to make reuseable components in the front-end to use across the website and easily share data between them."/>
        <Coverimage width="full-w" height="full-H"/>
        <Textbox h2="Front-end development" />
        <Coverimage width="half-w" height="small-h"/> */}

      </div>
    </main>
  );
};
export default ProjectPage;
