import axios from 'axios'
import { FC, useEffect, useState } from 'react'


export const Api :FC=()=>{
  useEffect(()=>{
    const Data =async()=>
    {
      const url= "https://api.spaceflightnewsapi.net/v4/articles/";

      const response = await axios.get(url);

      const newData = response.data;

      console.log(newData);



    }
    Data();

  },[])
  return(
    <>
    </>
  )
}