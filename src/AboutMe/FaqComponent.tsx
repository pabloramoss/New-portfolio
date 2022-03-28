import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex
} from '@chakra-ui/react'

const FaqComponent = ( props )=> {

  return(
    <Flex justifyContent="center" boxShadow='dark-lg'>
    <Accordion w={{base:"95vw", sm:"80vw", xl:"700px"}} allowMultiple color="#110b16" >
      <AccordionItem color="white" className='card'>
          <AccordionButton >
            <Box flex='1' textAlign='left'>
              {props.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel pb={4} bg="none" color="white">
          {props.body}
        </AccordionPanel>
      </AccordionItem>
</Accordion>
    </Flex>
  )
}
export default FaqComponent