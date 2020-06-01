import React, { useState } from 'react';
import axios from 'axios'

function Home(props){
    const [form,setForm]=useState({
        name:"",
        email:"",
        number:null
    })
    const [book,setBook]=useState("");
    const [result,setResult]=useState([]);
    const [apiKey,setApiKey]=useState("AIzaSyAobueeKqov3n13IofqiDWs6b1XsdU8Dr8");
    const api=(e)=>{
        const book=e.target.value
        setBook(book);
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+apiKey+'&maxResults=40').then(data=>{
            console.log(data)
        })
    }
    const formData=(e)=>{
        var value=e.target.value
        var name=e.target.name
        if(name=="name"){
        setForm((prev)=>{
                return{

                    name:value,
                    email:prev,
                    number:prev}
                })
        }
            else if(name=="email"){
                setForm((prev)=>{
                    return{
                        name:prev,
                        email:value,
                        number:prev
                    }
                })
            }
            else{
                setForm((prev)=>{
                    return{
                        name:prev,
                        email:prev,
                        number:value
                    }
                })
            }
    }
    return (
        <div className="container">
            <h2>Hello {form.name}</h2>
            <div id="form">
<form onSubmit>
    <input placeholder="Enter your name" onChange={formData} name="name"/>
    <input placeholder="Enter your mail" onChange={formData} name="email"/>
    <input placeholder="Enter your Phone number" onChange={formData} name="number"/><br />
    <input type="submit" value="Register"/>
</form>
</div>
        </div>
    )
}
export default Home