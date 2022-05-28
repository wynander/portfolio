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

function ModalCard({ item, open, setOpen, index, setIndex }) {
  return (
    <>
      <CarouselContainer
        assets={item.assets}
        open={open}
        setOpen={setOpen}
        index={index}
        setIndex={setIndex}
        height='auto'
      />
      <Legend>{item.assets[index].description}</Legend>
      <UtilityList>
        <Tooltip>
          <ExternalLinks href={item.source}>
            <VscSourceControl size='2rem' />
          </ExternalLinks>
          <TooltipBox>View Source Code</TooltipBox>
        </Tooltip>
        <Tooltip>
          {item.type === 'webapp' ? (
            <>
              <ExternalLinks href={item.visit}>
                <MdWeb size='2rem' />
              </ExternalLinks>
              <TooltipBox>Visit Site</TooltipBox>
            </>
          ) : (
            <ExternalLinks href={item.visit}>View More</ExternalLinks>
          )}
        </Tooltip>
      </UtilityList>
    </>
  )
}

export default ModalCard
