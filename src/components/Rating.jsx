import React from 'react';
import starImage from '../assets/star.svg'


const Rating = ({value}) => {
  const stars = Array(value).fill(starImage)

  return (
    <div className="flex gap-4 my-2 ">
      {
        stars.map( (star, index) => (
          <img key={index} width={14} height={14} src={starImage} alt="star image"/>
        ))
      }
    </div>
  );
};
export default Rating;