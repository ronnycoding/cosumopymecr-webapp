interface CurrentUser {
  currentUser?: Object
}

const initialState = {
  currentUser: {},
}

export default {
  ...initialState,
  resetStore(state: Object) {
    return { ...state, initialState}
  },
  setCurrentUser(state: CurrentUser, payload: Object) {
    return {
      ...state,
      currentUser: payload,
    }
  },
  updateCurrentUser(state: CurrentUser, payload: Object) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        ...payload
      }
    }
  }
}