import { Center, Container, Flex, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProjectSection from '../src/Projects/ProjectSection'
import ContactSection from '../src/Contact/ContactSection'
import AboutMeSection from '../src/AboutMe/AboutMeSection'
import AsideBar from '../src/AsideBar/AsideBar'
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'
import Title from "../src/Header/Title"

export default function IndexRoute () {
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setTimeout(()=> {
      setLoading(true)
    }, 3000)
  },[])

  return (
    <>
      {!loading 
        ? 
        <Center bg="black" h="100vh" w="100vw">
          <video
          autoPlay
          loop
          muted
          >
            <source 
            src="/loading.webm" 
            type="video/webm" 
            />
          </video>
          {/* <Spinner /> */}
        </Center>
        :
        <Flex direction="column" id='home' backgroundImage= "/background.jpg">
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
      }
    </>
  )
}
