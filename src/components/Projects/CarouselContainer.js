import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'

function CarouselContainer({ assets }) {
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

  const handleClickItem = (i, item) => {}

  return (
    <>
      <Carousel
        onClickItem={(i, item) => console.log(i, item, assets)}
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
              <img src={a.source} />

              {/* <p className='legend' style={{ ...legendStyles }}>
                {a.description}
              </p> */}
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default CarouselContainer
