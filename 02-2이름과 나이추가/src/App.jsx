import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState( [] )
  const refName = useRef()
  const refAge = useRef()
  let gender = '남자'
  const fnGender = (e)=>{
    gender = e.target.value
  }

  const fn = ()=>{
    let obj = {
      name : refName.current.value,
      age : refAge.current.value,
      gender 
    }
    _setArr([..._arr,obj])   
  }
  return (
    <>
      <p>이름과 나이, 성별 입력하면 명단이 출력됩니다</p>
      이름 : <input ref ={refName} type="text" /><br/>
      나이 : <input  ref ={refAge}type="text" /><br/>
      성별 : 
      <input onChange={fnGender} type="radio" name="gender" defaultValue="남자"/>남 
      <input onChange={fnGender}  type="radio" name="gender" defaultValue="여자"/>여   <br/>
      <button onClick={fn}>추가하기</button> <br/>
      <hr />
      <p>
        {
          _arr.map((v)=>{ //v -> {name:홍길동, age:24}
            return `이름 : ${v.name }, 나이 : ${v.age} ,`
          })
        }
      </p>
    </>
  );
};

export default App;