import React, { useEffect, useState, useRef } from "react";
import { useAppContext } from "../contexts/appcontext.js";
import play from "../assets/play.svg";
let YTPlayer;

const Youto = ({ id, vidId, imgUrl, cat, name, desc }) => {
  const [player, setPlayer] = useState(null);
  // let player;
  const coverel = useRef();

  const { isMobile } = useAppContext();

  const btnStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: "100",
    background: "none",
    border: "none",
    cursor: "pointer",
  };
  const btnStyle1 = {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: "100",
    background: "none",
    border: "none",
    height: "100vw",
    cursor: "pointer",
    // marginTop:"115vw",
  };
  const spanStyle = {
    position: "absolute",
    zIndex: 100,
    top: "50%",
    background: "none",
    pointerEvents: "none",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const plst = {
    fill: "rgb(255 255 255 / 81%)",
    width: "100%",
    height: "100px",
  };

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  function playVideo(e) {
    LoadVideo();
    // setaniClick()
    console.log(e);
    e.target.style.display = "none";
    // player.playVideo();
  }

  function LoadVideo() {
    const newplayer = new YTPlayer.Player(id, {
      allowFullScreen: true,
      // scrolling:true,
      marginWidth: "0",
      marginHeight: "0",
      frameBorder: "0",
      videoId: vidId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    setPlayer(newplayer);
  }

  useEffect(() => {
    if (!YTPlayer) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // console.log(YT)
      console.log("window.YT");
      console.log(window.YT);

      //   onYouTubeIframeAPIReady()
      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = () => {
        YTPlayer = window.YT;

        // LoadVideo();
      };

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // LoadVideo()
    }

    // } else { // If script is already there, load the video directly
    //   LoadVideo()
    // }
  }, []);
  // useEffect(()=>{

  // },[cat])

  return (
    <>
      <button
        className={id}
        onClick={(e) => playVideo(e)}
        style={isMobile ? btnStyle1 : btnStyle}
      >
        <div
          ref={coverel}
          className={`ani-cover ${id}`}
          // onClick={playVideo}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <span style={spanStyle}>
          <svg
            style={plst}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 288.01 335.95"
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M0,168.33Q0,104.76,0,41.19c0-19.57,12.36-35.35,31-40C42-1.56,52,.64,61.6,6.22q53.46,31,107,61.89,48.65,28.11,97.28,56.25c11.68,6.78,19.17,16.82,21.37,30.16,3.18,19.19-3.61,34.58-19.89,45.08C238.82,218,210,236,181.27,254.14q-59.39,37.53-118.78,75.05c-23.34,14.7-52.7,4.46-60.55-21.2A47.88,47.88,0,0,1,.1,294.34C0,252.33,0,210.33,0,168.33Z"
                />
              </g>
            </g>
          </svg>
        </span>
      </button>
      <div id={id} className="vr-item"></div>
      {
        desc && !isMobile && (
          <div className="ani-names">
          <h5>{name} </h5>
          <p>{desc}</p>
        </div>
        )
      }
  
    </>
  );
};
export default Youto;
