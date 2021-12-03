import React from 'react';

function Shirt(props) {
  return(
    <div className='tshirt' style={props.design}>
      <img className='canvas' src='./tshirt.png'/>
    </div>
  )
}

export default Shirt;