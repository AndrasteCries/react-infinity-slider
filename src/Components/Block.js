import React from "react";
import TestImage from "../pic.jpg"

const Block = ({ color, slideClass, onAnimationEnd }) => {
  return (
    <div className={slideClass} onTransitionEnd={onAnimationEnd}>
      <img src={TestImage} alt='' />
      <p>{color}</p>
    </div>
  );
}

export default Block;