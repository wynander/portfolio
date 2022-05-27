import React, { useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { Img } from './ProjectsStyles'
import useWindowDimensions from './useWindowDimensions'

function CarouselContainer({ legend,assets, setOpen, index, setIndex, height,open }) {
  const arrowStyles = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    top: 0,
    border: 'none',
    background: 'rgba(0,0,0, 0.2)',
    width: 30,
    fill: '#fff',
    color: '#fff',
    height: '100%',
    cursor: 'pointer',
  }

  const legendStyles = {
    textAlign: 'center',
    padding: '.5rem',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    maxWidth: '70%',
    marginLeft: 0,
    transform: 'translateX(-50%)',
    fontFamily: 'Space Grotesk, sans-serif',
  }
  const dims = useWindowDimensions()
  
  useEffect(() => {
    if(dims.width <= 960 && open){
      setOpen(false)
    }
  }, [dims, open, setOpen])

  const handleClickItem = (i, item) => {
    if (dims.width > 960) {
      setOpen(true)
    }
  }

  return (
    <>
      <Carousel
        selectedItem={index}
        onClickItem={(i, item) => handleClickItem(i, item)}
        onChange={(i) => setIndex(i)}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 0 }}
            >
              <BsFillCaretLeftFill />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0 }}
            >
              <BsFillCaretRightFill />
            </button>
          )
        }
      >
        {assets?.map((a, i) => {
          return (
            <div key={i}>
              <Img src={a.source} height={height} />

             {legend && <p className='legend' style={{ ...legendStyles }}>
                {a.description}
              </p>}
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default CarouselContainer
