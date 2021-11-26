import React from 'react';

const App = () => {
  return (
    <>
      <p>이름, 나이, 성별을 입력하고 추가버튼을 누르면 성별이 구분되서 출력합니다</p>
      이름 <input type="text" /><br />
      나이<input type="text" /><br />
      <input type="radio" />남 <input type="radio" />여
      <button>추가하기</button>
      남자명단현황
      <p></p>
      여자명단현황
      <p></p>
    </>
  );
};

export default App;