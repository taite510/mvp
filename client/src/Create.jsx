import React, { useState, useEffect } from 'react';
import Shirt from './Shirt.jsx'

function Create(props) {

  const [design, setDesign] = useState({ url: null })


  let handleSubmit = (e) => {
    e.preventDefault()
    if (e.target['image-url'].value !== '') {
      console.log(e.target['image-url'].value)
      setDesign({ url: e.target['image-url'].value})
    }

  }


  let shirtDesign = {
    'backgroundImage': design.url ? `url(${design.url})` : "url('https://ih1.redbubble.net/image.1071310753.9794/raf,750x1000,075,t,FFFFFF:97ab1c12de.u1.jpg')",
    'backgroundSize': '60%'
  }

  return (
    <React.Fragment>
      <Shirt design={shirtDesign}/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='image-url'>Image Url:</label><br/>
        <input id='image-url' name='image-url'></input>
        <input type="submit" value="Add"/>
      </form>
    </React.Fragment>
  )
}

export default Create;