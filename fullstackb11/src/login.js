import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'

function MyForm()
{
    return(
        <form>
            <label>UserName</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
            <input type='submit' value="Submit"/>
        </form>
    );
}

export default MyForm;