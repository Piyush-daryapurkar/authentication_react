import React from 'react'
// import './Signup.css'


const Login=()=> {
  const login_data=JSON.parse(localStorage.getItem("user_data"))
  
  return (
    <>
    {login_data.map((i)=(
      <>
      <h1>{i.name}</h1>
      </>
    ))
  }
    <div className='boss'>

        <div className="sign">


          <h1 className='heading1'>Log In Page</h1><br></br>

          <label htmlFor="email">
          Email:<br></br> <input type="email" name='email'  placeholder='Enter Your Email'/>
          </label><br></br><br></br>
          <label htmlFor="pass1">
          Password:<br></br> <input type="password" name='pass1'  placeholder='Enter Your Password'/>
          </label><br></br>
          <button >Login</button>

          


        </div>

    </div>
    </>
  )
}

export default Login