import './App.css';
import {useState,useEffect} from 'react';
import Axios from 'axios';

function App(){

    const[foodName,setFoodName]=useState('')
    const[description,setDescription]=useState('')

    //fetchdata
    const [foodList,setFoodList]=useState([]);
    //Edit
    const[newFoodName,setNewFoodName]=useState('');




    return(

        <div className='App'>
            <h1>CRUD MERN</h1>
            FoodName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder='FoodName' required/>
            <br></br><br></br>
            FoodDescription<input type="text" placeholder='FoodDescription' required/>
            <br></br><br></br>
            <button class='btn btn-info'>Submit</button>&nbsp;&nbsp;
            <button class='btn btn-info'>Reset</button>
            <br></br><br></br>
           <table>
            <h3>Get Data From Database</h3>
            <tr>
                <th>FoodName</th>
                <th>FoodDescription</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>Apple</td>
                <td>Its is good</td>
                
                <td>
                    <input type='text'/>
                    <button>Edit</button>
                </td>
                <td><button>Delete</button></td>
            </tr>
           </table>
        </div>

    )

}

export default App;