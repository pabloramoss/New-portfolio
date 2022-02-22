import React from 'react';
import {Stack, Heading, Text, Button, Link} from "@chakra-ui/react"
import { FaTelegram, FaLinkedin} from "react-icons/fa";
import config from "../config"

const ContactSection = ()=> {

  return(
    <Stack id="CONTACTO" alignItems="center" justifyContent="center">
      <Heading fontSize={["40px", "40px","60px","60px"]} py={20} color="purple.500">CONTACTO</Heading>
      <Text pb={6} color="white">Puedes contactarme a través de:</Text>
      <Stack direction={["column","column","row","row"]} justifyContent='center' width="150px" spacing={5}>
        <Link href={config.linkedin} isExternal>
          <Button border="2px solid transparent" _hover={{bg:"gray.900", border:"2px", borderColor:"purple.500"}} px={8} py={4} w="100%" colorScheme="purple" rightIcon={<FaLinkedin />}>Linkedin</Button>
        </Link>
        <Link href={config.telegram} isExternal>
          <Button border="2px solid transparent" _hover={{bg:"gray.900", border:"2px", borderColor:"purple.500"}} px={8} py={4} w="100%" colorScheme="purple" rightIcon={<FaTelegram />}>Telegram</Button>
        </Link>
      </Stack>
    </Stack>
  )
}
export default ContactSection