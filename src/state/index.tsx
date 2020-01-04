import { createStore } from 'easy-peasy'

import currentUser from './current-user'

const store = createStore({
  currentUser,
})

function resetStores() {
  Object.values(store.dispatch).forEach(
    (storeAction: any) => storeAction.resetStore && storeAction.resetStore(),
  )
}

export {
  store,
  resetStores
}