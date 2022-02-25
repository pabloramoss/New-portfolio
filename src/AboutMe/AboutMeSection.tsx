import React from 'react';
import {Stack, Heading,} from "@chakra-ui/react"
import FaqComponent from './FaqComponent';
import config from '../config';

const AboutMeSection = ()=> {

  return(
    <Stack id={`${encodeURI("ACERCA DE MI")}`} alignItems="center" justifyContent="center" pb={50}>
      <Heading fontSize={["40px", "40px","60px","60px"]} py={20} color="purple.500">ACERCA DE MI</Heading>
      <FaqComponent body={config.about} title={config.aboutTitle}/>
      <FaqComponent body={config.hardTech} title={config.hardTechTitle}/>
      <FaqComponent body={config.softTech} title={config.softTechTitle}/>
      <FaqComponent body={config.future} title={config.futureTitle}/>
    </Stack>
  )
}
export default AboutMeSection