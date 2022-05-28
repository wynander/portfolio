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
  UtilityList,
  Tooltip,
  TooltipBox,
} from './ProjectsStyles'
import { VscSourceControl } from 'react-icons/vsc'
import { MdWeb } from 'react-icons/md'
export function ItemBlogCard({ i, setOpen, item, index, setIndex }) {
  return (
    <BlogCard key={i}>
      <TitleContent>
        <HeaderThree title="true">{item.title}</HeaderThree>{' '}
      </TitleContent>

      <CarouselContainer
        assets={item.assets}
        setOpen={setOpen}
        index={index}
        setIndex={setIndex}
        height="300px"
      />
      <TitleContent>
        <HeaderThree>{item.subtitle}</HeaderThree>
        <TagList>
          {item.tags.map((t, i) => {
            return <Tag key={i}>{t.toUpperCase()}</Tag>
          })}
        </TagList>
      </TitleContent>
      <CardInfo className="card-info">{item.description}</CardInfo>

      <UtilityList>
        <Tooltip>
          <ExternalLinks href={item.source === 'private' ? '' : item.source} >
            <VscSourceControl size="2rem" />
          </ExternalLinks>
          <TooltipBox>
            {item.source === 'private'
              ? 'Private Source Code'
              : 'View Source Code'}
          </TooltipBox>
          <TooltipBox>View Source Code</TooltipBox>
        </Tooltip>
        <Tooltip>
          {item.type === 'webapp' ? (
            <>
              <ExternalLinks href={item.visit}>
                <MdWeb size="2rem" />
              </ExternalLinks>
              <TooltipBox>Visit Site</TooltipBox>
            </>
          ) : (
            <ExternalLinks href={item.visit}>View More</ExternalLinks>
          )}
        </Tooltip>
      </UtilityList>
    </BlogCard>
  )
}
