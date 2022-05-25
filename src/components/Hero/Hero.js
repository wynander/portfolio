import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, ButtonDiv,ButtonLink } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Wyn Anderson <br />
        </SectionTitle>
        <SectionText>
          Software engineer currently working as a Program Manager overseeing the development of
          electric motor avionics (C/C++) for aerospace applications.
        </SectionText>
        <ButtonDiv>
          <ButtonLink onClick={props.handleClick}>Resume</ButtonLink>
          <ButtonLink onClick={props.handleClick}>GitHub</ButtonLink>
        </ButtonDiv>
      </LeftSection>
    </Section>
  </>
)

export default Hero
