import axios from 'axios';
import React , {useState}from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  const [Username, setUsername] =useState ("")//username inserted will be saved in the hook
  const [email,setEmail] = useState ("")
  const [password,setPassword] =useState("")
  const [phone,setPhone] = useState("")

  //Define the three states an application will move to
  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

  // Below is a function that will handle the submit function
  const handlesubmit = async(e) =>{
    // Below we prevent our site from reloading
   e.preventDefault()

   // Update the loading hhok with a message that will be displayed to the users who are tring to register in UI
   setLoading("Please wait as we register you...")

  try{
   //Create a form data object that will enable you to capture the four details entered on the form
   const formdata= new FormData();

   // Insert the four details(username, email, password,phone) in terms of key-value pairs
   formdata.append("username",Username);
   formdata.append("email",email)
   formdata.append("password",password)
   formdata.append("phone",phone)

   // by use of axios, we can access the method POST
   const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signup",formdata)

   // Set back the loading to default
   setLoading("");

   // Update the success hook with a messag ein case everything goes well.
  setSuccess(response.data.message)

  // Clear hooks back to defauly
  setUsername("")
  setEmail("")
  setPassword("")
  setPhone("")
  }
  catch(error){
    // set the loading back to default
    setLoading("")

    // Update the error hook with the message given back from the response
    setError(error.message)

  }
  }



    return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4">
        <h1 className='text-primary text-center'>Sign Up</h1>

        <h5 className="text-warning">{loading}</h5>
        <h3 className="text-success">{success}</h3>
        <h4 className="text-danger">{error}</h4>

        <form onSubmit={handlesubmit}>
          <input type="text" 
          placeholder='Enter the Username'
          className='form-control' 
          value={Username} //binding back
          onChange={(e) =>setUsername(e.target.value)}/> <br />

          

          <input type="text"
          placeholder='Enter Email'
          className='form-control'
          value = {email}
          onChange={(e) => setEmail(e.target.value)}/> <br />
          

          <input type="password"
          placeholder='Enter your Password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br />

          

          <input type="tel"
          placeholder='Enter phone number' 
          className='form-control'
          value={phone}
          onChange={(e) =>setPhone(e.target.value)}/> <br />
          

          <center> <button type='submit' className='btn btn-primary'>Signup</button></center>

           <center>Already have an account? <Link to={'/signin'}>Sign In</Link></center>
        </form>
      </div>
    </div>
  )
}

export default Signup;

//Research on Axioz in ReactJs
