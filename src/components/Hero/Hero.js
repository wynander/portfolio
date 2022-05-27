import React from 'react'
import BgAnimation from '/src/components/BackgrooundAnimation/BackgroundAnimation'
import { Section, SectionText, SectionTitle, HeroSection } from '../../styles/GlobalComponents'
import { LeftSection, ButtonDiv,ButtonLink } from './HeroStyles'

const Hero = (props) => (
  <>
    <HeroSection row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Wyn Anderson <br />
        </SectionTitle>
        <SectionText>
          Front-end oriented software engineer currently overseeing the development
          of electric motor avionics (C/C++) for aerospace applications.
        </SectionText>
        <ButtonDiv>
          <ButtonLink onClick={props.handleClick}>Resume</ButtonLink>
          <ButtonLink onClick={props.handleClick}>GitHub</ButtonLink>
        </ButtonDiv>
      </LeftSection>
      <BgAnimation />
    </HeroSection>
  </>
)

export default Hero
