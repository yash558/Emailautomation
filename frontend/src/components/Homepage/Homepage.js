import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home_page">
      <div className="home_nav">
        <div className="nav_title">
          <img src={logo} alt="" />
        </div>
        <div className="nav_btn">
          <Link to="/contact"><button className="btn btn-primary">Talk to us</button></Link>
        </div>
      </div>
      <div className="home_desc">
        <div className="home_desc_1">
          <h1>Grow your Business <br /> with Email Automation</h1>
        </div>
        <div className="home_desc_img">
          <img src={profile} alt="" />
        </div>
        <div className="home_desc_btn">
          <button className='btn btn-primary p-2'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home