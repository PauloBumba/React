import React from "react";
interface NewProps{
    titulo:string,
    image : string ,
    discricao :string 
}
export const New:React.FC<NewProps>=({titulo,image, discricao })=>
{
    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <img src={image}alt="" />
                <p>{discricao}</p>
            </header>
        </>
     );
}