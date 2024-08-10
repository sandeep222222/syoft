import React from 'react'
import './index.css'
import  { withRouter } from 'react-router-dom';

import { FaRegUserCircle } from "react-icons/fa";

class Dashboard extends React.Component {
  state = {
    userInfo: {},
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    this.setState({userInfo})
    console.log(userInfo)
  }

  onClickLogout = ()=>{
    localStorage.removeItem('user')
    const { history } = this.props;

    history.replace('/');
  }

  render() {
    const {userInfo} = this.state

    return (
      <div className='app-dash'>
      <div className="dashboard-container">
        
        <h1 className="title">Dashboard</h1>
        <FaRegUserCircle  className='icon' size={50}/>
        <div className="user-info">
        <p><strong>First Name:</strong> <br/> {userInfo.user_firstname}</p>
        <p><strong>Email:</strong> <br/> {userInfo.user_email}</p>
          <p><strong>Phone:</strong> <br/> {userInfo.user_phone}</p>
          <p><strong>City:</strong> <br/> {userInfo.user_city}</p>
          <p><strong>Zipcode:</strong> <br/> {userInfo.user_zipcode}</p>
        </div>
        <button type='button' onClick={this.onClickLogout} className='btn-logout'>Logout</button>
      </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)