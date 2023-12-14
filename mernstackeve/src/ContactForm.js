import React,{useState}from 'react';
function ContactForm()
{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Thank you for your submission ${name} ${email}`);
        // alert(`Thank You for Your submission ${email}`);
        }
        return (
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br/><input type="text" name='name' value={name}  onChange={(
                    event => setName(event.target.value))} /><br/><br/>
                    <label>Email:</label><br/><input type="email" name='email' value={email}  onChange={(
                        event => setEmail(event.target.value))} /><br/><br/>
                        <label>Message:</label><br/><textarea rows = "4" cols= "50" name='message' value
                        ={message}  onChange={(
                            event => setMessage(event.target.value))} > </textarea><br/><br/>
                            <button type="submit">Send Message</button>
                            </form>
                            );
          
}
export default ContactForm;