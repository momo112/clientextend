import React, {Fragment, useState,useEffect} from 'react'
import {Link, Redirect,useHistory,useLocation} from 'react-router-dom';
const env = process.env
const host = `${env.REACT_APP_API_SCHEME}${env.REACT_APP_API_ROOT}:${env.REACT_APP_API_PORT}`
const host1 = `http://localhost:5000`


const Login1 = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
 const history = useHistory();
 useEffect(() => {
      
    }, [location]);

  const {email,password} = formData;
  console.log('Login 1');
  console.log(location.pathname);
var id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
console.log(id);
  const onChange = e => 
  setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    if (!email) {
      console.log('no email entered');
    } else {
      const newUser = {
        email,
        password
      }
var data = new URLSearchParams();
data.append('email', email);
data.append('password', password);
console.log(data.toString()); 
var r;     
  const response =  await fetch(`/shopify/login`, {
        method: 'POST',
        body: data.toString(),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        credentials: 'include'
      }).then((response) => {
     return response.json();
  })
  .then((data) => {
    console.log('Login',data.status);
    // send infos to dash components
    history.push({
           pathname: '/dashboard',
           state: {data: data}
       });
 });
  
  
    }
  }


  

	return (
  	<Fragment>
   <h1 className="large text-primary">Sign In</h1>

      <p className="lead"><i className="fas fa-user"></i> Congrats! Sign into Your Account</p>
      <h4 className=" text-danger">Here Is Your Password {id}</h4>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={e=>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="password"
            name="password"
            value={password}
            onChange={e=>onChange(e)}
            required
          />
        </div>
       
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </Fragment>
  )
}


export default Login1