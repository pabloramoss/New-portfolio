import { Heading, Icon, Flex,  Image, Link, Stack, Text, Badge, Grid } from "@chakra-ui/react";
import React from 'react';
import { FaGithub } from "react-icons/fa";
import {motion} from "framer-motion"

const ProjectCard = (props)=> {
  const MotionFlex = motion(Flex)
  return(
    <MotionFlex 
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 8px 32px 0 rgba(248, 186, 255, 0.25)" }} 
    gap={3}
    direction={["column","column","row","row"]} 
    className='card' 
    rounded={20}
    w={["90vw","90vw","auto","auto"]}
    maxW="800px"
    >
      <Link href={props.url} isExternal>
        <Image 
        src={props.src} //props.src
        objectFit="cover" 
        borderBottomRightRadius={["0","0","0","0"]}
        borderBottomLeftRadius={["0","0","20px","20px"]}
        borderTopLeftRadius={["20","20","20","20"]}
        borderTopRightRadius={["20","20","0","0"]}
        height="100%"
        width="100%"
        />
      </Link>
      <Stack gap={6} px={["6","6","0","0"]} py={6} justifyContent="space-between" alignItems="start">
        <Stack gap={3} justifyContent="start" alignItems="start">
          <Link href={props.url} >
            <Heading _hover={{color: "purple.500"}} pe={4} fontSize={["22px","22px","30px","30px",]} color="white">{props.title}</Heading>
          </Link>
          <Text color="white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
          
        </Stack>
        <Stack direction="row" alignItems="center">
          <Link
          href={props.github} 
          isExternal
          >
            <Icon color="white" _hover={{color: "purple.500"}} as={FaGithub} w={8} h={8}>icon</Icon>
          </Link>
          <Grid 
        templateColumns='repeat(4, 1fr)' 
        gap={3}>
          {props.tech.map((item, index)=><Badge justifySelf="center" key={index}>{item}</Badge>)}
        </Grid>
        </Stack>
      </Stack>
    </MotionFlex>
  )
}
export default ProjectCard