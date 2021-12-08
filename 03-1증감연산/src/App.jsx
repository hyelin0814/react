import React, { useState } from 'react';
import CompBtns from './CompBtns';
import CompOutput from './CompOutput';

const App = () => {
  const[_num,_setNum] = useState(0)
  const fn = (e)=>{
    let num = _num
    let increase = parseInt(e.target.getAttribute('data-n'))
    _setNum(num + increase)
  }


  return (
    <>
      <p>증감연산</p>
      <hr />
      <CompOutput _num={_num}/>
      <hr />
      <CompBtns fn={fn}/>
    </>
  );
};

export default App;