import { Stack, Text } from "@chakra-ui/react";
import React from 'react';
import SocialMedia from "../AsideBar/SocialMedia";

const Footer = ()=> {

  return(
    <Stack justifyContent="center" className="card" w="100%" h="150px">
      <Stack>
        <SocialMedia color="gray.400" />
        <Text alignSelf="center" color="gray.400">
          ©
          {new Date().getFullYear()}
          {' '}
          Pablo Ramos
        </Text>
      </Stack>
    </Stack>
  )
}
export default Footer