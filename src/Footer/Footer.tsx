import { Heading, Icon, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from 'react';
import SocialMedia from "../AsideBar/SocialMedia";

const Footer = ()=> {

  return(
    <Stack justifyContent="center" bg="white" w="100%" h="200px">
      <Stack>
        <SocialMedia color="black" />
        <Text pb={10} alignSelf="center">
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