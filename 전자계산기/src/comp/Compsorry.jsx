import React from 'react';

const Compsorry = ( {_setSorry}) => {
   const fnDisappear = ()=>{
    _setSorry(false)
   }
  return (
      <div className="sorry" onClick={fnDisappear}>
        <img src="./img/sorry.png" alt="" />
      </div>
  );
};

export default Compsorry;