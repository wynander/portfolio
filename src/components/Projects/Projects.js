import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from 'src/styles/GlobalComponents'
import { projects } from 'src/constants/constants'
import CarouselContainer from './CarouselContainer'

const Projects = () => (
  <>
    <Section nopadding id='experience'>
      <SectionDivider />
      <SectionTitle main>What I've Built</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <CarouselContainer assets={p.assets} />
              <TitleContent>
                <HeaderThree title='true'>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className='card-info'>{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                {p.type === 'webapp' ? (
                  <ExternalLinks href={p.visit}>View Site</ExternalLinks>
                ) : (
                  <ExternalLinks href={p.visit}>View More</ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          )
        })}
      </GridContainer>
    </Section>
  </>
)

export default Projects
