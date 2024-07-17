import React from "react"
import { New } from "./Components/new"
import { Header } from "./Components/header"


 const App:React.FC=()=>{
  return (
    
    <main>
      <Header/>
        <div>
          <New  key={1}
            titulo="Paulo Bumba"
            image="aa"
            discricao="loreaaaaaaaaaaaaaaaaaa"
          />
        </div>
        <div>
          <New  key={1}
            titulo="Paulo Bumba"
            image="aa"
            discricao="loreaaaaaaaaaaaaaaaaaa"
          />
        </div>
        <div>
          <New  key={1}
            titulo="Paulo Bumba"
            image="aa"
            discricao="loreaaaaaaaaaaaaaaaaaa"
          />
        </div>
      
    </main>

  );
}

export default App;