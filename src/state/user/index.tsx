import React, {
  createContext,
  useReducer,
  useMemo,
  useContext
} from 'react'

interface IState {
  user: {}
}

interface IContextProps {
  state: IState;
  dispatch: ({type}:{type:string}) => void;
}

const UserContext = createContext({} as IContextProps)

function userReducer(state: any, action: any) {
  console.log({
    state,
    action,
  })
  switch (action.type) {
    case 'SET_USER':
        return {
          user: {
            ...action.payload,
          },
        }
    case 'UPDATE_USER':
        return {
          user: {
            ...state.user,
            ...action.payload,
          },
        }
    case 'RESET':
        return {
          user: {},
        }
    default:
        throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error(`useUser must be used within a CountProvider`)
  }
  // @ts-ignore
  const [state, dispatch] = context

  const setUser = (user: object) => dispatch({ type: 'SET_USER', payload: {...user} })
  const { user = {} } = state
  return {
    user,
    setUser,
  }
}

function UserProvider(props: any) {
  const [state, dispatch] = useReducer(userReducer, { user: {} })
  const user = useMemo(() => [state, dispatch], [state])
  return <UserContext.Provider value={user} {...props} />
}

export {
  UserProvider,
  useUser,
}