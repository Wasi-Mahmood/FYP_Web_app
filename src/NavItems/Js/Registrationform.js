import React, { useState } from 'react'
import '../../NavItems/Css/Registrationform.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Link,useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import {auth} from '../../firebase'

function Registrationform() {
  const navigate = useNavigate();   
    const[values,setValues] = useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:""
    });
    const [errorMsg,setErrorMsg] = useState("");
    const [submitButtonDisabled,setSubmitbuttonDisabled] = useState(false);
    const handleSubmission = () => {
      if(!values.name || !values.email || !values.password || !values.confirmpassword ){
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("")
      setSubmitbuttonDisabled(true);
      createUserWithEmailAndPassword(auth,values.email,values.password)
      .then(async(res)=>
        {
          setSubmitbuttonDisabled(false);
          const user=res.user;         
          await updateProfile(user,{
            displayName:values.name,
          })
          console.log(user); 
          navigate("/Home");
        }
        ).catch((err)=>{
          setSubmitbuttonDisabled(false);
          setErrorMsg(err.message);
        });
    }

    return (

<div>
  <div>
    <Header/>
  </div>





  <div className="registration-form">
      <form>
        <h2>Register</h2>
        <div className="registration__form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={event=>
            setValues((prev)=> ({ ...prev, name: event.target.value}))
          }
            />
        </div>
        <div className="registration__form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={event=>
            setValues((prev)=> ({ ...prev, email: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={event=>
            setValues((prev)=> ({ ...prev, password: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword"onChange={event=>
            setValues((prev)=> ({ ...prev, confirmpassword: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <button type='button' onClick={handleSubmission} disabled={submitButtonDisabled}>Register</button>
        </div>
        <div className='register__log'>
          <b className='error'>{errorMsg}</b>
          <p>Go to Login page?  <a href='/Loginform' className='register__login'>Login Page</a></p>
        </div>
      </form>
    </div>

  
  
  
  <div>
    <Footer/>
  </div>
</div>


  )
  }
export default Registrationform