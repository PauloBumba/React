import { useRef, useState } from 'react'

import './App.css'

function App() {
  const ref = useRef<HTMLInputElement>(null);
  
  const Handle = ()=>
  {
     confirm(ref.current?.value)
  }

  return (
    <>
        <input type="text"  ref={ref}/>
        <button onClick={Handle}>Send</button>
        
    </>
  )
}

export default App
