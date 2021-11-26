import React, { useRef, useState } from 'react';


const App = () => {
  const[_num,_setNum]= useState(1)

  const fn = () => {
    _setNum(_num + 1)
  }

  return (
    <>
      <div>
        <p> {_num}</p>
        <button onClick={fn}>1씩 증가</button>
      </div>
    </>
  );
};

export default App;