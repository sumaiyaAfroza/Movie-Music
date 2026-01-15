export const initialValue= {
  cartData : []
}

export const CartReducer = (state, action) => {
  switch (action.type) {
      case 'Add_To_Cart' :
        return {
          ...state,
          cartData: [...state.cartData, action.payload]
        }
      case 'Remove_From_Cart' :
        return {
          cartData: state.cartData.filter(cut => cut.id !== action.payload.id)
        }

    case 'clear_cart' :
      return {
        ...state,
        cartData: []
      }
    case "Load_Cart" :
      return {
        ...state,
        cartData: action.payload
      }


      default:
       return  state
  }
}
