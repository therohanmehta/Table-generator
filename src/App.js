import React, {useState} from "react";
import "./style.css";

export default function App() {
 const [data,setData]=useState(1)
 const number=[1,2,3,4,5,6,7,8,9,10]
  return (
   <>
   <h1>Enter Number</h1>
  <input type="number" onChange={(e)=>{setData(e.target.value)}}/>
   {number.map((ele)=><p>{data} X {ele} = {ele*data}</p>)}


   </>
  );
}
