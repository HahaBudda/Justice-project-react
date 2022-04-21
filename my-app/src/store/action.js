export const ADD_PRODUCT = "ADD_PRODUCT"

export const addProductAction = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}