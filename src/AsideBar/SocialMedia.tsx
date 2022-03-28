import React from 'react';
import { HStack, Icon, Link } from "@chakra-ui/react"
import {
  FaGithub, 
  FaLinkedin, 
  FaTelegram, 
  FaTwitter, 
} from 'react-icons/fa';
import config from "../config"

const SocialMedia = ({ color })=> {

  return(
    <HStack spacing={4} id='projects' alignItems="center" justifyContent="center">
      <Link href={config.linkedin} isExternal>
        <Icon _hover={{color:"cyan.400"}} h={8} w={8} color={color} as={FaLinkedin} />
      </Link>
      <Link href={config.github} isExternal>
        <Icon _hover={{color:"cyan.400"}} h={8} w={8} color={color} as={FaGithub} />
      </Link>
      <Link href={config.twitter} isExternal>
        <Icon _hover={{color:"cyan.400"}} h={8} w={8} color={color} as={FaTwitter} />
      </Link>
      <Link href={config.telegram} isExternal>
        <Icon _hover={{color:"cyan.400"}} h={8} w={8} color={color} as={FaTelegram} />
      </Link>
    </HStack>
  )
}
export default SocialMedia