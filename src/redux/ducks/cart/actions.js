// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// 2. action definitions
const TOGGLE_CART = "cart/TOGGLE_CART"
const ADD_ITEM = "cart/ADD_ITEM"
const DEL_ITEM = "cart/DEL_ITEM"
// 3. initial state
const initialState = {
  cart: [],
  isOpen: false
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] }
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen }
    case DEL_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart !== action.payload)]
      }
    default:
      return state
  }
}

function addItem(product) {
  return dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: product
    })
  }
}

function toggleCart() {
  return {
    type: TOGGLE_CART
  }
}

function delItem(product) {
  return dispatch => {
    dispatch({
      type: DEL_ITEM,
      payload: product
    })
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const isOpen = useSelector(appState => appState.cartState.isOpen)
  const add = product => dispatch(addItem(product))
  const toggle = () => dispatch(toggleCart())
  const del = product => dispatch(delItem(product))
  useEffect(() => {
    console.log(cart)
  }, [])

  return { cart, add, isOpen, toggle, del }
}
