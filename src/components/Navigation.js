import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"
import mantraPic from "../pages/MantraLogo-01.png"

const Navigation = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-wrapper">
        <div className="logo-container">
          <Link to="/">
            <img alt="Mantra logo" src={mantraPic} className="mantra-pic" />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Navigation
