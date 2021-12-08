import React from 'react';

const CompBtns = ({ fn }) => {
  return (
    <div>
      <button data-n="-1" onClick={fn}> + </button>
      <button data-n="1" onClick={fn}> - </button>
    </div>
  );
};

export default CompBtns;