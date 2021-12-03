import React, { useState, useEffect } from 'react';
import Create from './Create.jsx';
import Gallery from './Gallery.jsx';

function App(props) {

  const [ create, setCreate ] = useState(false)

  let handleCreateChange = () => {
    setCreate(!create)
  }

  if (!create) {
    return (
      <React.Fragment>
        <h1>Design Tee</h1>
        <div onClick={handleCreateChange} className='create-button'><h2>Create!</h2></div>
        <Gallery/>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>Design Tee</h1>
        <Create/>
      </React.Fragment>
    )
  }

}

export default App;