import React, { useState } from 'react'
import '../../NavItems/Css/Loginform.css'
import Registrationform from './Registrationform';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import {Link,useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'

function Loginform() {
  const navigate = useNavigate();   
    const[values,setValues] = useState({
      email:"",
      password:"",
    });
    const [errorMsg,setErrorMsg] = useState("");
    const [submitButtonDisabled,setSubmitbuttonDisabled] = useState(false);
    const handleSubmission = () => {
      if(!values.email || !values.password){
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("")
      setSubmitbuttonDisabled(true);
      signInWithEmailAndPassword(auth,values.email,values.password)
      .then(async(res)=>
        {
          setSubmitbuttonDisabled(false);
          navigate("/Profile");
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
  <div className="login-form">
      <form>
        <h2>Login</h2>
        <div className="login__form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={event=>
            setValues((prev)=> ({ ...prev, email: event.target.value}))
          }
          />
        </div>
        <div className="login__form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"
          onChange={event=>
            setValues((prev)=> ({ ...prev, password: event.target.value}))
          } />
        </div>
        <div className="login__form-group">
          <button type="button"  onClick={handleSubmission}>Login</button>
        </div>
        <div className='Login_register'>
          <b className='error'>{errorMsg}</b>
          <p>Want to create new account?  <a href='/Registrationform' className='login__signup'>Signup</a></p>
        </div>
      </form>
    </div>
    <div>
      <Footer/>
    </div>
	</div>
	






)
}

export default Loginform