import axios from "axios"
import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./home.css"
import Resources from "./Resources"
import insideAiPic from "./Swikar_Neupane_climate_change_house_objects_creating_climate_ch_6498ceaa-3975-480b-87e3-27b2d2b7cebc.png"
import Typed from "typed.js"

const Home = () => {
  const el = useRef(".auto-type")

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Climate Change"],
      startDelay: 300,
      typeSpeed: 100,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      // loop: true,
    })
  }, [])
  return (
    <div className="home-main-container">
      <div className="home-top-wrapper">
        <div className="home-top-content">
          <div className="top-left-content">
            <h3>
              Join the Fight Against <br />
              <span
                className="auto-type"
                ref={el}
                style={{ color: "white" }}></span>
            </h3>
            <p>
              The effects of climate change are already being felt around the
              world, and it's up to each and every one of us to take action. The
              future of our planet depends on it.
            </p>
            <Link to="/about">
              <button className="about-btn">About Climate Change</button>
            </Link>
          </div>
          <div className="top-right-content">
            <img src={insideAiPic} alt="AiImage" className="ai-image" />
          </div>
        </div>
      </div>
      <div className="home-resources-container">
        <Resources />
      </div>
    </div>
  )
}

export default Home
