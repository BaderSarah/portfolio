import { useState } from 'react'; 
import "./Header.css"; 

export default function Header() {

  return (
    <>
      <div className="header-container">
        <div className='menu'>
            <div>about</div>
            <div>skills</div> 
            <div>experience</div>
        </div>
      </div>
    </>
  )
}
