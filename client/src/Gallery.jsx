import React from 'react';
import ShirtModule from './ShirtModule.jsx'

function Gallery(props) {

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

  return (
    <div className='gallery'>
      {data.map((imgData, index) => {
        return <ShirtModule data={imgData} key={index}/>
      })}
    </div>
  )
}

export default Gallery;