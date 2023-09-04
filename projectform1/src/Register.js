import { useState } from "react";

function Register()
{
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpwd,setConfirmpwd]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    //Perform registeration
    if(password===confirmpwd)
    {
        console.log("Registration")
    }
    else
    {
        console.log("Password do not match")
    }
  };
  return (
    <div className="register-form">
       <h2>Register</h2>
       <form onSubmit={handleSubmit}>
          <div className="form-group">
               <label>UserName</label>
               <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
               <label>Email</label>
               <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
               <label>Password</label>
               <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
               <label>ConfirmPwd</label>
               <input type="text" value={confirmpwd} onChange={(e)=>setConfirmpwd(e.target.value)}/>
          </div>
          <button type="submit">Register</button>
       </form>
    </div>
  )
}

export default Register;
