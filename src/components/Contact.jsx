import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import userImage from "../assests/user-image.jpg";

const Contact = () => {
  const[userData,setUserData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    message:"",
  });
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>FirstName</label>
                    <input type="text" required placeholder='firstname...' />
                </div>
                <div>
                    <label>LastName</label>
                    <input type="text" required placeholder='lastname..' />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@xyz.com' />
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
        
    <NavLink to="/aboutme">

      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink>
    </div>
  )
}

export default Contact