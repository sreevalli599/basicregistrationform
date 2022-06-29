import React,{useState} from 'react';
import Thankyoupage from './Thankyoupage.js';
export default function RegistrationForm(){
    const[values,setValues]=useState({
        name:"",
        lname:"",
        Email:""
    });
    const[submitted,setSubmitted]=useState(false);
    const[valid,setValid]=useState(false);
    const handlefirstname=(event)=>{
setValues({...values,name:event.target.value});
    }
    const handleSecondname=(event)=>{
        setValues({...values,lname:event.target.value});
            }
    const handleEmail=(event)=>{
                setValues({...values,Email:event.target.value});
                    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.name&&values.lname&&values.Email){
        setValid(true);
        }
        setSubmitted(true);
                            }
    return(
        (submitted&&valid)?<Thankyoupage/>:
        <div>
            <h1>Registration Form</h1><br/>
            <form>
                <label for="name">FirstName:</label><br/>
            <input id="name" name="name" placeholder="firstname..." onChange={handlefirstname}/><br/>{submitted && !values.name?<span>enter a valid name</span>:null}<br/>
            <label for="lname">LastName:</label><br/>
            <input id="name" name="lname" placeholder="Lastname..." onChange={handleSecondname}/><br/>{submitted && !values.lname?<span>enter a valid name</span>:null}<br/>
            <label for="Email">Email</label><br/>
            <input id="name" name="Email" placeholder="Email..." onChange={handleEmail}/><br/>{submitted && !values.Email?<span>enter a valid name</span>:null}<br/>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    );
}