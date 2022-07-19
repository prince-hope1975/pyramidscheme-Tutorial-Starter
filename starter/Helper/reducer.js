export const initialState = {
    networkAccount: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "SET_ACCOUNT":
      const newState = state;
      state.networkAccount = payload
    return newState

  default:
    return state
  }
}


export default reducer
