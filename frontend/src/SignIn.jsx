import React from 'react'

function SignIn(){
  return(
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25 border'>
            <h2>Sign In</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter email' name='email' className='form-control
                    rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' name='password' className='form-control
                    rounded-0'/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Sign In</button>
                <p>You agree to our terms and conditions</p>
                <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration'>
                  Create Account</button>
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