import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr]= useState([''])
  const refInput = useRef()
  const fn = (e)=>{
    e.preventDefault()
    let name = refInput.current.value
    //let arrCory =[..._arr ]//기존의 배열을 arrCopy에 복사
    //arrCory.push(name) //복사된 배열에 이름을 추가
    //_setArr(arrCory)
    _setArr([..._arr,name])
    refInput.current.value=''
  }
  return (
    <>
      <p>이름을 입력하고 버튼을 누르면 명단이 출력됩니다</p>
      <form onSubmit={fn}>
      <input ref={refInput} type="text" />
      </form>
      
      <p>명단출력 :
        {
          _arr.map((v)=>{
            return v+','
          })
        }
        </p>
    </>
  );
};

export default App;