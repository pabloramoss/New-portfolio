import React from 'react';
import {Stack, Heading,} from "@chakra-ui/react"
import ProjectCard from './ProjectCard';
import VerticalLine from './VerticalLine';
import config from "../config"

const ProjectSection = ()=> {

  return(
    <Stack id='projects' alignItems="center" justifyContent="center">
      <Heading fontSize={["40px", "40px","60px","60px"]} color="purple.500" py={20} >PROJECTS</Heading>
      <ProjectCard 
      title="Valobrain" 
      src={config.project1BannerMobile} 
      tech={config.project1Tech}
      url={config.project1Url}
      github={config.project1Github}
      description={config.project1Description}
      />
      <VerticalLine />
      <ProjectCard 
        title="Gecomm" 
        tech={config.project6Tech} 
        src={config.project6BannerMobile}
        url={config.project6Url}
        github={config.project6Github}
        description={config.project2Description}
      />
      <VerticalLine />
      <ProjectCard 
      title="My blog" 
      tech={config.project2Tech}
      src={config.project2BannerMobile}
      url={config.project2Url}
      github={config.project2Github}
      description={config.project3Description}
      />
      <VerticalLine />
      <ProjectCard 
      title="My portfolio" 
      tech={config.project3Tech}
      src={config.project3BannerMobile}
      url={config.project3Url}
      github={config.project3Github}
      description={config.project4Description}
      />
      
    </Stack>
  )
}
export default ProjectSection