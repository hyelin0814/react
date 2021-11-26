import React, { useRef, useState } from 'react';

const fnSetNumber = () => {
  let num = Math.ceil(Math.random()*9)
  return num
}
let point = 0
const App = () => {
  const [_num1,_setNum1] = useState(fnSetNumber())
  const [_num2,_setNum2] = useState(fnSetNumber())
  const [_result,_setResult] = useState("결과가 출력됩니다")
  const [_point,_setPoint] = useState(0)


  const refInput = useRef()

  const fnCheckResult = (e)=>{
    e.preventDefault()
    let userNum = parseInt(refInput.current.value)
    if( _num1 * _num2 ===userNum ){
      _setResult('정답')
      _setNum1(fnSetNumber())
      _setNum2(fnSetNumber())
      _setPoint(point+=1)
    }else{
      _setResult('오답')
      _setPoint(point-=1)
    }
    refInput.current.value = ''
  }

  return (
    <>
      <p>{_num1}*{_num2}</p>
      <form onSubmit={fnCheckResult}>
      <input ref={refInput} id="userInput" type="text"  placeholder="값을 입력하세요"/>
      </form>
      <p>결과</p>
    </>
  );
};

export default App;