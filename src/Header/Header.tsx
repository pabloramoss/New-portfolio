import React from "react"
import {Flex, Image, Box, Link, Tooltip} from "@chakra-ui/react"
import config from "../config"

const Header = () => {

  return (
      <Flex display={["none","none","flex","flex"]}>
        <Flex position="absolute">
          <Box zIndex={3} >
            <Link href="#projects">
              <Tooltip placement="top" label="Projects">
                <Box  
                  h="19%"
                  w="15%"
                  /* bg="blue" */
                  position="absolute"
                  right="19%"
                  top="27%"
                  opacity={0.5}
                  />
                </Tooltip>
            </Link>
            <Link href="#contact">
              <Tooltip placement="top" label="Contact">
                <Box  
                  h="6%"
                  w="6%"
                  /* bg="red" */
                  position="absolute"
                  right="50%"
                  top="38%"
                  opacity={0.5}
                />
              </Tooltip>
            </Link>
            <Link href={`#${encodeURI("about me")}`}>
              <Tooltip placement="top" label="About me">
                <Box  
                  h="17%"
                  w="5%"
                  /* bg="green" */
                  position="absolute"
                  right="45%"
                  top="42%"
                  opacity={0.5}
                  />
              </Tooltip>
            </Link>
            <Link href={config.linkedin} isExternal>
            <Tooltip placement="top" label="Linkedin">
                <Box  
                  h="6%"
                  w="4%"
                  /* bg="purple" */
                  position="absolute"
                  right="61%"
                  top="27%"
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
            <source src="/Hero/portfolio.webm" type="video/webm" 
            style={{
              width: "100vw",
            }}
            />
          </video>
        </Flex>
        <Image display={["none","flex","flex","flex"]} objectFit="scale-down" src='/Hero/Loading.png' />
        
      </Flex>
        
  )
}

export default Header