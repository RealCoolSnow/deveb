// import inter from '../assets/covers/int.jpg'
// import ext from '../assets/covers/ext.jpg'
// import t3d from '../assets/covers/ren.jpg'
// import ani from '../assets/covers/ani.jpg'
// import vr from '../assets/covers/vr.jpg'
import dopegood from '../assets/covers/dopegood.webp'
import amarc from '../assets/covers/am-arc.webp'
import vim from '../assets/covers/vim.webp'
import dopop from '../assets/covers/dopop2.webp'
import comfeey from '../assets/covers/comfeey.webp'








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
    num: "Dopop",
    id: "hp104",
    h4: "NFT digital marketplace",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: dopop,
      colors: { cur: "#808CFF", pointer: "#808cffbf", bg:"#D3D6F0", tx:"#7781D9", br:"#A6AFFF"},
      klass: "first",
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
    num: "AM-ARC",
    id: "hp102",
    h4: "Architectural Design Studio",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: amarc,
      colors: { cur: "#F2AB79", pointer: "#F2AB79bf", bg:"#FFEDE0", tx:"#F2AB79", br:"#F2AB79"},
      klass: "threeD",
    },
  },
  {
    num: "Vimcosmo",
    id: "hp103",
    h4: "Online store, Cosmetic brand",
    p: "",
    a: { text: "Learn more",  url:"/projects" },
    img: {
      cover: vim,
      colors: { cur: "#FF99CE", pointer: "#CC669Bbf", bg:"#FAE1EE", tx:"#E67FB4", br:"#FEA5D3"},
      klass: "threeD",
    },
  },
  {
    num: "Comfeey",
    id: "hp105",
    h4: "Online store, Furniture brand",
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
    id: "h21ex1",
    h4: "Design",
    p: "Design makes its mark through first impressions. Using eye-catching design and meaningful user experiences, we establish long-lasting relationships with your customers.",
    a: { text: "View more", url: "/projects" },
    img: {
      cover: dopegood,
      colors: { bg: "#FFEAE0", br: "#FFC3A6" },
      klass: "first",
    },
  },
  {
    num: "",
    id: "h21ex2",
    h4: "Development",
    p: "Your website is the face of your business. Together, our developers and designers build an efficient, interactive and responsive platform that will appeal to your target audience.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: vim,
      colors: { bg: "#FEE0E2", br: "#FEA5AB" },
      klass: "",
    },
  },
  {
    num: "",
    id: "h21ex3",
    h4: "Branding",
    p: "We give your business a face and identify your brand by creating the most suitable logo, along with mockups of your projects and services. We then assist you with finding your target markets and getting your brand's voice heard.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: dopop,
      colors: { bg: "#D3D6F0", br: "#9CA5F0" },
      klass: "",
    },
  },
  {
    num: "",
    id: "h21ex4",
    h4: "Concept design",
    p: "The architectural movie provides a highly immersive experience for presentation and property marketing. It shows surroundings, interior, and exterior design, and walks the viewer through the property as if it were already built.",
    a: { text: "Learn more", url: "/projects" },
    img: {
      cover: comfeey,
      colors: { bg: "#E0F0FF", br: "#A6D4FF" },
      klass: "end",
    },
  }
];
