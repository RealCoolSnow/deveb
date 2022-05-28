import React, { useEffect, useRef, useState } from "react";
import "./Mbutton.scss";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Button = ({
  text,
  url,
  trigger = () => {},
  active = true,
  exClass = '',
  style
}) => {

  const [btnhover, setbtnHover] = useState(false);

  const el = useRef();

  useEffect(() => {

    if (!active) return;

    const q = gsap.utils.selector(el);
    const ripple = q(".btn-more-ripple span");
    const teXt = q(".btn-more-title span");

    if (btnhover === true) {
      gsap.set(ripple, { backgroundColor: '#1a1a1a' })
      gsap.to(ripple, 0, { yPercent: -100, borderRadius: 50, autoAlpha: 1 });
      gsap.to(ripple, 0.5, {
        yPercent: 0,
        borderRadius: 0,
      });
      gsap.to(teXt, 0.3, {
        color: "#fff",
      });
      gsap.to(teXt, 0.5, {
        transformOrigin: "left top",
        yPercent: -130,
        skewY: -3,
      });
    } else if (btnhover === false) {
      gsap.to(ripple, 0.5, {
        yPercent: 100,
        borderRadius: 50,
      });
      gsap.to(teXt, 0.4, {
        color: "#000",
      });
      gsap.to(teXt, 0.5, {
        transformOrigin: "left top",
        yPercent: 0,
        skewY: 0,
      });
    }
  }, [btnhover,active]);

  return (
    <div
      className={`btn-container mobile-b ${exClass}`}
      ref={el}
      onClick={ () => trigger ? trigger() : '' }
    >
      <div
        className="btn-mouse-area"
        onMouseOver={() => setbtnHover(true)}
        onMouseLeave={() => setbtnHover(false)}
        onBlur={() => setbtnHover(false)}
      >
        {url ? (
          <Link className="btn-more" to={url}>
            <span className="btn-more-title">
              <span data-text={text}>{text}</span>
            </span>
            <span className="btn-more-ripple">
              <span></span>
            </span>
          </Link>
        ) : (
          <button className={`btn-more ${!active ? 'invalid' : ''}`} >
            <span className="btn-more-title">
              <span data-text={text}>{text}</span>
            </span>
            <span className="btn-more-ripple">
              <span></span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
