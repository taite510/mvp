import React, { useState, useEffect } from 'react';
import ShirtModule from './ShirtModule.jsx';
import { getAllShirts } from '../../server/API.js';

function Gallery(props) {
  const [ shirtData, setShirtData ] = useState(null);
  const [ sort, setSort ] = useState('liked');

  useEffect(() => {
    getAllShirts((data) => {
      setShirtData(data);
    })
  }, [])

  let handleSort = (e) => {
    setSort(e.target.value);
  }

  if (shirtData !== null) {
    if (sort === 'liked') {
      shirtData.sort((a, b) => {
        return b.likes - a.likes;
      })
    } else {
      shirtData.sort((a, b) => {
        return b.id - a.id;
      })
    }
    return (
      <React.Fragment>
        <div className='sort'>
          <label htmlFor='sort'>Sort by: </label>
          <select name='sort' onChange={handleSort}>
            <option value='liked'> Most liked </option>
            <option value='newest'> Newest </option>
          </select>
        </div>
        <div className='gallery'>
          {shirtData.map((imgData, index) => {
            return <ShirtModule data={imgData} key={index}/>
          })}
        </div>
      </React.Fragment>
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