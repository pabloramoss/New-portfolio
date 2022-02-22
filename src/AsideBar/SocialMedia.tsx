import React from 'react';
import {HStack, Icon, Heading, IconButton, Link} from "@chakra-ui/react"
import {
  FaGithub, FaLinkedin, FaTelegram, FaTwitter, 
} from 'react-icons/fa';

const SocialMedia = ({color})=> {

  return(
    <HStack spacing={4} id='Proyectos' alignItems="center" justifyContent="center">
      <Link href="/">
        <Icon _hover={{color:"purple.400"}} h={8} w={8} color={color} as={FaLinkedin} />
      </Link>
      <Link href="/">
        <Icon _hover={{color:"purple.400"}} h={8} w={8} color={color} as={FaGithub} />
      </Link>
      <Link href="/">
        <Icon _hover={{color:"purple.400"}} h={8} w={8} color={color} as={FaTwitter} />
      </Link>
      <Link href="/">
        <Icon _hover={{color:"purple.400"}} h={8} w={8} color={color} as={FaTelegram} />
      </Link>
    </HStack>
  )
}
export default SocialMedia