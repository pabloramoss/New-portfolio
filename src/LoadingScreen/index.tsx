import React from "react";
import { Spinner, Stack } from "@chakra-ui/react";

const LoadingScreen: React.FC = () => {

  return (
    <Stack>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Stack>
  )
}

export default LoadingScreen;