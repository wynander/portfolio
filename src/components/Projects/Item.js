import React, { useState } from 'react'
import ItemBlogCard from './ItemBlogCard'
import Modal from './Modal'
import ModalCard from './ModalCard'
export default function Item({ item }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <ItemBlogCard
        setOpen={setOpen}
        item={item}
        index={index}
        setIndex={setIndex}
      />
      <Modal open={open} setOpen={setOpen}>
        <ModalCard
          open={open}
          setOpen={setOpen}
          item={item}
          index={index}
          setIndex={setIndex}
        />
      </Modal>
    </>
  )
}
