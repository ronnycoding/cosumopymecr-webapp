import { useStoreState, useStoreActions } from 'easy-peasy'

export default function useCurrentUser() {
  const currentUser = useStoreState(state => state.currentUser.currentUser)
  // @ts-ignore
  const setCurrentUser = useStoreActions(actions => actions.currentUser.setCurrentUser)
  // @ts-ignore
  const updateCurrentUser = useStoreActions(actions => actions.currentUser.updateCurrentUser)

  return {
    currentUser,
    setCurrentUser,
    updateCurrentUser,
  }
}