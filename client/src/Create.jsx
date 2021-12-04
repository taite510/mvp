import React, { useState, useEffect } from 'react';
import Shirt from './Shirt.jsx'
import { postShirt } from '../../server/API.js';

function Create(props) {

  const [design, setDesign] = useState({ url: null })
  const [style, setStyle] = useState({ backgroundSize: '60%', positionX: '50%', positionY: '50%', backgroundColor: 'white'})


  let handleAddPhoto = (e) => {
    e.preventDefault();
    if (validateUrl(e.target['image-url'].value)) {
      console.log(e.target['image-url'].value)
      setDesign({ url: e.target['image-url'].value})
    } else {
      alert('not a valid url')
    }
  }

  let handleSubmitShirt = (e) => {
    e.preventDefault();
    if (design.url !== null) {
      postShirt({
        imgUrl: design.url,
        creator: e.target['creator-name'].value,
        styles: `{ "backgroundSize": "${style.backgroundSize}", "positionX": "${style.positionX}", "positionY": "${style.positionY}", "backgroundColor": "${style.backgroundColor}"}`
      }, (data) => {
        console.log(data)
        alert('Your Design Tee has been Created!')
      })
    }
  }
  let handleChange = (e) => {
    if (e.target.name === 'size') {
      setStyle({backgroundSize: e.target.value + '%', positionX: style.positionX, positionY: style.positionY, backgroundColor: style.backgroundColor})
    } else if (e.target.name === 'position-x') {
      setStyle({backgroundSize: style.backgroundSize, positionX: e.target.value + '%', positionY: style.positionY, backgroundColor: style.backgroundColor})
    } else if (e.target.name === 'position-y') {
      setStyle({backgroundSize: style.backgroundSize, positionX: style.positionX, positionY: e.target.value + '%', backgroundColor: style.backgroundColor})
    } else if (e.target.name === 'color') {
      setStyle({backgroundSize: style.backgroundSize, positionX: style.positionX, positionY: style.positionY, backgroundColor: e.target.value})
    }
  }

  let validateUrl = function(url) {
    const re = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/
    return re.test(String(url))
  }

  let shirtDesign = {
    'backgroundImage': design.url ? `url(${design.url})` : "url('')",
    'backgroundSize': style.backgroundSize,
    'backgroundPosition': style.positionX + style.positionY,
    'backgroundColor': style.backgroundColor
  }
  let display = {
    display: design.url !== null ? 'flex' : 'none'
  }
  return (
    <div className='create-page'>
      <Shirt design={shirtDesign}/>
      <div className='create-form'>
        <div className='url-form'>
          <form onSubmit={handleAddPhoto}>
            <label htmlFor='image-url'>Add an Image:</label><br/>
            <input id='image-url' name='image-url' placeholder='image url' required></input>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <div style={display}>
          <label htmlFor='size'>Adjust Size:</label>
          <input type="range" min="20" max="140" name='size' onChange={handleChange}/>
          <label htmlFor='position-x'>Adjust Horizontal Position:</label>
          <input type="range" min="0" max="100" name='position-x' onChange={handleChange}/>
          <label htmlFor='position-y'>Adjust Vertical Position:</label>
          <input type="range" min="0" max="100" name='position-y' onChange={handleChange}/>
          <label htmlFor='color'>Adjust Background Color:</label>
          <input type="color" className='color-adjust' name="color" onChange={handleChange}/>
          <form onSubmit={handleSubmitShirt}>
            <label htmlFor='creator-name'>Creator Name:</label><br/>
            <input id='creator-name' name='creator-name' required></input>
            <input type="submit" value="Submit Design"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create;