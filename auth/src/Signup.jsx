import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Singup() {
    const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  const [data, setData] = useState({fname: "", lname:"", pass1:"", email:"", phone:""});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const user_Signup = () => {
    navigate('/Login');
  }

  const user_Signin = () => {
    navigate('/Login');
  }
  return (
    <div>
      <h1>Sing Up Page</h1>
      <label htmlFor="fname">
        First Name: <input type="text" name='fname' value={data.fname} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="lname">
        Last Name: <input type="text" name='lname' value={data.lname} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="pass1">
        Password: <input type="password" name='pass1' value={data.pass1} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="email">
        Email: <input type="email" name='email' value={data.email} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="phone">
        Phone: <input type="number" name='phone' value={data.phone} onChange={handleInputChange} />
      </label><br />
      <button onClick={user_Signup}>Register</button>
      <button onClick={user_Signin}>Login</button>

      
    </div>
  )
}

export default Singup