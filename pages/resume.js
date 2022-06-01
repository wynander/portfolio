import { Layout } from '../layout/Layout'
import Hero from '/src/components/Hero/Hero'
import Projects from '/src/components/Projects/Projects'
import Technologies from '/src/components/Technologies/Technologies'

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
