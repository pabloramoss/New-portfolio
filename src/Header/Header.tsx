import React from "react"
import {Flex, Image, Box, Link} from "@chakra-ui/react"
import config from "../config"
import Title from "./Title"

const Header = () => {

  return (
      <Flex>
        <Flex position="absolute">
          <Box zIndex={3} display={["none","flex","flex","flex"]} >
          <Title />
            <Link href="#PROYECTOS">
              <Box  
                h="19%"
                w="15%"
                /* bg="blue" */
                position="absolute"
                right="19%"
                top="27%"
                opacity={0.5}
              >
              </Box>
            </Link>
            <Link href="#CONTACTO">
              <Box  
                h="6%"
                w="6%"
                /* bg="red" */
                position="absolute"
                right="50%"
                top="38%"
                opacity={0.5}
              >
              </Box>
            </Link>
            <Link href={`#${encodeURI("ACERCA DE MI")}`}>
              <Box  
                h="17%"
                w="5%"
                /* bg="green" */
                position="absolute"
                right="45%"
                top="42%"
                opacity={0.5}
              >
              </Box>
            </Link>
            <Link href={config.linkedin} isExternal>
              <Box  
                h="6%"
                w="4%"
                /* bg="purple" */
                position="absolute"
                right="61%"
                top="27%"
                opacity={0.5}
              >
              </Box>
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
        <Image display={["none","flex","flex","flex"]} objectFit="scale-down" src='https://via.placeholder.com/1920x1080' />
        
      </Flex>
        
  )
}

export default Header