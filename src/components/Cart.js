import React, { useEffect, useState } from "react"
//import { useProducts } from "../hooks"
import { useItems } from "../hooks"
import { FaShoppingCart } from "react-icons/fa"

export default function() {
  const { cart, toggle, isOpen, del } = useItems()

  const [total, setTotal] = useState(0)
  const newCart = cart.map(product => {
    return {
      finalCart: product.find(product => product.price === product) //find(product => product.id === product)
      //quantity: cart.filter(productId => productId === product).length
    }
  })
  useEffect(() => {
    const amount = newCart.reduce((a, b) => {
      return a + b.finalCart.price * b.price
    }, 0)
    setTotal(amount.toFixed(2))
  }, [cart, newCart])
  console.log(total)

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
      <h3>Total{total}</h3>
    </div>
  )
}
