import React, { useState } from 'react'
import CarouselContainer from './CarouselContainer'
import Modal from './Modal'
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
  Legend,
  Tooltip,
  TooltipBox,
} from './ProjectsStyles'
import { VscSourceControl } from 'react-icons/vsc'
import { MdWeb } from 'react-icons/md'

const ModalCard = ({ item, open, setOpen, index, setIndex }) => (
  <>
    <CarouselContainer
      assets={item.assets}
      open={open}
      setOpen={setOpen}
      index={index}
      setIndex={setIndex}
      height="auto"
    />
    <Legend>{item.assets[index].description}</Legend>
    <UtilityList>
      <Tooltip>
        <ExternalLinks
          target="_blank"
          href={item.source === 'private' ? '' : item.source}
        >
          <VscSourceControl size="2rem" />
        </ExternalLinks>
        <TooltipBox>
          {item.source === 'private'
            ? 'Private Source Code'
            : 'View Source Code'}
        </TooltipBox>
      </Tooltip>
      <Tooltip>
        {item.type === 'webapp' ? (
          <>
            <ExternalLinks target="_blank" href={item.visit}>
              <MdWeb size="2rem" />
            </ExternalLinks>
            <TooltipBox>Visit Site</TooltipBox>
          </>
        ) : (
          <ExternalLinks target="_blank" href={item.visit}>
            View More
          </ExternalLinks>
        )}
      </Tooltip>
    </UtilityList>
  </>
)

export default ModalCard
