import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproducts = () => {

  // initialize to help you manage the state of your application
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState("")

  //Declare the navigate hook
  const navigate= useNavigate()


  // below we specify the image base url
   const img_url="https://yvonnesitanda.alwaysdata.net/static/images/"
  // Create a function to help you fetch the products from your API
  const fetchProducts=async() => {
    try{

      // Update the loading hook
      setLoading(true)
    // Interact with your endpoint for fetching the products
    const response = await axios.get("https://yvonnesitanda.alwaysdata.net/api/get_products")

    // Update the products hook with the response given from the APi
    setProducts(response.data)

    // Set the loading hook back to default
    setLoading(false)

    // Update the error hook with a message
    setError(error.message)

    }
    catch(error){
      setLoading(false)

    }
  }

  // WE shall use the useEffect hook. This hook enables use to automatically re render new features in case of any changes

  useEffect(() =>{
    fetchProducts()
  }, [])

  //console.log("The products fetched are", products)
  return (
    <div className='row'>
      <center><h3 className="text-primary">Available Products</h3></center>

      <h4 className="text-danger">{error}</h4>

      {/*map the products from the API to the user interface  */}

      {products.map((product) => (
        <div className="col-md-3 justify-content- center">
        <div className="card shadow">
          <img 
          src={img_url+ product.product_photo}
          alt="productname" 
          className='product_img mt-3'/>
           <center><div className="card-body">
            <h5 className="text-primary">{product.product_name}</h5>

            <p className="text-dark">{product.product_description.slice(0,70)}..</p>

          <h4 className="text-info">KES {product.product_cost}</h4>

          <button className='btn btn-outline-info' onClick={() =>navigate("/makepayment",{state:{product}})}>Purchase Now</button>
          </div></center> 
        </div>
      </div>
      )  )}
      
    </div>
  )
}

export default Getproducts;
