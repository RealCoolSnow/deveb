import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAppContext } from "../contexts/appcontext";

const Dropdown = ({ ques, ans, isActive, idx, toggleActive, isMobile,  }) => {

  const ell = useRef();
  const dropDownWrapper = useRef();
  const title = useRef();

  const {setfaqp} = useAppContext()
  const setFaqH = () => {
    const q = gsap.utils.selector(ell);
    const pMask = q(".pi-mask");
    const pi = q(".pi-mask p");
    const plus = q(".faq-pv");
    // const hEle = q(".faq-dropdown");

    if (isActive) {

      gsap.to(pMask, {
        autoAlpha: 1,
        duration:()=> isMobile ? 0 : 0.3, 
      });

      gsap.to(ell.current,  {
        paddingBottom: () => getHeightp(pi) + "px",
        duration: ()=>isMobile ? 0 : 0.3,
      });

      gsap.to(plus, {
        rotate: 180,
        duration: 0.3,
        ease: "power1.Out",
      });
      setfaqp({act: true, pd: getHeightp(pi) });

    } else if ( !isActive ) {

      gsap.to(ell.current, {
        paddingBottom: "0px",
        duration:()=> isMobile ? 0 : 0.3, 
      });

      gsap.to(pMask, {
        autoAlpha: 0,
        ease: "power1.Out",
        duration: ()=>isMobile ? 0 : 0.3,
      });
      gsap.to(plus,  {
        rotate: 90,
        duration: 0.3,
        ease: "power1.Out",
      });
      // setfaqp({act: true, pd:0,});
      // setfpadding({act: false})
      console.log("ending")
    }
  }

  const fixFaqOnResize = () => {

    if (isActive) {
      const q = gsap.utils.selector(ell);

      const pi = q(".pi-mask p");

      const currentP = Number(getComputedStyle(pi[0]).paddingBottom.replace('px','')) 
      const newP = getHeightp(pi)
      setfaqp({act: true, pd: newP + "px"});

      if( currentP !== newP ){
        gsap.to(ell.current, 0.3, {
          paddingBottom: () => getHeightp(pi) ,
          ease: "power1.Out",
        });
      }

    }
  }

  useEffect(() => {

    if( isActive ) {
      window.addEventListener('resize', fixFaqOnResize)
    } else {
      window.removeEventListener('resize', fixFaqOnResize)
    }

    return () => window.removeEventListener('resize', fixFaqOnResize)
  }, [isActive])

  useEffect(setFaqH, [isActive]);

  const getHeightp = (item) => {
    // return item[0].clientHeight;

    const styles = getComputedStyle(item[0])

    const height = convertToN(styles.height)
    const mT =  convertToN(styles.marginTop)
    const spaceBelow = convertToN( getComputedStyle(dropDownWrapper.current).paddingBottom )

    console.log('spaceBelow')
    console.log(spaceBelow)

    return height + mT + spaceBelow;
  };

  const convertToN = (val) => Number(val.replace('px',''))

  const statusColor = () => {

    if( isActive === undefined ) return '#F5F5F7'
    
    return isActive ? '#F5F5F7' : '#B9B9BF'
  }

  return (
    <main className={isActive ? "active " : null} ref={ell} 
      style={{ color: statusColor() }}
    >
      <div
        className="faq-dropdown"
        onClick={() => toggleActive(idx) }
        ref={dropDownWrapper}
      >
        {
          isMobile ? 
            <svg className="m-faq-action" xmlns="http://www.w3.org/2000/svg" width="19.242" height="11.121" viewBox="0 0 19.242 11.121"><path d="M15719.332-637.333l7.5,7.5,7.5-7.5" transform="translate(-15717.211 639.455)" fill="none" stroke="#ffa029" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>
          :
            <div className="faq-plus">
              <span className="faq-ph"></span>
              <span className="faq-pv"></span>
            </div>
        }
        <h5 ref={title}>{ques}</h5>
      </div>
      <div className="pi-mask">
        <p>{ans}</p>
      </div>
    </main>
  );
};
export default Dropdown;
