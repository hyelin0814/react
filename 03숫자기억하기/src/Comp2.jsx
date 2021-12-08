import React, { useEffect, useRef } from 'react';

const Comp2 = ({ _num, _setinit }) => {
  const refInput = useRef()
  const fn = (e) => {
    e.preventDefault()
    let inputNum = parseInt(refInput.current.value)
    if (_num === inputNum) {
      alert("정답");
    } else {
      alert("오답");
    }
    _setinit('comp1')
  }
  useEffect(() => {
    console.log('comp2가 마운트되었습니다')
    document.querySelector('.comp2').classList.add('active')
    return (() => {
      console.log('comp2가 언마운트 됩니다')
    })
  }, [])
  return (
    <section className="comp2">
      <h3>Comp2</h3>
      <p>기억한 숫자를 입력하고 엔터를 누르세요<br />
        (정오답이 출력됩니다)
      </p>
      <hr />
      <form onSubmit={fn}>
        <input ref={refInput} type="text" />
      </form>
    </section>
  );
};

export default Comp2;