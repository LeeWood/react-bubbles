import React, { useState } from "react";
import auth from '../utils/auth';

const Login = (props) => {

  const [userData, setUserData] = useState({
    username : '',
    password : ''
  });

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name] : event.target.value

    })
  };

  const handleSubmit = event => {
    //console.log("form submitted!");
    event.preventDefault();
    auth()
      .post('/api/login', userData)
      .then(res => {
        console.log("token", res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubblepage');
      })
      //TODO: set up return div that will display login error if wrong creds.
      //TODO: set up a quick welcome message when user successfully logs in.
      .catch(err => console.log(err));
    
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <p>Please Log In</p>

      <form className='login-form' onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='username' onChange={handleChange}/>

        <input type='password' name='password' placeholder='password' onChange={handleChange}/>   

        <button type='submit'>Log In</button>   
      </form>
    </>
  );
};

export default Login;
