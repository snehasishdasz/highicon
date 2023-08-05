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

  let name,value;
  const postUserData = (event) => {
     name = event.target.name;
     value = event.target.value;

     setUserData({...userData,[name]:value});
  };

  //Connect with Firebase
  const submitData = async (event) => {
    event.preventDefault();
    const{firstname,lastname,email,message}= userData;

    if(firstname && lastname && email && message){


    const res = await fetch("https://highicon-b8a75-default-rtdb.firebaseio.com/userDataRecords.json",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        message,
      })
    })
    if(res){
      setUserData({
        firstname:"",
        lastname:"",
        email:"",
        message:"",
      })
      alert("Successfully Sent✔");
    }
    }
    else{
      alert("Please fill the data")
  }
  }





  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form mathod="POST">
                <div>
                    <label>FirstName</label>
                    <input 
                    type="text" 
                    name="firstname" 
                    id='' required 
                    placeholder='firstname...'
                    value={userData.firstname}
                    onChange={postUserData}
                     />
                </div>
                <div>
                    <label>LastName</label>
                    <input 
                    type="text" 
                    name="lastname" 
                    id='' required 
                    placeholder='lastname..'
                    value={userData.lastname}
                    onChange={postUserData}
                     />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id='' required 
                    placeholder='abc@xyz.com' 
                    value={userData.email}
                    onChange={postUserData}
                    />
                </div>

                <div>
                    <label>Message</label>
                    <input 
                    type="text" 
                    name="message" 
                    id='' required 
                    placeholder='Tell us about your query...' 
                    value={userData.message}
                    onChange={postUserData}
                    />
                </div>

                <button type='submit' onClick={submitData}>Send</button>
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