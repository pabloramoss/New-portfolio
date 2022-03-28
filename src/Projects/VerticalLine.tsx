import React from 'react';
import { 
  Stack,
  Slider, 
  SliderFilledTrack, 
  SliderTrack, 
  Icon 
} from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa";

const VerticalLine = ()=> {

  return(
    <Stack py={10}>
      <Icon alignSelf="center" color="cyan.500" as={FaCircle}></Icon>
      <Slider 
      minH={100} 
      orientation='vertical' 
      aria-label="slider" 
      isDisabled 
      value={100}>
        <SliderTrack>
          <SliderFilledTrack bg="cyan.500" />
        </SliderTrack>
      </Slider>
      <Icon alignSelf="center" color="cyan.500" as={FaCircle}></Icon>
    </Stack>
  )
}
export default VerticalLine