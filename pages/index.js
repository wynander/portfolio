import BgAnimation from '/src/components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '/src/components/Hero/Hero';
import Projects from '/src/components/Projects/Projects';
import Technologies from '/src/components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../src/styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
