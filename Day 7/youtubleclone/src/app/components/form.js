import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        
        <form action="">
            <h3>Sign Up Page</h3>
            <input type="text" required placeholder='Username'/>
            <input type="email" required placeholder='Email'/>
            <input type="password" required placeholder='Password'/>
            <input type="password" required placeholder='Confirm Password'/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Form