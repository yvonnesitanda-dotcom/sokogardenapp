import React, { useState } from 'react'

const Signin = () => {
  //Define the two hooks for capturing/storing the users input
  const [email,setEmail]=useState("");
  const[password,setPassword]= useState("");

  // Declare the three additional hooks
  const[loading, setLoading] =useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

  //Below is the function to handle the signin action
  const handlesubmit = async (e) => {
    //Prevent the site from reloading
    e.preventDefault()

    // Update the loading hook with a message
    setLoading("Please wait while we authenticate your account.")
    try{
   //Create a formData object that willhold the email and the password
  const formData = new FormData()
  // Insert/ append the email and the password
  formData.append("email" ,email)
  formData.append("password",password)

  //Interact with axios for the response
 // const response = await axios.post
    }
    catch(error){


    }
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <center><h1 className='text-primary'>Sign In</h1></center>

        <form onSubmit={handlesubmit}>
          <input type="email"
          placeholder='Enter the email address here...'
          className='form-control'
          required
          value={email}
          onChange={(e) =>setEmail(e.target.value)} /> <br />
          

          <input type="password"
          placeholder='Enter the password here...'
          className='form-control'
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/> <br />
          

          <center><input type="submit"
          value="Sign In"  
          className='btn btn-primary'/></center>
        </form>
      </div>
      
    </div>
  )
}

export default Signin;
