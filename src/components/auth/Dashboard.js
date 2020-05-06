import React, {useState , Fragment, useEffect} from 'react'
import { BrowserRouter as Router,
  Switch, useLocation, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
 
const Dashboard = props => {
const location = useLocation();

const [formData, setFormData] = useState({
    isAuthenticated: false
  });
useEffect(() => {
     console.log(isAuthenticated);  
    }, [location]);
var isAuthenticated = formData;
async function  fireCampaign(event, user_id1){
  console.log(user_id1);
  var camp = new URLSearchParams();
  var rules = {
   email: 'keita.momo1@gmail.com',
   password: 'devs2233',
   length : 7,
   storename: 'wehpeo',
   cname: 'hello' ,
   invite: true,
   user2_id: user_id1
  }
  
  camp.append('email', rules.email);
  camp.append('password', rules.password);
  camp.append('length', rules.length);
  camp.append('cname', rules.cname);
  camp.append('storename', rules.storename);
  camp.append('invite', rules.invite);
  camp.append('user_id', user_id1);
  console.log(camp.toString());
    const response =  await fetch(`/shopify/campaign`, {
        method: 'POST',
        body: camp.toString(),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        credentials: 'include'
      }).then((response) => {
     return response.json();
  })
  .then((data) => {
    console.log(data);
    // send infos to dash components
    if(data.status === 'Please upload a picture!'){
     setFormData();
      console.log('inside');
      setFormData(formData.isAuthenticated = true);
      console.log(formData.isAuthenticated);
    }

 });

}
const message = 'false';
const guestLinks = 'Please upload your logo before anything!';
var data = location.state.data.status[0];
var currentUser = location.state.data.status[1];
const c_data = Object.assign({}, data);
console.log(currentUser, 'currentUser');

var count = 0;
return (
		<div className="dashboard">
    <div className="container">
    <h1 className="large text-primary">
        Dashboard
      </h1>

      <p className="lead"><i className="fas fa-user"></i> Welcome {currentUser.lastname}</p>
      { (
        <Fragment>{isAuthenticated ? guestLinks : message}</Fragment>
      )}
      
        <div className="input-group mb-3 px-2 py-2 ">
                <input id="upload" type="file" onchange="readURL(this);" className="form-control border-0"/>
                <label id="upload-label" for="upload" className="font-weight-light text-muted"></label>
                <div className="input-group-append">
                    <label for="upload" className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                    <small className="text-uppercase font-weight-bold text-danger colors">Click Here to Upload your Logo</small></label>
                </div>
            </div>
            
     
      <h2 className="my-2">Recommendation</h2>
      <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Category</th>
              <th className="hide-sm">Daily Trafic</th>
              <th className="hide-sm">Visit Site</th>
              <th className="hide-sm">Invite</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(c_data).map(function(keyName, keyIndex) {
            var user = c_data[keyName].user_id;
      return (
              <tr key={c_data[keyName].user_id}>
              <td>{c_data[keyName].username}</td>
              <td className="hide-sm">{c_data[keyName].category[1]}</td>
              <td className="hide-sm">
               {c_data[keyName].orc}
              </td>
              <td>
              <a href={"http://" + c_data[keyName].storename}>
                <button className="btn btn-primary btn-lg">
                  Click
                </button>
                </a>
              </td>
              <td>
                <button className="btn btn-primary btn-lg" onClick={(e) => {
     fireCampaign(e, c_data[keyName].user_id)}}>
                  Campaign
                </button>
              </td>
            </tr>
           )})
           } 
          </tbody>
         </table>

        
          </div>
		</div>
	)
}


export default Dashboard