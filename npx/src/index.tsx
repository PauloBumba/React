
import { FC } from 'react'
import './App.css'

interface NewProps{
  Titulo : String , 
  Subtitulo : string 
}
export  const Index : FC<NewProps>=({Titulo,Subtitulo})=>{
  return (
    <>
       <h1>{Titulo}</h1>
       <p>{Subtitulo}</p>
    </>
  )
  
    
}