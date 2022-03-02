import React from 'react';
import {
  Stack, Heading, Link, Button, Drawer, DrawerOverlay, DrawerBody, DrawerContent, useDisclosure, Divider, Text, Icon, DrawerCloseButton} from '@chakra-ui/react';
import {
  FaBars, FaWindowClose,
} from 'react-icons/fa';
import SocialMedia from './SocialMedia';

function AsideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sections = ["home","proyectos","contacto","acerca de mi"]
  const menuLinks = sections.map((section) => <Link key={section} href={`#${encodeURI(section)}`}><Heading _hover={{color:"purple.500"}} fontWeight={400} color="white" fontSize={30} onClick={onClose} my={3} colorScheme="purple">{section.toUpperCase()}<Divider py={2} /></Heading></Link>)

  return (
    <Stack py={3} bg="none" pos="fixed" w="100%" zIndex={100}>
        <Button position="absolute" right={0} color="white" _hover={{bg:"none"}} bg="none" onClick={onOpen}><FaBars size={30} /></Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent bg="gray.800">
            <DrawerCloseButton color="white" size="2xl" h={10} w={10} />
              <DrawerBody>
                <Stack mt={20} justifyContent="space-between" height="100%">
                  <Stack spacing={8}>
                    {menuLinks}
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
