import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Datas = () => {
  const [info, setInfo] = useState([])
  const fetchObjects = async () => {
    const { data } = await axios.get(
      "https://climatechangeserver.vercel.app/api/objects"
    )
    setInfo(data)
  }
  useEffect(() => {
    fetchObjects()
  }, [])

  return (
    <>
      <div className={`card-cover`}>
        {info.map((item) => (
          <div className="card" key={item.id}>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-desc">{item.description}</p>
            <button className="read-more">
              <Link
                to={`/infopage/${item.id}`}
                style={{ textDecoration: "none", color: "white" }}
                state={item}>
                Read More
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Datas
