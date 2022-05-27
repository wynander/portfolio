import React from 'react'
import CarouselContainer from './CarouselContainer'
import {
    Legend
} from './ProjectsStyles'

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
    </>
  )
}

export default ModalCard
