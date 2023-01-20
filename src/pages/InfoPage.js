import React from "react"
// import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./InfoPage.css"
import "../App.css"

const InfoPage = () => {
  // const { id } = useParams()
  const location = useLocation()
  const data = location.state
  // console.log(data)
  return (
    <div className={`inside-container`}>
      <h4 className="inside-title">{data.name}</h4>
      <img className="inside-image" src={data.image} alt={data.name} />
      <p className="inside-desc">{data.description}</p>
      <h6 className="emission-title">
        Emissions: <span>{data.emissions}</span>
      </h6>
      <h4 className="inside-title">
        Some environment friendly alternatives are:
      </h4>
      <div className="alternativeWrap">
        <h7 className="alternatives">1. {data.alternative1}</h7>
        <span className="alternativesDesc">--{data.alterDesc1}</span>
        <h7 className="alternatives">2. {data.alternative2}</h7>
        <span className="alternativesDesc">--{data.alterDesc2}</span>
        <h7 className="alternatives">3. {data.alternative3}</h7>
        <span className="alternativesDesc">--{data.alterDesc3}</span>
        <h7 className="alternatives">4. {data.alternative4}</h7>
        <span className="alternativesDesc">--{data.alterDesc4}</span>
      </div>
    </div>
  )
}

export default InfoPage

/*...*/
