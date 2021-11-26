import React from 'react';

const App = () => {

  const fn= ()=>{
    let oper= document.querySelector('select option:checked').vaalue
  }
 
  return (
    <>
    <p>숫자를 변경하거나, 연산자를 변경하면 값이 바로변경되요</p>
     <p>
      <input defaultValue="0" type="text" />
      <select onChange= {fn}>
        <option defaultValue="+">+</option>
        <option defaultValue="-">-</option>
        <option defaultValue="*">*</option>
        <option defaultValue="/">/</option>
      </select>
      <input type="text" />
      </p>
      <p>결과 : 0</p>
    </>
  );
};

export default App;