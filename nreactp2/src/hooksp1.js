import React,{useState} from "react";
function ContactForm()
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Submitted with data is::")
        console.log("Name::",name)
        console.log("Email:",email)
        console.log("Message:",message)

        setName('')
        setEmail('')
        setMessage('')
    };
    return(
        <div className="contact-form">
            <h2>Contact US</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}
export default ContactForm;