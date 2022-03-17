import React from 'react';
// import {
  
//   Link
// } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`px-2 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      
    </ul>
    
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}` } htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
</div>
    
</nav>
  )
}
