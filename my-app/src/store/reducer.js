import product from "../components/MockData/Product";

const defaultState = product;

export const catalogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state;

    default:
      return state;
  }

}