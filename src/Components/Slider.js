import React, { useState, useEffect } from 'react';
import './Slider.css'
import Block from './Block'

const TRANSITION_DURATION = 200
const WIDTH = 130

const Slider = ({ elements }) => {
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
  const [transitionDuration, setTransitionDuration] = useState(100);
  const [mainSlides, setMainSlides] = useState([]);
  const [offset, setOffset] = useState(-WIDTH);

  //create slide`s array
  useEffect(() => {
    setMainSlides([
      elements[elements.length - 2],
      elements[elements.length - 1],
      ...elements,
      elements[0],
      elements[1],
      elements[2]
    ]);
    setClonesCount({ head: 2, tail: 3 })
  }, [elements])

  //reset swap duration
  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [transitionDuration])

  //reset slider to start
  useEffect(() => {
    // 0 -> end
    if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(WIDTH * (mainSlides.length - 2 - clonesCount.tail)))
      }, TRANSITION_DURATION)
      return
    }

    // end -> 0
    if (offset === -(WIDTH *(mainSlides.length - 1 - clonesCount.tail))) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-WIDTH)
      }, TRANSITION_DURATION)
      return
    }
  }, [clonesCount, mainSlides, offset])


  const moveLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const moveRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - WIDTH
      const maxOffset = -(WIDTH * (mainSlides.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <div>
      <h1>Hello world! I`m left reset slider</h1>
      <div className="slider-container">
        <div className="slide-window">
          <div className="slide-container" style={
            {
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }
          }>
            {mainSlides.map((item, index) => (
              <Block key={index} color={item.color} slideClass="slide" />
            ))}
          </div>
        </div>
      </div>
      <button className="button" onClick={moveLeft}>Left</button>
      <button className="button" onClick={moveRight}>Right</button>
    </div>
  );
}

export default Slider;