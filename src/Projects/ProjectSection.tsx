import React from 'react';
import { Stack, Heading } from "@chakra-ui/react"
import ProjectCard from './ProjectCard';
import VerticalLine from './VerticalLine';
import { projects } from "../config"

const ProjectSection = ()=> {

  return(
    <Stack 
    id='projects' 
    alignItems="center" 
    justifyContent="center"
    pt={40}
    >
      <Heading fontSize={["40px", "40px","60px","60px"]} color="cyan" py={20} >PROJECTS</Heading>
      <VerticalLine />
      {projects.map(project=> 
        <Stack key={project.name}>
          <ProjectCard 
            title={project.name} 
            tech={project.tech} 
            src={project.image} 
            url={project.url} 
            description={project.description} 
            github={project.github} 
          />
          <VerticalLine />
        </Stack>)}
    </Stack>
  )
}
export default ProjectSection