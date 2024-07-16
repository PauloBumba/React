// Array de dependecia :  ela atua quando o ha mudança de estado


import React, { useEffect, useState } from "react";

export const Efect: React.FC = () => {
    const [Counter , SetCounter]=useState(0)
    useEffect(()=>{
        confirm("valor incrementado");
    },[Counter])
  return (
   <>
    <button onClick={()=>SetCounter(Counter + 1)}>
        Contar
    </button>
    <div>{Counter}</div>

    <p>Array de dependecia :  ela atua quando o ha mudança de estado
    </p>
   </>
  );
};
