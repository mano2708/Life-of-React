import {useState} from "react"

import "./Blogs.css"

function InputField() {

      const [userVal, setNameVal ] = useState({
            name:"",
            num:0,
            date:"",
            pass:"",
            time:""
      });


      const handleChange = (e) => {
            
            const { name, value } = e.target;

            setNameVal(prevVal => ({
                  ...prevVal,
                  [name]: value,
                }));
            console.log(userVal);
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(userVal);
      }

      return (<div>
            <input type="text" 
                  name="name" 
                  value={userVal.name} 
                  onChange={(e)=>handleChange(e)}/><br/>
            <input type="number" 
                  name="num" 
                  value={userVal.num} 
                  onChange={(e)=>handleChange(e)}/><br/>
            <input type="password" 
                  name="pass" 
                  value={userVal.pass} 
                  onChange={(e)=>handleChange(e)}/><br/>
            <input type="date" 
                  name="date" 
                  value={userVal.date} 
                  onChange={(e)=>handleChange(e)}/><br/>
            <input type="time" 
                  name="time" 
                  value={userVal.time} 
                  onChange={(e)=>handleChange(e)}/><br/>

            <button onClick={handleSubmit}>Submit</button>

            <h2>Profile Preview</h2>
            <p>Name: {userVal.name}</p>
            <p>Date: {userVal.date}</p>
            <p>num: {userVal.num}</p>
            <p>Password: {userVal.pass}</p>
      </div>);
}






const UserProfile = () => {
      // Initialize state with an object
      const [profile, setProfile] = useState({
        name: '',
        email: '',
        age: 0,
      });
    
      // Event handler to update the profile
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Update state using the previous state and spread operator
        setProfile(prevProfile => ({
          ...prevProfile,
          [name]: value,
        }));
      };
    
      return (
        <div>
          <h1>User Profile</h1>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
              />
            </label>
          </form>
          <h2>Profile Preview</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Age: {profile.age}</p>
        </div>
      );
    };







/* 


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  // declaring initial state
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  handleChange = (e) => {
    
//     we can get the name and value like this: e.target.name, e.target.value
//     but we can also destructure  name and value from e.target
//     const name = e.target.name
//     const value = e.target.value
    
    const { name, value } = e.target
    // [variablename] to use a variable name as a key in an object
    // name refers to the name attribute of the input elements
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    
//      e.preventDefault()
//       stops the default behavior of form element
//      specifically refreshing of page
     
    e.preventDefault()

    
//      the is the place where we connect backend api 
//      to send the data to the database
     

    console.log(this.state)
  }

  render() {
    // accessing the state value by destrutcturing the state
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button class='btn btn-success'>Submit</button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


*/







export function Blogs(){
      return (<>
            <InputField/>
            <UserProfile/>
            <p>This is a Blogs</p>
      </>)
}







