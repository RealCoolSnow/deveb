// import inter from '../assets/covers/int.jpg'
// import ext from '../assets/covers/ext.jpg'
// import t3d from '../assets/covers/ren.jpg'
// import ani from '../assets/covers/ani.jpg'
// import vr from '../assets/covers/vr.jpg'
import dopegood from '../assets/covers/dopegood.jpg'
import amarc from '../assets/covers/am-arc.jpg'
import vim from '../assets/covers/vim.jpg'
import dopop from '../assets/covers/dopop2.jpg'
import comfeey from '../assets/covers/comfeey.jpg'
import sdopegood from '../assets/covers/sdope.jpg'
import samarc from '../assets/covers/sam-arc.jpg'
import svim from '../assets/covers/svim.jpg'
import sdopop from '../assets/covers/sdopop.jpg'

export const links = [
  {
    id: "na1Li1",
    text: "Services",
    url: "/services",
    ariaLabel: "services page",
  },
  {
    id: "na1Li2",
    text: "Projects",
    url: "/projects",
    ariaLabel: "projects page",
  },
  {
    id: "na1Li4",
    text: "About",
    url: "/about",
    ariaLabel: "About page",
  },
  {
    id: "na1Li5",
    text: "Get a quote",
    url: "/contact",
    ariaLabel: "contact page",
  },
];


export const home = [
  {
    num: "Vimcosmo",
    id: "hp103",
    h4: "Online store, cosmetic brand",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: vim,
      colors: { cur: "#FF99CE", pointer: "#CC669Bbf", bg:"#FAE1EE", tx:"#E67FB4", br:"#FEA5D3"},
      klass: "first",
    },
  },
  {
    num: "Dopop",
    id: "hp104",
    h4: "NFT digital marketplace",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: dopop,
      colors: { cur: "#808CFF", pointer: "#808cffbf", bg:"#D3D6F0", tx:"#7781D9", br:"#A6AFFF"},
      klass: "",
    },
  },
  {
    num: "AM-ARC",
    id: "hp102",
    h4: "Architectural design studio",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: amarc,
      colors: { cur: "#F2AB79", pointer: "#F2AB79bf", bg:"#FFEDE0", tx:"#F2AB79", br:"#F2AB79"},
      klass: "threeD",
    },
  },
  {
    num: "Dope Good",
    id: "hp101",
    h4: "Online store, Furniture brand",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: dopegood,
      colors: { cur: "#FFB18C", pointer: "#FFA073bf", bg:"#FFEAE0", tx:"#FFB18C", br:"#FFB18C"},
      klass: "threeD",
    },
  },
  
  {
    num: "Comfeey",
    id: "hp105",
    h4: "Online store, furniture brand",
    p: "",
    a: { text: "Learn more", url:"/projects" },
    img: {
      cover: comfeey,
      colors: { cur: "#77A9D9", pointer: "#669bccbf", bg:"#E0F0FF" , tx:"#78A9D9", br:"#A6D4FF"},
      klass: "end",
    },
  },
];


export const servData = [
  {
    num: "",
    id: "h21ex3",
    h4: "Branding",
    p: "We give your business/brand a face and identity by creating the most suitable logo and mockups of your projects and services. We then assist you with finding your target markets and getting your brand's voice heard.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: samarc,
      colors: { bg: "#FFEDE0", br: "#F2AB79", pointer: "#F2AB79bf", },
      klass: "first",
    },
  },
  {
    num: "",
    id: "h21ex1",
    h4: "Design",
    p: "The design makes its mark through first impressions. We establish long-lasting relationships with our customers using eye-catching design and meaningful user experiences.",
    a: { text: "View more", url: "/projects" },
    img: {
      cover: svim,
      colors: { bg: "#FAE1EE", br: "#FEA5AB", pointer: "#CC669Bbf" },
      klass: "",
    },
    
  },
  {
    num: "",
    id: "h21ex2",
    h4: "Development",
    p: "Your website is the face of your business. Together, our developers and designers build an efficient, interactive, responsive platform that will appeal to your target audience.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: sdopop,
      colors: { bg: "#D3D6F0", br: "#9CA5F0", pointer: "#808cffbf"},
      klass: "",
    },
  },
  {
    num: "",
    id: "h21ex4",
    h4: "Concept design",
    p: "Using our creative design skills, we can help you make your product even better by creating a site or application that appeals to your audience.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: sdopegood,
      colors: { bg: "#FFEAE0", br: "#FFC3A6", pointer: "#FFA073bf" },
      klass: "end",
    },
  }
];
