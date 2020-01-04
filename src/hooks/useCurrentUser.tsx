import { useStoreState } from 'easy-peasy'

export default function useCurrentUser() {
  const currentUser = useStoreState(state => state.currentUser.currentUser)
  const setCurrentUser = useStoreState(state => state.currentUser.setCurrentUser)
  const updateCurrentUser = useStoreState(state => state.currentUser.updateCurrentUser)

  return {
    currentUser,
    setCurrentUser,
    updateCurrentUser,
  }
}