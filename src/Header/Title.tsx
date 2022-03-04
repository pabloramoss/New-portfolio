import React from "react";
import {motion} from "framer-motion"
import { Stack, Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const Title: React.FC = () => {
  const MotionStack = motion(Stack)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  return (
    <MotionStack 
    position={["relative","relative","absolute","absolute"]} 
    height="100vh" 
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration: 1.5}}
    >
      <Flex 
      direction="column" 
      height="60vh" 
      gap={6} 
      ms={{base:"0", md:"10vw"}}  
      pt="300px" 
      alignItems={{base:"center", md:"flex-start"}}>
        <Stack spacing={3}>
        <Heading 
        color="white" 
        size="xl"
        >Hello, I am <Box 
        as="span" 
        bgGradient='linear(to-r, #a956ff, #b975ff)' 
        bgClip='text'
        fontWeight={800}
        >
          Pablo
          </Box>
        </Heading>
        <MotionText 
        color="white"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2, duration: 1.5}} 
        fontSize='xl'>Frontend developer</MotionText>
        </Stack>
        <Link href="#PROYECTOS">
          <MotionBox 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:3, duration: 1.5}}>
            <Button 
            colorScheme='purple' 
            width="200px" 
            >
              MY PROJECTS
            </Button>
          </MotionBox>
        </Link>
      </Flex>
    </MotionStack>
  )
}

export default Title;
