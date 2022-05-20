import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { prjData } from "../utils/projectsData.js";
import "../projects.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading.js"

import { useAppContext } from "../contexts/appcontext.js";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const { isMobile, pageTitle, changePT } = useAppContext();
 
  const [project, setProject] = useState();
  const el = useRef();
  let { id } = useParams();

  const prName = "project" + id.split("pr")[1].split("-")[0];
  const category = window.location.search.split("?")[1];

  const finded = prjData.filter(
    (pr) =>
      pr.family === prName && pr.tags.includes(category) && pr.a.url !== id
  );

  let newArr = [];

  const clickedItem = prjData.filter((pr) => pr.a.url === id);

  newArr = [...clickedItem, ...finded];

  const callUpd = () => {
    return setProject(newArr);
  };

  useEffect(() => {
    changePT(prName);
    document.title = prName;
    const q = gsap.utils.selector(el);
    callUpd();

    const images = q("img");
    // console.log(images)
    gsap.set(images, {
      css: {
        zIndex: (i, target, targets) => targets.length - i,
        //  webkitClipPath: 'inset(0% 0% 100% 0%)',
        //  clipPath: 'inset(0% 0% 100% 0%)'
      },
    });
    // gsap.to(el.current,{
    //   backgroundImage: "linear-gradient(90deg, rgb(130, 103, 76) 0%, rgb(232, 220, 211) 100%)",
    //   duration: .5,
    // })
    gsap.fromTo(
      images[0],
      {
        css: { clipPath: "inset(0% 0% 100% 0%)" },
      },
      {
        css: { clipPath: "inset(0% 0% 0% 0%)" },
        duration: 0.7,
        delay: 0.3,
        ease: "power3.Out",
      }
    );
    images.forEach((img, i) => {
      gsap.fromTo(
        img,
        {
          y: "-0vh",
        },
        {
          y: "0vh",
          scrollTrigger: {
            trigger: q(".single-pr-co")[i],
            scrub: true,
            // markers:true,
            start: "top bottom", // position of trigger meets the scroller position
            snap: {
              snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
              duration: 1,
              ease: "power4.inOut",
            },
          },
          ease: "none",
        }
      );
    });

    //  ScrollTrigger.create({
    //   snap: {
    //     snapTo: .5,
    //     duration: 0.5
    //   }
    // });
    return () => {
      ScrollTrigger.update()
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  }, []);

  return (
    <main className="single-pj" ref={el}>
      {newArr.map((i) => {
        const { img, id } = i;
        return (
          <div key={id} className="single-pr-co">
            <img src={img.url} loading="lazy" decoding="async" />
          </div>
        );
      })}

      <div className="pj-footer">
        <span> 01/ 0{newArr.length} </span>
      </div>
    </main>
  );
};
export default ProjectPage;
