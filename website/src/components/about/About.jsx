import { useState } from 'react'; 
import introduction from '../../data/information'; 

export default function About() {

  return (
    <>
      <div className="about-container">
        <h1>The about</h1>
        <div className='left-about-part'>
          <p>{introduction}</p>
        </div>        
      </div>
    </>
  )
}