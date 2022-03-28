import React from "react"
import { Flex, Box, Link, Tooltip } from "@chakra-ui/react"
import ProjectScreen from "./ProjectsScreen"
import Title from "./Title"

const Header = () => {

  return (
      <Flex >
        <Flex display={["none","none","flex","flex"]} position="absolute">
          <Box zIndex={3} >
            <Link href="#contact">
              <Tooltip placement="top" label="Contact me">
                <Box  
                  h="19%"
                  w="6%"
                  /* bg="blue" */
                  position="absolute"
                  right="36%"
                  top="60%"
                  opacity={0.5}
                  />
                </Tooltip>
            </Link>
            <Link href="https://cafecito.app/pabloramoss" isExternal>
              <Tooltip placement="top" label="Cafecito">
                <Box  
                  h="20%"
                  w="10%"
                  /* bg="red" */
                  position="absolute"
                  left="0%"
                  top="78%"
                  opacity={0.5}
                />
              </Tooltip>
            </Link>
            <Link href="https://rpablog.vercel.app/" isExternal>
              <Tooltip placement="top" label="My blog">
                <Box  
                  h="63%"
                  w="27%"
                  /* bg="green" */
                  position="absolute"
                  left="0%"
                  top="11%"
                  opacity={0.5}
                  />
              </Tooltip>
            </Link>
          </Box>
          <video
          autoPlay
          loop
          muted
          >
            <source 
            src="/Hero/heroVideo.mp4" 
            type="video/mp4" 
            />
          </video>
        </Flex>
        <Box w="100vw" h="100vh" />
        {/* <ProjectsViewer /> */}
        <Title />
        <ProjectScreen />
      </Flex>
        
  )
}

export default Header