import React from "react"
import "./teams.css"
import swikarPic from "./SwikarNeuapne.png"
import sonuPic from "./sonukumar.png"
import yuneshPic from "./yuneshshrestha.png"
import sujanPic from "./sujanghimire.png"

const Teams = () => {
  return (
    <div className="teams-main-container">
      <div className="teams-top-wrapper">
        <div className="teams-top-content">
          <div className="top-image-container">
            <div className="top-info-container">
              <div className="image">
                <img alt="SonuKumar" src={sonuPic} />
                <p>Flutter Developer</p>
              </div>
              <div className="info">
                Currently studying Bachelors in Computer Engineering at IOE,
                Purwanchal Campus.
              </div>
            </div>
            <div className="top-info-container">
              <div className="image">
                <img alt="YuneshShrestha" src={yuneshPic} />
                <p>Unity Developer</p>
              </div>
              <div className="info">
                Currently studying Bachelors in Computer Engineering at IOE,
                Purwanchal Campus.
              </div>
            </div>
          </div>
          <div className="bottom-image-container">
            <div className="top-info-container">
              <div className="image">
                <img alt="SujanGhimire" src={sujanPic} />
                <p>MERN Developer</p>
              </div>
              <div className="info">
                Currently studying Bachelors in Computer Engineering at IOE,
                Purwanchal Campus.
              </div>
            </div>
            <div className="top-info-container">
              <div className="image">
                <img alt="SwikarNeupane" src={swikarPic} />
                <p>Frontend Developer</p>
              </div>
              <div className="info">
                Currently studying Bachelors in Computer Engineering at IOE,
                Purwanchal Campus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams
