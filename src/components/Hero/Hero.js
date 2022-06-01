import React from 'react'
import BgAnimation from '/src/components/BackgroundAnimation/BackgroundAnimation'
import { Section, SectionText, SectionTitle, HeroSection } from '../../styles'
import { LeftSection, ButtonDiv, ButtonLink } from './HeroStyles'
import Link from 'next/link'


const Hero = (props) => (
  <HeroSection row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wyn Anderson <br />
      </SectionTitle>
      <SectionText>
        Front-end oriented software engineer currently overseeing the
        development of electric motor avionics (C/C++) for aerospace
        applications.
      </SectionText>
      <ButtonDiv>

        <Link href='/resume'>
          <ButtonLink>
            Resume
          </ButtonLink>
        </Link>
        <ButtonLink target="_blank" href="https://github.com/wynander">
          GitHub
        </ButtonLink>
      </ButtonDiv>
    </LeftSection>
    <BgAnimation />
  </HeroSection>
)

export default Hero
