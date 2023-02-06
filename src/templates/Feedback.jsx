import React from 'react'
import { useState } from 'react';
import { format } from 'date-fns'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceDizzy, faFaceFrown, faFaceSmile, faFaceMeh, faFaceGrinSquint ,faCalendar, faClock} from '@fortawesome/free-solid-svg-icons'

const Feedback = () => {
    
    const [userFeedback, setUserFeedback] = useState({
        name: "Pranava Bharadwaj",
        email:"pranavabharadvaj@gmail.com",
        password:"12345678",
        date: format ( new Date(), 'do MMMM Y'),
        time: "00:00:00",
        reaction: 0

    })
    const handleChange = (e)=>{
        console.log(e.target.name);
        setUserFeedback({...userFeedback, [e.target.name]:e.target.value});
    }
    const handleReaction=(face)=>{
        console.log(face)
        setUserFeedback({...userFeedback, reaction:face})
    }


    const handleSubmit= (e) => {
        e.preventDefault();
        
        const reactionFormData = new FormData();
        reactionFormData.append("name",userFeedback.name)
        reactionFormData.append("email",userFeedback.email)
        reactionFormData.append("password",userFeedback.password)
        reactionFormData.append("date",userFeedback.date)
        reactionFormData.append("reaction",userFeedback.reaction.toString())
        reactionFormData.append("time",userFeedback.time)

        console.log(reactionFormData)
    
    try{

        axios.post("http://localhost:8000/contact",reactionFormData).then((response)=>{
            console.log(response)

        })

        
    }catch(err){
        console.log(err)
    }
    }
  
    return (
        <>
        <div className="container">
            <h1>HOW ARE YOU?</h1>
            
      <form onSubmit={e => { handleSubmit(e) }} id="myForm">
        {/* <label>Name:</label>
        <br />
        <input 
          name='name' 
          type='text' 
          value={userFeedback.name}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <br />
        <input 
          name='password' 
          type='password' 
          value={userFeedback.password}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input 
          name='email' 
          type='text'
          value={userFeedback.email}
          onChange={handleChange}
        /> */}
        <br/>
        {/* <label>Date:</label> */}
        {/* <FontAwesomeIcon icon={faCalendar}  /> */}
        <input
          name='date' 
          type='date'
          value={userFeedback.date}
          onChange={handleChange}
        />
        <br/>
        {/* <label>Time:</label> */}
      {/* <FontAwesomeIcon icon={faClock}  /> */}
        <input
          type="time"
          step="1"
          value={userFeedback.time}
          className="form-control"
          placeholder="Time"
          onChange={(ev) => {setUserFeedback({...userFeedback,time:ev.target.value})}}
        />
        <br />
        {/* <label>Reaction:</label>
        <select name ='reaction' value={userFeedback.reaction} onChange={handleChange}>
        <option value= {1} >Terrible</option>
        <option value={2}>Bad</option>
        <option value={3}>Okay</option>
        <option value={4}>Good</option>
        <option value={5}>Great</option>
      </select> */}
        
      </form>
      <br />

      <div className="faces">


        <div className={userFeedback.reaction == 5? "face-selected" :"face"} style={userFeedback.reaction == 5?{ color: 'chartreuse'}:{}} onClick={()=>handleReaction(5)}>
      <FontAwesomeIcon icon={faFaceGrinSquint} size="4x" />
      <span>Rad</span>
        </div>
      
        <div className={userFeedback.reaction == 4? "face-selected" :"face"} style={userFeedback.reaction == 4?{ color: 'aquamarine'}:{}} onClick={()=>handleReaction(4)}>

      <FontAwesomeIcon icon={faFaceSmile} size="4x"/>
      <span>Good</span>
      </div>

      <div className={userFeedback.reaction == 3? "face-selected" :"face"} style={userFeedback.reaction == 3?{ color: 'cornflowerblue'}:{}} onClick={()=>handleReaction(3)}>

      <FontAwesomeIcon icon={faFaceMeh} size="4x"/>
      <span>Meh</span>
      </div>

      
      <div className={userFeedback.reaction == 2? "face-selected" :"face"} style={userFeedback.reaction == 2?{ color: 'coral'}:{}} onClick={()=>handleReaction(2)}>
      <FontAwesomeIcon icon={faFaceFrown} size="4x"/>
      <span>Bad</span>
      </div>

      
      <div className={userFeedback.reaction == 1? "face-selected" :"face"} style={userFeedback.reaction == 1?{ color: 'crimson'}: {}} onClick={() =>handleReaction(1)}>
      <FontAwesomeIcon icon={faFaceDizzy} size="4x" />
      <span>Awful</span>
      </div>


    </div>
    <input 
    type="submit"
          value='Submit' 
          form='myForm'
        />
    </div>
      </>
    )
  }


export default Feedback
