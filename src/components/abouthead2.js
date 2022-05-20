import React, { useEffect, useState, useRef } from "react";
import Button from "./button.js";
import { motion } from "framer-motion";
// import HeroScroll from './HeroScroll.js';

import aboutImg from "../assets/about2.jpg";
import { renderParagraph, renderLines } from "../utils/about";
import { Link } from "react-router-dom";

const AbHead = () => {
  const SceneContainer = useRef(null);

  // Scene 1
  const Scene1 = useRef(null);
  const Scene1Text = useRef(null);
  const ActiveSpan = useRef(null);
  const [scene1Lines,setScene1Lines] = useState(null);

  // All Scenes
  const [allScenes, setAllScenes] = useState([
    {
      wrapper: Scene1,
      text: Scene1Text,
      textScroll: 0,
      activeLine: 0,
      sceneScroll: 0,
      textLines: scene1Lines,
      activeSpan: ActiveSpan,
      lastScrollAmount: 0,

    },
  ]);

  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {

    const width = window.innerWidth

    setAboutLines(width)

    window.addEventListener("wheel", onScroll);
    window.addEventListener("scroll", (e) => e.preventDefault());

    window.onresize = () => {
      console.log("window resized");
    };

    return () => window.removeEventListener("wheel", onScroll);
  }, [allScenes,scene1Lines]);

  const setAboutLines = (width) => {
    if (width > 1400) {
      setScene1Lines(renderParagraph());
    } else {
      setScene1Lines(renderLines());
    }
  }

  const onScroll = (event) => {
    const dir = Math.sign(event.deltaY);

    const currentScene = allScenes[activeScene];
    const {
      activeLine,
      text,
      textLines,
      textScroll,
      wrapper,
      sceneScroll,
      activeSpan,
      lastScrollAmount,
    } = currentScene;

    console.log("activeLine");
    console.log(activeLine);

    const scrollLimit =
      text.current.offsetHeight - text.current.offsetHeight * 0.26;

    const scrollAmount = activeSpan.current.offsetHeight * 0.9;

    console.log("text.current.firstChild.offsetHeight");
    console.log(text.current.firstChild.offsetHeight);

    if (dir > 0) {
      if (activeLine < textLines.length - 1) {
        const newActiveLine = activeLine + 1;
        let newScrollTo = 0;

        if (Math.abs(textScroll - scrollAmount) <= scrollLimit) {
          newScrollTo = textScroll - scrollAmount;
        } else {
          const remainingScroll = scrollLimit - Math.abs(textScroll);
          newScrollTo = textScroll - remainingScroll;
        }

        currentScene.activeLine = newActiveLine;
        currentScene.lastScrollAmount = Math.abs(
          newScrollTo - currentScene.textScroll
        );
        currentScene.textScroll = newScrollTo;

        setAllScenes([...allScenes, currentScene]);
      } else {
        const amountToScroll = wrapper.current.offsetHeight / 3;

        if (Math.abs(sceneScroll) <= amountToScroll * 2) {
          currentScene.sceneScroll = currentScene.sceneScroll - amountToScroll;
          currentScene.textScroll = currentScene.textScroll - amountToScroll;

          setAllScenes([...allScenes, currentScene]);
        } else {
          // Go to next scene
        }
      }
    } else {
      if (activeLine > 0) {
        if (activeLine === textLines.length - 1 && lastScrollAmount > 0) {
          const newActiveLine = activeLine - 1;

          currentScene.activeLine = newActiveLine;
          currentScene.textScroll = textScroll + lastScrollAmount;

          setAllScenes([...allScenes, currentScene]);
        } else {
          if (sceneScroll >= 0) {
            const newActiveLine = activeLine - 1;

            currentScene.activeLine = newActiveLine;

            if (textScroll + scrollAmount < 0) {
              currentScene.textScroll = textScroll + scrollAmount;
            } else {
              currentScene.textScroll = 0;
            }

            setAllScenes([...allScenes, currentScene]);
          } else {
            const amountToScroll = wrapper.current.offsetHeight / 3;

            currentScene.sceneScroll =
              currentScene.sceneScroll + amountToScroll;
            currentScene.textScroll = currentScene.textScroll + amountToScroll;

            setAllScenes([...allScenes, currentScene]);
          }
        }
      }
    }
  };

  const calcOpacity = (idx) => {
    const { activeLine } = allScenes[activeScene];

    const diff = Math.abs(idx - activeLine);

    if (diff < 1) {
      return "#F5F5F7";
    } else if (diff <= 2) {
      return "#6E6E73";
    } else {
      return "#6E6E73";
    }
  };

  const shouldBeActive = (idx) => {
    const { activeLine } = allScenes[activeScene];

    const diff = Math.abs(idx - activeLine);

    if (diff < 1) {
      return true;
    }

    return false;
  };

  return (
    <section className="ab-lay">
      <main className="ab-contain">
        <div className="ab-img">
          <img src={aboutImg} alt="about me" />
        </div>

        <div className="ab-text" ref={SceneContainer}>
          <div ref={Scene1}>
            <p
              style={{
                transform: `translateY(${allScenes[activeScene].textScroll}px)`,
              }}
              ref={Scene1Text}
            >
              {allScenes[activeScene].textLines.map((line, idx) => (
                <motion.span
                  key={idx}
                  initial={{ color: calcOpacity(idx) }}
                  animate={{
                    color: shouldBeActive(idx) ? "#F5F5F7" : "#6E6E73",
                  }}
                  transition={{ duration: 0.3, type: "linear" }}
                  ref={
                    idx === allScenes[activeScene].activeLine
                      ? ActiveSpan
                      : null
                  }
                >
                  {line}
                </motion.span>
              ))}
            </p>

            <Link
              to="/contact"
              className="btn"
              style={{ bottom: `${-allScenes[activeScene].sceneScroll}px` }}
            >
              <span>Get in touch</span>

              <div className="bg-hover"></div>
            </Link>
          </div>

          {/* <p > */}
          {/* <span> */}
          {/* We are a team of listeners, problem solvers and creative thinkers determined to craft truly 
              singular spaces for each of our clients.
              We design without ego and work hard to build meaningful and lasting relationships with our 
              clients. */}
          {/* </span> */}
          {/* <span className='gray'>  </span> */}
          {/* <span className='gradi'></span> */}
          {/* </p> */}
          {/* </div> */}
        </div>
      </main>
      {/* <HeroScroll /> */}
    </section>
  );
};

export default AbHead;
