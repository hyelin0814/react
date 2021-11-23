import React, { useState } from 'react';

const App = () => {
 let [name,setName] = useState('기메린') //let name = '기메린'
  let fn = (e) => { 
    setName(e.target.innerText) //name = e.target.innerText
}
  return (
    <>
      <p>안녕하세요 {name}입니다</p>

      <button onClick={fn}>기메린구</button>
      <button onClick={fn}>기메랑구</button>
    </>
  );
};

export default App;