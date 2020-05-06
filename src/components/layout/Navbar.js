import React, { Fragment} from 'react'
import {useLocation,Link, useHistory } from "react-router-dom";
const env = process.env
const Navbar = () => {
 
  var isAuthenticated = '';
  var loading = false;
if (window.location.pathname === '/dashboard'){
  isAuthenticated = true;
} else {
  isAuthenticated = false;
}
const location = useLocation();
const history = useHistory();

const onSubmit = async e => {
  const response = await fetch(`shopify/logout`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include'
      }).then((data) => {
    // send infos to dash components
history.push({
           pathname: '/'
       });

 });
}

  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a  onClick={e => onSubmit(e)}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm' >Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'><i className="fas fa-handshake"></i> Wehpeo</Link>
        </h1>
       {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

export default Navbar