import Hero from '/src/components/Hero/Hero'
import Projects from '/src/components/Projects/Projects'
import Technologies from '/src/components/Technologies/Technologies'
import { Layout } from '../layout/Layout'
import { Section, HeroSection } from '../src/styles'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
    </Layout>
  )
}

export default Home
