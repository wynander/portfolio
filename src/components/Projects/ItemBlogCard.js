import React from 'react'
import CarouselContainer from './CarouselContainer'
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList
} from './ProjectsStyles'

export function ItemBlogCard({ i, setOpen, item, index, setIndex }) {
  return (
    <BlogCard key={i}>
      <CarouselContainer assets={item.assets} setOpen={setOpen} index={index} setIndex={setIndex} height='300px'/>
      <TitleContent>
        <HeaderThree title='true'>{item.title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className='card-info'>{item.description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {item.tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>
          })}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href={item.source}>Source Code</ExternalLinks>
        {item.type === 'webapp' ? (
          <ExternalLinks href={item.visit}>View Site</ExternalLinks>
        ) : (
          <ExternalLinks href={item.visit}>View More</ExternalLinks>
        )}
      </UtilityList>
    </BlogCard>
  )
}
