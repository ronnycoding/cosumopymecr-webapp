import { useStoreState, useStoreActions } from 'easy-peasy'

export default function useCurrentUser() {
  const username = useStoreState(state => state.username.username)
  // @ts-ignore
  const setUsername = useStoreActions(actions => actions.currentUser.setUsername)

  return {
    username,
    setUsername,
  }
}