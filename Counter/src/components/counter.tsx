import { FC, useState } from "react";
import Styles from "../components/Styles.module.scss"
export const Counter : FC=()=>{
  const [Contador , Setcontador]= useState(0)
  return(
    <div className={Styles.player}>
      <h1>{Contador}</h1>
      <button onClick={()=>Setcontador(Contador + 1 )}>incrementar</button>
      <button onClick={()=>Setcontador(Contador -1)}>incrementar</button>
    </div>
  )
}