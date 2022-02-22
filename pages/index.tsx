import ProjectCard from '../src/Projects/ProjectCard'
import { Container, Stack, Flex, Image } from '@chakra-ui/react'
import ProjectSection from '../src/Projects/ProjectSection'
import ContactSection from '../src/Contact/ContactSection'
import AboutMeSection from '../src/AboutMe/AboutMeSection'
import AsideBar from '../src/AsideBar/AsideBar'
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'

export default function Home () {
  return (
    <Flex direction="column" id='HOME' alignItems='center' bg="gray.900">
      <AsideBar />
      <Header />
      <Container maxW='container.xl'>
        <ProjectSection />
        <ContactSection />
        <AboutMeSection />
      </Container>
      <Footer />
    </Flex>
  )
}
