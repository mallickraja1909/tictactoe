import React from 'react'

const StatusMessage = ({winner,current}) => {
   // const message = winner 
  //   ? `Winner is ${winner}` 
  //   : `Next player is ${current.isXNext
  //   ? `X` : `O`}`;
const noMoveLeft=current.board.every(el=> el != null)


  return (
   <div className='status-message'>
    {winner && (
        <>
         Winner is {' '}
        <span className={winner==='x'?'text-green':'text-orange'}>
        {winner}
        </span>
        </>
    )}
   
   
    {!winner && !noMoveLeft &&
    <>
    Next playes is <span className={current.isXNext?'text-green':'text-orange'}>{current.isXNext? 'X':'O'}</span>
    </> }
   {!winner && noMoveLeft &&
   <>  
  <span className='text-orange'> X and O tied </span>
   </>}
   
   </div>
  )
}

export default StatusMessage