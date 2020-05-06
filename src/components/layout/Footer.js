import React, {Fragment} from 'react'
const Footer = () => {
	return (
	<footer className="footer bg-dark text-white mt-5 p-4 text-center ">
    <div className="card">
    <div className="card-body">
    <p className="card-text text-info">Copyright &copy; {new Date().getFullYear()} <strong>WEHPEO</strong></p>
    <a href ="https://www.facebook.com/groups/shopifyentrepreneurs/" className="btn btn-primary btn-sm">Facebook Group</a>
  </div>
</div>
    </footer>
  
	);
};



export default Footer