import React, { useState } from "react";
import { Stack, Image, Link } from "@chakra-ui/react";
import { projects } from "../config"

const ProjectsViewer: React.FC = () => {
  const [background, setBackground] = useState("")
  
  return (
    <Stack 
    zIndex={106} 
    position="absolute"
    top="12vw"
    left="28vw"
    height="18vw"
    width="33vw"
    backgroundSize="90%"
    justifyContent="end"
    display={["none","none","flex","flex"]}
    >
      <Image 
      display={background === "" ? "none" : "flex"} 
      h="9vw" 
      w="9vw" 
      src={background} 
      alignSelf="end" 
      m="1vw" />
      <Stack 
      px={5} 
      pb="1vw"
      direction="row" 
      spacing={5}
      >
        {projects.map(project => 
          <Link 
          rounded={5} 
          overflow="hidden" 
          href="#projects" 
          className="project-screen" 
          key={project.name} 
          onMouseEnter={()=>setBackground(project.image)} 
          onMouseLeave={()=>setBackground("")}
          >
            <Image src={project.image} alt={project.name} />
          </Link>)}
        </Stack>
    </Stack>
  )
}

export default ProjectsViewer;
