
import './App.css';
import React,{useState} from 'react'
function App()
{
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit=(e)=>{

    e.preventDefault();
    //Perform form submission logic here
    console.log("FormSubmitted with data:");
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Message:",message);
    //You can also reset the form fields after submission

    setName('');
    setEmail('');
    setMessage('');
  };
  return(
    <div className='contact-form'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
           <div className='form-group'>
              <label>Name</label>
              <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>

           </div>
           <div className='form-group'>
              <label>Email</label>
              <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              
           </div>
           <div className='form-group'>
              <label>Message</label>
              <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
              
           </div>

           <button type='submit'>Submit</button>
      </form>
         
    </div>
  );
}

export default App;


