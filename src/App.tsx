import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
// import { Expertise } from "./components/sections/Expertise"
import { Hero } from "./components/sections/Hero"
import { Industries } from "./components/sections/Industries"
import { Services } from "./components/sections/Services"
import { SlideInSection } from "./utils/SlideInSection "

function App() {
  return (
    <Layout title="Bennet & Chase">
      <Hero />
      
      {/* <SlideInSection direction="left">
        <Expertise />
      </SlideInSection> */}
      
      <SlideInSection direction="right">
        <About />
      </SlideInSection>
      
      <SlideInSection direction="left">
        <Services />
      </SlideInSection>
      
      <SlideInSection direction="right">
        <Industries />
      </SlideInSection>
      
      <SlideInSection direction="left">
        <Contact />
      </SlideInSection>
    </Layout>
  )
}

export default App
