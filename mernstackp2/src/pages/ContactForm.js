import { useState } from "react";

function ContactForm()
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log("Form Submitted")
    //    console.log("Name::",name)
    //    console.log("Email:",email)
    alert(`${name}`)
    
       
       setName('')
       setEmail('')
    };
    return(
        <div>
        <form onSubmit={handleSubmit}>
            Name :<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            Email :<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </div>  
    )
}
export default ContactForm;