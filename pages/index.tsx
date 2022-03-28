import { Center, Container, Flex, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProjectSection from '../src/Projects/ProjectSection'
import ContactSection from '../src/Contact/ContactSection'
import AboutMeSection from '../src/AboutMe/AboutMeSection'
import AsideBar from '../src/AsideBar/AsideBar'
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'

export default function IndexRoute () {

  return (
    <>
      <Flex direction="column" id='home' backgroundImage= "/background.jpg">
        <AsideBar />
        <Header />
        <Container maxW='container.xl'>
          <ProjectSection />
          <ContactSection />
          <AboutMeSection />
        </Container>
        <Footer />
      </Flex>
    </>
  )
}
