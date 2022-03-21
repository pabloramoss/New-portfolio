/*  project 1 = gecomm
    project 2 = valobrain
    project 3 = torito bar
    project 4 = my blog
    project 5 = my portfolio
 */
const config = {
  title: "Pablo Ramos",
  description: "Frontend Developer",
  siteUrl: "https://pabloramos.vercel.app",
  twitter: "https://twitter.com/rpablo_dev",
  github: "https://github.com/pabloramoss",
  linkedin: "https://www.linkedin.com/in/pabloramoss/",
  aboutTitle: "Who am I?",
  hardTechTitle: "Hard skills",
  softTechTitle: "Soft skills",
  futureTitle: "Future plans",
  about: "I am a frontend developer, passionate for learning about any kind of technology, always trying to improve my skills challenging myself. Currently working with React (especially with NextJS). Hope you found here who you are looking for. Greetings!",
  hardTech: "HTML, CSS, Javascript, Typescript, React, Next.js, Chakra-UI, Framer-motion, MongoDB, Git, Github, Postman, Figma, Photoshop.",
  softTech: "Comunication, teamwork, flexibility, creativity, time management, planification.",
  future: "My goal is keep improving my frontend and UI/UX skills. Also, I would like to learn everything related to web3 like Solidity, Web3.js, Ether.js, etc.",
  telegram: "https://tttttt.me/pablooramoss",
  cv: "",
};

const projects = [{
  name: "Gecomm",
  description: "Zero cost e-commerce, since it has a database of products and sales made in Google Sheet.",
  url: "https://ecommerce-pablo.vercel.app/",
  github: "https://github.com/pabloramoss/Gecomm",
  image: "/Images/gecommBanner.jpg",
  tech: ["NEXT.JS", "CHAKRA-UI", "SSR"],

},
{
  name: "Valobrain",
  description: "Gaming app for Valorant which consists in a video search engine from a specific YouTube channel.",
  url: "https://valobrain.vercel.app/",
  github: "https://github.com/pabloramoss/stratcall",
  image: "/Images/valobrainBanner.jpg",
  tech: ["REACT JS","CHAKRA-UI", "YOUTUBE API"],

},
{
  name: "El Torito Bar",
  description: "App with mobile design for a restaurant with a digital menu where you can make orders.",
  url: "https://eltoritobar.vercel.app",
  github: "https://github.com/pabloramoss/El-toro-bar",
  image: "/Images/toritoBanner.jpg",
  tech: ["TYPESCRIPT", "NEXT.JS", "CHAKRA-UI"],

},
{
  name: "My blog",
  description: "Own blog where I share my experiences working with different technologies.",
  url: "https://rpablog.vercel.app/",
  github: "https://github.com/pabloramoss/my-blog",
  image: "/Images/myBlogBanner.jpg",
  tech: ["NEXT.JS", "CHAKRA-UI","MARKDOWN"],

},
{
  name: "My portfolio",
  description: "My humble portfolio, made it with love. 3D with SketchUp, rendered with TwinMotion, animations with After Effects",
  url: "https://pabloramos.vercel.app",
  github: "https://github.com/pabloramoss/New-portfolio",
  image: "/Images/myPortfolioBanner.jpg",
  tech: ["NEXTS.JS", "CHAKRA-UI"],

},
]
export { projects }
export default config;