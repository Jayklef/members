import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

function SignIn(){

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(``);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:7000/signIn', values)
    .then(res => {
      if(res.data.Status === "Success"){

      }else {
          setError(res.data.Error);
      }
    })
    .catch(err => console.log(err))
  }

  return(
    <div className='d-flex justify-content-center align-items-center vh-100 signinPage'>
        <div className='bg-white p-3 rounded w-25 border signinForm'>
          <div className='text-danger'>
            {error && error}
          </div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter email' name='email' 
                    onChange={e => e.setValues({...values, email: e.target.value})}     className='form-control
                    rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter password' name='password' 
                    onChange={e => e.setValues({...values, password: e.target.value})}    className='form-control
                    rounded-0'/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Sign In</button>
                <p>You agree to our terms and conditions</p>
            </form>
        </div>
    </div>
  )
}


/*const Sign = () => {
  return (
    <div>Sign</div>
  )
}  */

export default SignIn