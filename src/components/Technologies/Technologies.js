import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { useThemeContext } from 'src/styles/theme'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles'
import {
  Icon,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'
import { SiFigma } from 'react-icons/si'

const Technologies = () => {
  const { theme } = useThemeContext()
  return (
    <Section id="tech" nopadding>
      <SectionDivider divider />
      <SectionTitle main>Technologies I Use</SectionTitle>
      <SectionText>
        I&apos;ve been working with the following technologies:
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React
              <br />
              Next.js
              <br />
              JavaScript
              
              <br />
              HTML 5
              <br />
              CSS 3
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node <br />
              Express <br />
              Firebase
              <br />
              NoSQL <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Figma
              <br />
              Photoshop
              <br />
              Illustrator
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}

export default Technologies
