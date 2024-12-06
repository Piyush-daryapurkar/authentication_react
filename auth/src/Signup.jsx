import React, { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Singup() {
  const [data,setdata]=useState([])
  const [name,updatename]=useState("");
  const [email,updateemail]=useState("");
  const [password,updatepassword]=useState("");
  const [mobile,updatemobile]=useState("");
  const [date,updatedate]=useState(new Date().getDate())
  function add_data(e){
      e.preventDefault();
      
      const user_data=

          {
              name:name,
              email:email,
              password:password,
              mobile:mobile
          }
      
      setdata(c=>[...c,user_data])
      updatename("");
      updateemail("");
      updatepassword("");
      updatemobile("");
  }
  
localStorage.setItem("user_data",JSON.stringify(data))
  const navigate=useNavigate();
  const Signup=()=>{
      navigate('/login')
  }

  
  return (
    <div className='boss'>


      <div className="sign">


      <h1 className='heading1'>Sing Up Page</h1>
      <ul>
       
       {data.map((i)=>(
         <>
         data<h1>{i.name}</h1>
         <h1>{i.email}</h1>
         <h1>{i.password}</h1>
         <h1>{i.mobile}</h1>
         </>
       ))}
     </ul>

     <form action="">
        
        name:<input type="text" value={name} onChange={(e)=>updatename(e.target.value)} placeholder='Enter Your Name'/><br />
        email: <input type="text" value={email} onChange={(e)=>updateemail(e.target.value)} placeholder='Enter Your Email'/> <br />
        password: <input type="text" value={password} onChange={(e)=>updatepassword(e.target.value)}  placeholder='Enter Your Password'/> <br />
        mobile: <input type="text" value={mobile} onChange={(e)=>updatemobile(e.target.value)} placeholder='Enter Your Mobile Number'/> <br />
        
        <button onClick={Signup}>Signup</button>
        <button onClick={add_data}>add user</button>

    </form>

      </div>
      
    </div>
  )
}


export default Singup