import React, { useEffect, useState } from "react"
//import { useProducts } from "../hooks"
import { useItems } from "../hooks"
import { FaShoppingCart } from "react-icons/fa"
//import { router } from "json-server"

export default function() {
  const { cart, toggle, isOpen, del, total } = useItems()

  return (
    <div className="productscart">
      <button className="carticon" onClick={e => toggle()}>
        <FaShoppingCart />
      </button>

      {isOpen ? (
        <div className="open">
          {cart.map(item => (
            <div key={item.id}>
              <img className="cartimg" src={`/assets/${item.sku}_1.jpg`}></img>
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={e => del(item.id)}>X</button>
            </div>
          ))}
          <div className="total">
            <h3>Total: ${total}</h3>
          </div>
        </div>
      ) : (
        <div className="closed"></div>
      )}
    </div>
  )
}
