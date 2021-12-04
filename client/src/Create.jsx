import React, { useState, useEffect } from 'react';
import Shirt from './Shirt.jsx'
import { postShirt } from '../../server/API.js';

function Create(props) {

  const [design, setDesign] = useState({ url: null })


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
        styles: `{}`
      }, (data) => {
        console.log(data)
        alert('Your Design Tee has been Created!')
      })
    }
  }
  let validateUrl = function(url) {
    const re = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/
    return re.test(String(url))
  }

  let shirtDesign = {
    'backgroundImage': design.url ? `url(${design.url})` : "url('')",
    'backgroundSize': '60%'
  }

  return (
    <React.Fragment>
      <Shirt design={shirtDesign}/>
      <form onSubmit={handleAddPhoto}>
        <label htmlFor='image-url'>Image Url:</label><br/>
        <input id='image-url' name='image-url' required></input>
        <input type="submit" value="Add"/>
      </form>
      <form onSubmit={handleSubmitShirt}>
        <label htmlFor='creator-name'>Creator Name:</label><br/>
        <input id='creator-name' name='creator-name' required></input>
        <input type="submit" value="Submit Design"/>
      </form>
    </React.Fragment>
  )
}

export default Create;