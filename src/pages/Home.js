import React, { useState } from 'react'

import { Spacer } from "./../shared";

const Home = () => {
    const [filterCards,setFilterCards]=useState(null)
const [test,setTest] =useState(false)
    
const [name,setName]=useState('');
const [nameTest ,setNameTest]=useState('');
   const handleclick=()=>{
    setNameTest(name);
   }
  
console.log(name);
console.log(nameTest)
  return (
        <>
    <Spacer height="1"/>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
     <button onClick={handleclick}>click me</button>
      <br/>
      
        
      {
       
        nameTest==='shaheer' ?
    <img src="./pic1.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    : 
    nameTest==='osama' ?
    <img src="./pic3.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    :   nameTest==='rizwan rao' ?
    <img src="./pic4.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    :
    nameTest==='ammar' ?
    <img src="./pic5.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    :
    nameTest==='awais' ?
    <img src="./Mask group.png" style={{width:"200px",height:"200px"}} alt="error"/>
    
    :
    nameTest==='all' ?
    <>
    <img src="./pic1.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    <img src="./pic3.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    <img src="./pic4.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    <img src="./pic5.jpg" style={{width:"200px",height:"200px"}} alt="error"/>
    <img src="./Mask group.png" style={{width:"200px",height:"200px"}} alt="error"/>
    
    </>:
    <>
          null
    </>
}
{/* <Container>
   <Fbutton setFilterCards={setFilterCards}/>
 <Cards filterCards={filterCards}/> 
   </Container> */}
     
  </>
  )
}

export default Home