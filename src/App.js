import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Home from "./pages/Home"
import InfoPage from "./pages/InfoPage"
import PlasticPage from "./pages/PlasticPage"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plastic" element={<PlasticPage />} />
        <Route path="/infopage/:id" element={<InfoPage />} />
      </Routes>
      <footer className="footer">Made with ❤️ by Team Stack Underflow</footer>
    </div>
  )
}

export default App
