import { action } from 'easy-peasy'

interface CurrentUser {
  currentUser?: Object
}

const initialState = {
  currentUser: {},
}

export default {
  ...initialState,
  resetStore: action((state: Object) => {
    return { ...state, initialState}
  }),
  setCurrentUser: action((state: Object, payload: Object) => {
    return {
      ...state,
      currentUser: payload,
    }
  }),
  updateCurrentUser: action((state: CurrentUser, payload: Object) => {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        ...payload
      }
    }
  })
}