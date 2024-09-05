import { FC, useEffect, useState } from "react"

export const App :FC = ()=>
{
  const [user , SetUser] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/PauloBumba"); // Corrected the URL to 'https'
        if (!response.ok) {
          throw new Error("Error fetching user from GitHub"); // Corrected error message and logic
        }
        const data = await response.json();
        SetUser(data);
      } catch (error) {
        console.error(error); // Log the error to the console
      }
    };

    fetchData(); 
  },[])
  return(
    <div>
      {
        user?(
          <div>
            <p > Nome {user.name}</p>
            <img src={user.avatar_url} alt="" />
          </div>
        ):(
          <p>Loading</p>
        )
      }
        
    </div>)
}