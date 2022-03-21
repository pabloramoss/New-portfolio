import React from 'react';
import {
  Stack, 
  Heading, 
  Link, 
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  useDisclosure, 
  Divider, 
  Text, 
  DrawerCloseButton
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';

function AsideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sections = ["home","projects","contact","about me"]
  const MotionHeading = motion(Heading)
  const menuLinks = sections.map((section) => <Link _hover={{textDecoration: "none"}} key={section} href={`#${encodeURI(section)}`}><MotionHeading whileHover={{ 
    scale: 1.02}}  _hover={{color:"purple.400"}} fontWeight={400} color="white" fontSize={30} onClick={onClose} my={3} colorScheme="purple">{section.toUpperCase()}</MotionHeading><Divider py={2} /></Link>)
    
  return (
    <Stack className='asidebar' py={3} bg="none" pos="fixed" w="100%" zIndex={100}>
        <Button 
        position="absolute" 
        right={0} 
        color="white" 
        _hover={{bg:"none"}} 
        bg="none" 
        onClick={onOpen}
        >
          <FaBars size={30} />
        </Button>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
            <DrawerContent bg="none" sx={{ backdropFilter: "blur(16px) brightness(40%)"}}>
            <DrawerCloseButton color="white" size="2xl" h={10} w={10} />
              <DrawerBody>
                <Stack pt={{base:10, md:20}} justifyContent="space-between" height="100%">
                  <Stack spacing={8}>
                    {menuLinks}
                  </Stack>
                  <Stack pb={{base: 5, md: 0}} spacing={5}>
                    <SocialMedia color="gray.400"/>
                    <Text 
                    display={["none","flex","flex","flex"]} 
                    pb={10}
                    alignSelf="center" 
                    color="gray.400"
                    >
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
