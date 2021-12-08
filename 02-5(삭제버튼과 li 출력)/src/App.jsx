import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])
  const refNameInput = useRef()
  const refAgeInput = useRef()
  const fnAddArr = () => {
    let name = refNameInput.current.value
    let age = refAgeInput.current.value
    let obj = {
      key: Date.now(),
      name,
      age
    }
    console.log(obj);
    _setArr([..._arr, obj])
  }

  const fnDel = (e) => {
    let key = parseInt(e.target.getAttribute('data-key'))
    let arr = _arr.filter((v)=>{
      return v.key !== key

    })
    _setArr([...arr])
  }
  return (
    <>
      <p>이름,나이를 입력하고 추가버튼을 누르면 성별이 구분되서 출력합니다</p>
      이름 <input ref={refNameInput} type="text" /> <br />
      나이 <input ref={refAgeInput} type="text" /> <br />
      <br />
      <button onClick={fnAddArr}>추가하기</button>
      <hr />
      명단현황
      <p>
        {
          _arr.map((v) => {
            return (
              <li key={v.key}>
                <strong>{v.name}</strong>
                &nbsp;
                <i>{v.age}</i>
                &nbsp;
                <button data-key={v.key} onClick={fnDel}>삭제</button>
              </li>
            )
          })
        }
      </p>
      <hr />

    </>
  );
};

export default App;