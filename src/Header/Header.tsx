import React from "react"
import {Stack, Image, Box, Link} from "@chakra-ui/react"
import config from "../config"

const Header = () => {
  return (
    <Stack 
    position="relative"    
    >
        <Image h="100%" src='/hero/default.png' />
        <Link href="#Proyectos">
          <Box  
            h="19%"
            w="15%"
            overflow="hidden"
            /* bg="blue" */
            position="absolute"
            right="28%"
            top="20%"
            opacity={0.5}
          >
          </Box>
        </Link>
        <Link href="#">
          <Box  
            h="6%"
            w="6%"
            overflow="hidden"
            /* bg="red" */
            position="absolute"
            right="58%"
            top="30%"
            opacity={0.5}
          >
          </Box>
        </Link>
        <Link href={`#${encodeURI("Acerca de mi")}`}>
          <Box  
            h="24%"
            w="5%"
            overflow="hidden"
            /* bg="green" */
            position="absolute"
            right="53%"
            top="31%"
            opacity={0.5}
          >
          </Box>
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <Box  
            h="5%"
            w="3%"
            overflow="hidden"
            /* bg="purple" */
            position="absolute"
            right="70%"
            top="19%"
            opacity={0.5}
          >
          </Box>
        </Link>
    </Stack>
  )
}

export default Header
{/*  */}