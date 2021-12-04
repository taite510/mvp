import React, { useState, useEffect } from 'react';
import Shirt from './Shirt.jsx';
import { likeShirt } from '../../server/API.js';

function ShirtModule(props) {

  const [like, setLike] = useState(false)

  let handleLike = () => {
    if (!like) {
      likeShirt(props.data.id, (data) => {
        props.data.likes++
        setLike(true)
      })
    }
  }

  let shirtDesign = {
    backgroundImage: `url(${props.data.imgUrl})`,
    backgroundSize: props.data.styles.backgroundSize,
    backgroundPosition: props.data.styles.positionX + props.data.styles.positionY,
    backgroundColor: props.data.styles.backgroundColor
  }

  let heartStyle = {
    color: like ? 'red' : 'rgb(160, 160, 160)'
  }

  return (
    <div className='shirt-module'>
      <Shirt design={shirtDesign}/>
      <div className='overlay'>
        <span className='created-by'>Created by </span><span className='creator'>{props.data.creator}</span>
        <span onClick={handleLike} style={heartStyle}> &#9829; </span>
        {props.data.likes}
      </div>
    </div>
  )
}

export default ShirtModule;