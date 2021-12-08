import React, { useEffect, useState } from 'react';

const Comp1 = ({ _num , _setNum ,_setinit}) => {
  const [_sec,_setSec] = useState(3)
  const fnShowNum = () => {
    let num = Math.floor(Math.random() * 100)
    _setNum(num)
    let sec = 3
    let intervalID = setInterval(()=>{
      _setSec(sec-=1)
      if(sec===0){
        _setinit('comp2')
        clearInterval(intervalID)
      }

    },1000)
  }
  useEffect(()=>{
    console.log("comp1 마운트 되었습니다")
    document.querySelector('.comp1').classList.add('active')
    return(
      ()=>{
        console.log("comp1이 언마운트 됩니다")
      }
    )
  },[])
  return (
    <section className="comp1">
      <h3>Comp1</h3>
      <p>화면에 출력되는 숫자를 기억해 주세요<br />
        (숫자는 <b>{_sec}</b>초뒤에 사라집니다)
      </p>
      <hr />
      <p>
        숫자 : {_num}
      </p>
      <hr />
      {
        /*(!_num)//num 값이 없다면
        ? <button onClick={fnShowNum}>숫자생성</button> //버튼을 출력한다
        : null //아무것도 출력하지 않는다*/
        (!_num)&&<button onClick={fnShowNum}>숫자생성</button>//이항연산자
      }
      
    </section>
  );
};

export default Comp1;