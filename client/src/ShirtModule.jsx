import React, { useState, useEffect } from 'react';
import Shirt from './Shirt.jsx';
// &#9825; &#9829;
function ShirtModule(props) {

  const [like, setLike] = useState(false)

  let handleLike = () => {
    if (!like) {
      props.data.likes++
      setLike(true)
    }
  }

  let shirtDesign = {
    'backgroundImage': `url(${props.data.url})`,
    'backgroundSize': '60%'
  }

  let heartStyle = {
    color: like ? 'red' : 'gray'
  }

  return (
    <div className='shirt-module'>
      <Shirt design={shirtDesign}/>
      <div className='overlay'>
        OVERLAY
        <span onClick={handleLike} style={heartStyle}> &#9829; </span>
        {props.data.likes}
      </div>
    </div>
  )
}

export default ShirtModule;