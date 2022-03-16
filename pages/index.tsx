import { Container, Flex } from '@chakra-ui/react'
import ProjectSection from '../src/Projects/ProjectSection'
import ContactSection from '../src/Contact/ContactSection'
import AboutMeSection from '../src/AboutMe/AboutMeSection'
import AsideBar from '../src/AsideBar/AsideBar'
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'
import Title from "../src/Header/Title"

export default function Home () {
  return (
    <Flex direction="column" id='home' backgroundImage="background.jpg">
      <AsideBar />
      <Header />
      <Title />
      <Container maxW='container.xl'>
        <ProjectSection />
        <ContactSection />
        <AboutMeSection />
      </Container>
      <Footer />
    </Flex>
  )
}
