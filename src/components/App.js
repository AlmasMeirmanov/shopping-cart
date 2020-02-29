import React from "react"
import "../styles/App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Products from "./Products"
import Cart from "./Cart"

export default props => {
  return (
    <Router>
      <div className="container">
        <div className="products">
          <Route path="/" component={Products} />
        </div>
        <div className="cart">
          <Route path="/" component={Cart} />
        </div>
      </div>
    </Router>
  )
}
