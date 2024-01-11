import React from 'react'
import {useNavigate } from "react-router-dom";
const Products = () => {
    const navigate =useNavigate();
    const gotoAbout=()=>{
        navigate("/");
    }
  return (
      <>
      <div>Products Page</div>
      <button onClick={()=>gotoAbout()}>go to about page</button>
      <button onClick={()=>gotoAbout(
        navigate(-1)
      )}>go back</button>
      </>
  )
}

export default Products