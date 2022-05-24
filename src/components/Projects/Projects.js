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

const Projects = () => (
  <>
    <Section nopadding id='experience'>
      <SectionDivider />
      <SectionTitle main>What I've Built</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          if (p.type === 'webapp') {
            return (
              <BlogCard key={i}>
                <Img src={p.image} />
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
                  <ExternalLinks href={p.visit}>View Site</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          }
        })}
      </GridContainer>
    </Section>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>What I've Helped Build</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          if (p.type !== 'webapp') {
            return (
              <BlogCard key={i}>
                <Img src={p.image} />
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
                  <ExternalLinks href={p.visit}>View More</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          }
        })}
      </GridContainer>
    </Section>
  </>
)

export default Projects
