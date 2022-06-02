/*  project 1 = gecomm
    project 2 = valobrain
    project 3 = torito bar
    project 4 = my blog
    project 5 = my portfolio
    project 6 = simple Api store
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
  hardTech: "HTML, CSS, Javascript, Typescript, React, Redux, Next.js, Chakra-UI, Tailwind CSS, Styled-components, Framer-motion, MongoDB, Git, Github, Postman, GraphQL, Jest, Cypress, React testing library, Figma, Photoshop.",
  softTech: "Comunication, teamwork, flexibility, creativity, time management, planification.",
  future: "My goal is keep improving my frontend and UI/UX skills. Also, I would like to improve my knowdlege about web performance and web architecture.",
  telegram: "https://tttttt.me/pablooramoss",
  cv: "",
}

const projects = [
  {
    name: "Simple API store",
    description: "This is an API that can provide an array of 30 products or an object with a single product. Useful for e-commerce prototypes. It was made with Next.js API routes feature.",
    url: "https://simpleapistore.vercel.app",
    github: "https://github.com/pabloramoss/fake-api-shop",
    image: "/Images/apiStoreBanner.jpg",
    tech: ["NEXTS.JS", "CHAKRA-UI"],
    id: "api",
  },
  {
    name: "Gecomm",
    description: "Zero cost e-commerce, since it has a database of products and sales made in Google Sheet. The app get the database from server side using getStaticProps and update the content at runtime with Incremental Static Regeneration.",
    url: "https://ecommerce-pablo.vercel.app/",
    github: "https://github.com/pabloramoss/Gecomm",
    image: "/Images/gecommBanner.jpg",
    tech: ["NEXT.JS", "CHAKRA-UI", "SSG", "ISR", "TELEGRAM API"],
    id: "gecomm",
  },
  {
    name: "Valobrain",
    description: "Gaming app for Valorant which consists in a video search engine from a specific YouTube channel.",
    url: "https://valobrain.vercel.app/",
    github: "https://github.com/pabloramoss/stratcall",
    image: "/Images/valobrainBanner.jpg",
    tech: ["REACT JS","CHAKRA-UI", "YOUTUBE API"],
    id: "valobrain",
  },
  {
    name: "El Torito Bar",
    description: "App with mobile design for a restaurant with a digital menu where you can make orders.",
    url: "https://eltoritobar.vercel.app",
    github: "https://github.com/pabloramoss/El-toro-bar",
    image: "/Images/toritoBanner.jpg",
    tech: ["TYPESCRIPT", "NEXT.JS", "CHAKRA-UI", "SSG", "ISR"],
    id: "torito",
  },
  {
    name: "My blog",
    description: "Own blog where I share my experiences working with different technologies.",
    url: "https://rpablog.vercel.app/",
    github: "https://github.com/pabloramoss/my-blog",
    image: "/Images/myBlogBanner.jpg",
    tech: ["NEXT.JS", "CHAKRA-UI","MARKDOWN"],
    id: "blog",
  },
  {
    name: "My portfolio",
    description: "My humble portfolio, made it with love. 3D with SketchUp, rendered with TwinMotion, animations with After Effects",
    url: "https://pabloramos.vercel.app",
    github: "https://github.com/pabloramoss/New-portfolio",
    image: "/Images/myPortfolioBanner.jpg",
    tech: ["NEXTS.JS", "CHAKRA-UI"],
    id: "portfolio",
  },
]
export { projects }
export default config