import React from "react"
// import { useParams } from "react-router-dom"
import "./InfoPage.css"
import "../App.css"

const PlasticPage = () => {
  return (
    <div className={`inside-container`}>
      <h4 className="inside-title">Plastic Product</h4>
      <img
        className="inside-image"
        src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Plastic Product"
      />
      <p className="inside-desc">
        plastics originate as fossil fuels and emit greenhouse gases from cradle
        to grave. Oil, gas, and coal are the fossil-fuel building blocks of
        plastics. Natural gas and oil can be extracted from the earth through
        fracking. Companies drill wells into the ground until they hit a rock
        layer, then they turn 90 degrees and drill horizontally. Injecting sand,
        chemicals, or water breaks up the rock to release gas and oil, which are
        transported to other facilities via pipelines, trains, and trucks.
      </p>
      <h6 className="emission-title">
        Emissions: <span>CO2,Methane,Ethylene</span>
      </h6>
      <h4 className="inside-title">
        Some environment friendly alternatives are:
      </h4>
      <div className="alternativeWrap">
        <h7 className="alternatives">1. Glass</h7>
        <span className="alternativesDesc">
          --Glass bottles and jars can be used instead of plastic containers for
          food and drink storage.
        </span>
        <h7 className="alternatives">2. Metal</h7>
        <span className="alternativesDesc">
          --Metal containers such as aluminum cans and steel cans can replace
          plastic bottles and cans.
        </span>
        <h7 className="alternatives">3. Paper</h7>
        <span className="alternativesDesc">
          --Paper bags, cardboard boxes and biodegradable paper packaging can
          replace plastic bags, packaging and containers.
        </span>
        <h7 className="alternatives">4. Natural fibers</h7>
        <span className="alternativesDesc">
          -- Products made from natural fibers such as cotton, linen and jute
          can replace plastic bags and packaging.
        </span>
      </div>
    </div>
  )
}

export default PlasticPage

/*...*/
