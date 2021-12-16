import React from 'react';
import { fnsetResult ,sorry , err ,str} from '../modules/fnsetResult'

const CompBut = ({btnData,_setResult,_setSorry,_setErr}) => {
  const fnChangeResult = (e) => {
    e.preventDefault()
    fnsetResult(e)
    _setResult( str ) //result 값 변경하기
    _setSorry(sorry)//_sorry값 변경하기
    _setErr(err)
  }
  return (
    <>
      <button 
      onClick={ fnChangeResult } 
      data-fn={btnData.fn}
      data-char={btnData.id}
      >
        <img src={`./img/${btnData.src}.png`} alt=''/>
      </button>
    </>
  );
};

export default CompBut;