import React, { useState } from 'react'

function History({list}) {
    
   console.log(list)
      

  return (
    <div className='historyContainer'>
        {list.map((item) =>{ return( <li>{item}</li>)
           
        })}
       
      
    </div>
  )
}

export default History