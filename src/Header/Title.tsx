import React from "react";
import { motion } from "framer-motion"
import { 
  Stack, 
  Box, 
  Flex, 
  Heading,
  Button, 
  Text,
  Link
} from "@chakra-ui/react";

const Title: React.FC = () => {
  const MotionStack = motion(Stack)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  return (
    <MotionStack 
    position="absolute"
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration: 1.5}}
    left={{base:"26vw", md:"30vw"}}
    top={{base:"0%", md:"14vw"}}
    mt={{base:"30vh", md:"0"}}
    >
      <Flex 
      direction="column" 
      gap={0}
      >
        <Stack spacing={0}>
          <Heading 
          color="white" 
          fontSize={{base:"2xl", md:"2vw"}}
          >Hello, I am <Box 
          as="span" 
          color="cyan"
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
          fontSize={{base:"xl", md:"1vw"}}
          >
            Frontend developer
          </MotionText>
        </Stack>
        <Link href="#projects" _hover={{textDecoration: "none"}}>
          <MotionBox 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:3, 
          duration: 1.5}}
          mt={{base: 5, md: 2}}
          width={{base: 150, md:"10vw"}}
          height={{base: 10, md:"2vw"}}
          >
            <Button 
            colorScheme='cyan' 
            width="100%"
            height="100%"
            rounded="none"
            border="2px solid transparent" 
            _hover={{bg:"none", borderColor:"cyan", color: "cyan"}}
            fontSize={{base: "md", md:"1vw"}}
            zIndex={150}
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