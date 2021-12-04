import React, { useState, useEffect } from 'react';
import ShirtModule from './ShirtModule.jsx';
import { getAllShirts } from '../../server/API.js';

function Gallery(props) {
  const [ shirtData, setShirtData ] = useState(null);


  useEffect(() => {
    getAllShirts((data) => {
      setShirtData(data)
    })
  }, [])


  let data = [
    {
      url: 'https://www.seekpng.com/png/detail/22-226222_pirates-of-caribbean-logo.png',
      likes: 20,
      creator: 'Bobby420',
      styles: {}
    },
    {
      url: 'https://static.wikia.nocookie.net/okami/images/f/fb/Amaterasu_main_artwork.png/revision/latest?cb=20171114222839',
      likes: 0,
      creator: 'anon',
      styles: {}
    },
    {
      url: 'https://64.media.tumblr.com/7c4fd46230d9b7eb05227ce3aeee2692/tumblr_n4bca1RjbQ1seumrmo1_1280.png',
      likes: 3,
      creator: 'michell',
      styles: {}
    }
  ]
  if (shirtData !== null) {
    return (
      <div className='gallery'>
        {shirtData.map((imgData, index) => {
          return <ShirtModule data={imgData} key={index}/>
        })}
      </div>
    )
  } else {
    return (
      <div className='jackie-chan'>
        <img src='spiffygif_46x46.gif' alt="loading gif while page load"/>
      </div>
    )
  }
}

export default Gallery;