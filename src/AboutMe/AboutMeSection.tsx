import React from 'react';
import {Stack, Heading,} from "@chakra-ui/react"

const AboutMeSection = ()=> {

  return(
    <Stack id={`${encodeURI("ACERCA DE MI")}`} alignItems="center" justifyContent="center">
      <Heading fontSize={["40px", "40px","60px","60px"]} py={20} color="purple.500">ACERCA DE MI</Heading>
    </Stack>
  )
}
export default AboutMeSection