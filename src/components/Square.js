import React from 'react';

const Square = ({ value, onClick ,isWinningSquare}) => {
 
  return (
    <button type="button"
    //  className="square"
     onClick={onClick}
    //  style={{fontWeight:isWinningSquare?'bold':'normal'}}
    className={`square ${isWinningSquare?'winning':''} ${value==='X'?'text-green':'text-orange'}`}
     >
      {value}
    </button>
  );
};

export default Square; 
