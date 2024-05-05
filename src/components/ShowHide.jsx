import React from 'react'
import { useState} from 'react'

function ShowHide() {
  const [Show, setShow]= useState(true);
const handleClick =(event)=>{
  setShow(!Show);
};
  return (
    <div>
      {Show && <h2>Escondame !</h2>  }
      <button onClick={handleClick}>{Show ? "ocultar" : "Mostrar"} Texto </button>{Show && <h2> escondeme!</h2>}
      </div>
  )
}

export default ShowHide
