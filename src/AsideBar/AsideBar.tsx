import React from 'react';
import {
  Stack, Image, Heading, Link, Container, HStack, IconButton, Button, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, useDisclosure, Divider, Text, Icon,
} from '@chakra-ui/react';
import {
  FaBars, FaWindowClose,
} from 'react-icons/fa';
import SocialMedia from './SocialMedia';

function AsideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sections = ["HOME","PROYECTOS","CONTACTO","ACERCA DE MI"]

  return (
    <Stack py={3} bg="none" pos="fixed" w="100%" zIndex={100}>
        <Button alignSelf="end" color="white" _hover={{bg:"none"}} bg="none" onClick={onOpen}><FaBars size={30} /></Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent bg="gray.800">
              <DrawerBody>
                <Stack justifyContent="space-between" height="100%">
                  <Stack spacing={8}>
                    <Icon m={3} alignSelf="end" _hover={{cursor:"pointer"}} onClick={onClose} color="white" h={10} w={10} as={FaWindowClose}><FaWindowClose /></Icon>
                    {sections.map((section) => <Link key={section} href={`#${encodeURI(section)}`}><Heading _hover={{color:"purple.500"}} fontWeight={400} color="white" fontSize={30} onClick={onClose} my={3} colorScheme="purple">{section}<Divider py={2} /></Heading></Link>)}
                  </Stack>
                <Stack spacing={10}>
                  <SocialMedia color="white"/>
                  <Text pb={10} alignSelf="center" color="gray.400">
                    ©
                    {new Date().getFullYear()}
                    {' '}
                    Pablo Ramos
                  </Text>
                </Stack>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
    </Stack>
  );
}

export default AsideBar;
