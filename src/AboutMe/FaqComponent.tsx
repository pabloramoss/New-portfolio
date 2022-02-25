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

const FaqComponent = (props)=> {

  return(
    <Flex justifyContent="center" boxShadow='dark-lg'>
    <Accordion w={{base:"100vw", sm:"80vw", xl:"700px"}} allowMultiple color="#110b16" >
      <AccordionItem color="white" borderRadius="10px" bgGradient='linear(to-r, #a956ff, #b975ff)'
>
        <h2>
          <AccordionButton >
            <Box flex='1' textAlign='left'>
              {props.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} bg="gray.900" color="white">
          {props.body}
        </AccordionPanel>
      </AccordionItem>
</Accordion>
    </Flex>
  )
}
export default FaqComponent