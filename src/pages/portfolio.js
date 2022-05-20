import React, { useEffect, useState, lazy, Suspense } from 'react'
import ProHead from '../components/projectshead.js'
// import PrjContain from '../components/projectscontainer.js'
// import Con from'../components/contact.js'
import { useAppContext } from "../contexts/appcontext.js";
import Footer from '../components/footer.js'
import { prjData } from '../utils/projectsData.js'
import { useParams } from 'react-router'
import useLoco from '../utils/useLoco.js';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import Loading from "./Loading.js"

import { useHistory } from "react-router-dom"

const PrjContain = lazy( () => import('../components/projectscontainer.js'))
const Con = lazy( () => import('../components/contact.js'))
gsap.registerPlugin(ScrollTrigger);
// const Loading = lazy( () => import('./Loading.js'))
const PortPage = () => {
  const [cat, setCat] = useState('Projects');
  const init= prjData.filter( (ei) => ei.tags.includes('Projects') )
  const [projects, setProjects] = useState(init);
  useLoco(true);
  
  // const history = useHistory();
  const { tag } = useParams();
  const { isMobile, pageTitle, changePT } = useAppContext();
  useEffect(()=>{
    catFunction(cat)
  },[])

  useEffect(() => {
    console.log( window.location.hash.split("#")[1])
    if(window.location.hash){
      var hashcat= window.location.hash.split("#")[1];
      if(hashcat === "3d-rendering"){catFunction("3DRendering")}
      if(hashcat === "vr"){catFunction("Virtual tour")}
      if(hashcat === "3d-modeling"){catFunction("3D Model")}
      else if(hashcat !== "3d-rendering" && hashcat !== "vr" && hashcat !== "3d-modeling") {catFunction(hashcat.charAt(0).toUpperCase() + hashcat.slice(1))}
    }
    
    changePT("AM-Projects");
    document.title = "AM-Projects";
    if( tag ) {
      const newTag = tag[0].toUpperCase() + tag.substr(1)

      setCat(newTag)
    }
return()=>{
  ScrollTrigger.getAll().forEach((instance) => {
    instance.kill();
  });
}
    
  }, [])

  const catFunction = (input)=>{
    setCat(input);
    const newProjects = prjData.filter( (ei) => ei.tags.includes(input) )
    setProjects(newProjects);
  }

  return( 
    <main id="viewport" data-scroll-container className="projects-page" >

      <ProHead Cat={cat} catFunction={catFunction}/>

      <Suspense fallback={  <Loading/> } >

        <PrjContain projects={projects} Cat={cat}/>

        <Footer />

      </Suspense>

    </main>
  )
}

export default PortPage
