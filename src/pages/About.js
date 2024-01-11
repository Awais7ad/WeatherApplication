import React, { useState } from 'react'
import Fbutton from '../Fbutton'
import Cards from '../Cards'
const About = () => {
    const [filterCards,setFilterCards] =useState(null);
  return (
    <>
    <Fbutton setFilterCards={setFilterCards}/>
    <Cards filterCards={filterCards}/> 
    </>
  )
}

export default About