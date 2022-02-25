import React from "react"
import {Stack, Flex, Image, Box, Link, Heading} from "@chakra-ui/react"
import config from "../config"

const Header = () => {
  return (
      <Flex bg='red'>
        <Flex position="absolute">
          <Box display={["none","flex","flex","flex"]} >
            <Link href="#PROYECTOS">
              <Box  
                h="19%"
                w="15%"
                /* bg="blue" */
                position="absolute"
                right="28%"
                top="20%"
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
                right="58%"
                top="30%"
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
                right="53%"
                top="36%"
                opacity={0.5}
              >
              </Box>
            </Link>
            <Link href={config.linkedin} isExternal>
              <Box  
                h="5%"
                w="3%"
                /* bg="purple" */
                position="absolute"
                right="70%"
                top="20%"
                opacity={0.5}
              >
              </Box>
            </Link>
          </Box>
          <Image display={["none","flex","flex","flex"]} objectFit="scale-down" src='/Hero/default.png' />
          <Image alignSelf="start" justifySelf='center' display={["flex","none","none","none"]} objectFit="scale-down" src='/Hero/default-mobile.jpg' />
        </Flex>
        <Image display={["none","flex","flex","flex"]} objectFit="scale-down" src='/Hero/default.png' />
        <Image alignSelf="start" justifySelf='center' display={["flex","none","none","none"]} objectFit="scale-down" src='/Hero/default-mobile.jpg' />
      </Flex>
        
  )
}

export default Header