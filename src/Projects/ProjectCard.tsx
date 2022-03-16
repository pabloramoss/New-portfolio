import { 
  Heading, 
  Icon, 
  Image, 
  Link, 
  Stack, 
  Text, 
  Badge, 
  Grid, 
  GridItem 
} from "@chakra-ui/react";
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { motion} from "framer-motion"

const ProjectCard = (props)=> {
  const MotionGrid = motion(Grid)


  return(
    <MotionGrid 
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 8px 32px 0 rgba(248, 186, 255, 0.25)" }} 
    gap={3}
    direction={["column","column","row","row"]} 
    className='card' 
    maxW="800px"
    gridTemplateAreas = {{
      base: `
      "image image" 
      "conten content"`, 
      sm: `
      "image content" 
      "image content"` 
      }}
    >
      <GridItem gridArea="image">
        <Link href={props.url} isExternal>
          <Image 
          src={props.src}
          objectFit="cover" 
          width="100%"
          height="100%"
          minW={240}
          />
        </Link>
      </GridItem>
      <GridItem gridArea="content" px={["6","4","4","4"]} py={6}>
        <Stack height="100%" justifyContent="space-between">
          <Stack gap={3}>
            <Link _hover={{textDecoration: "none"}} href={props.url} isExternal>
              <Heading _hover={{color: "purple.500"}} pe={4} fontSize={["22px","22px","30px","30px",]} color="white">{props.title}</Heading>
            </Link>
            <Text color="white">{props.description}</Text>
          </Stack>
          <Stack mt={4} direction="row" alignItems="center">
            <Link
            href={props.github} 
            isExternal
            >
              <Icon color="white" _hover={{color: "purple.500"}} as={FaGithub} w={8} h={8} />
            </Link>
            <Stack direction="row" 
            width="100%"
            >
            {props.tech.map((item, index)=><Badge justifySelf="center" key={index}>{item}</Badge>)}
          </Stack>
          </Stack>
        </Stack>
      </GridItem>
    </MotionGrid>
  )
}
export default ProjectCard