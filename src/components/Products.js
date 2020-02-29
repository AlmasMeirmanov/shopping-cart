import React, { useEffect } from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

export default props => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div>
      <div className="header">
        <h4>Sizes:</h4>
        <h6>16 Product(s) found.</h6>
        <h5>Order by</h5>
        <select>
          <option value="select">Select</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <div className="products">
        {products.map(product => (
          <div key={product.id}>
            <img src={`/assets/${product.sku}_1.jpg`} />
            <p>{product.title}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={e => add(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
