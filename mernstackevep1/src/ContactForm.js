import React,{useState} from "react";

function ContactForm()
{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        //Perform form submission logic here
        console.log("Your name is::",name);
        console.log("Your email is::",email);
        console.log("Your message is::",message);
        alert(name)

        //Reset the form field after submission

        setName('');
        setEmail('');
        setMessage('');
        
    }
    return(
        <div>
            <h2>ContactUs</h2>
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
               </div>
               <div className="form-group">
                  <label>Message</label>
                  <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
               </div>
               <button type="submit">Submit</button>
            </form>
        </div>
    )
    
}
export default ContactForm;
