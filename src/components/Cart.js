import React, { useEffect } from "react"
//import { useProducts } from "../hooks"
import { useItems } from "../hooks"
import { FaShoppingCart } from "react-icons/fa"

export default function(e) {
  const { cart, toggle, isOpen, del } = useItems()
  //const { product } = useProducts()
  function onClick(e) {
    e.preventDefault()
  }
  useEffect(() => {
    console.log(cart)
  })
  return (
    <div className="products">
      {isOpen ? <h1>OPEN</h1> : <h1>CLOSED</h1>}
      <button onClick={e => toggle()}>Toggle</button>
      <div className="carticon">
        <FaShoppingCart />
      </div>
      {cart.map(item => (
        <div key={item.id}>
          <img className="cartimg" src={`/assets/${item.sku}_1.jpg`}></img>
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={e => del(item)}>X</button>
        </div>
      ))}
    </div>
  )
}
