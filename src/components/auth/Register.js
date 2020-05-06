import React, {Fragment,useState} from 'react'
import {Link, Redirect} from 'react-router-dom';

const env = process.env
const host = "localhost";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    shop: ''
  });
  console.log(window.location.hostname);
  var message = "Your Shop Url needs to be correct. Make sure that it ends with \".myshopify.com\"";
var isAuthenticated = '';
  const {name, shop} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    if (!shop.includes(".myshopify.com")) {
      console.log('no shop');
      isAuthenticated = true; 
      console.log(formData.message);
    } else {
      const newUser = {
        name,
        shop
      }
      isAuthenticated = false;
      console.log(newUser.shop);
      window.location = `/shopify?shop=${newUser.shop}`;
  }
  }


  return (
  	<Fragment>
  <h1 className="large text-primary">Sign Up</h1>

      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
     {(
        <Fragment>{isAuthenticated ? "" : message}</Fragment>
      )}
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <
          input type="text" 
          placeholder="Name" 
          name="name" 
          value = {name} 
          onChange={e=>onChange(e)}
          required 
          />
        </div>
        <div className="form-group">
          <
          input type="text" 
          placeholder="Shopify Store name. e.g., wehpeo.myshopify.com" 
          name="shop"
          value = {shop} 
          onChange={e=>onChange(e)}
          required 

          />
          <small className="form-text"
            >Please, use only your store name, do not include the "https://" </small
          >
        </div>
        
       
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </Fragment>
  )
}


export default Register