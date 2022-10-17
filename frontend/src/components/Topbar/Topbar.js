import React from 'react'
import { Link } from 'react-router-dom';
import './Topbar.css';
const Navbar = () => {
  return (
    <div className="top_bar">
      <div className="social_icons">
        <div className="github_icon">
          <div className="github_ico ">
            <i className="fa-brands fa-github fs-5"></i>
          </div>
          <div className="icon_title">
            <a href="/" className='github' target="_blank" >Github</a>
          </div>
        </div>
        <div className="docs_icon">
          <div className="docs_ico">
            <i className="fa-regular fa-file-lines fs-5"></i>
          </div>
          <div className="icon_title">
            <p>Docs</p>
          </div>
        </div>
        <div className="vertical_line"></div>
        <div className="sign_icon">
          <div className="sign_ico">
            <i className="fa-solid fa-right-to-bracket fs-5"></i>
          </div>
          <div className="icon_title">
            <Link to='/login' className='signin'>Sign In</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar