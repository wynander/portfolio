import React from 'react'
import { projects } from 'src/constants/constants'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from 'src/styles/GlobalComponents'
import Item from './Item'
import { GridContainer } from './ProjectsStyles'

const Projects = () => {
  return (
    <Section nopadding id="experience">
      <SectionDivider />
      <SectionTitle main>What I&apos;ve Built</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return <Item item={p} key={i} />
        })}
      </GridContainer>
    </Section>
  )
}

export default Projects
