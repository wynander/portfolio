import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Wyn Anderson <br />
        </SectionTitle>
        <SectionText>
          I currently work as a Program Manager overseeing the manufacturing and development of
          electric motors for aerospace applications. I have years of experience spread across the different programming
           languages used in aerospace engineering.
        </SectionText>
        <Button onClick={props.handleClick}>Contact me</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
