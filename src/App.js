import React, {useRef, useReducer , useMemo, useCallback, createContext} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';


function countActiveUsers(users) {
  console.log('활성 사용자 세는중...')
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'lix@example.com',
      active: false
    }
  ]

}

function reducer(state, action) {
  switch (action.type){
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user=> 
          user.id === action.id ? {...user, active: !user.active} : user)
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [form, formDispatch] = useInputs({
    username: '',
    email: ''
  })
  const {username, email} = form
  const nextId = useRef(4);
  const {users} = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    })
    formDispatch({
      type: 'RESET_INPUT',
      initialState: {
        username: '',
        email: ''
      }
    })
    nextId.current += 1;
  }, [username, email, formDispatch])

  const onChange = e => formDispatch({
    type: 'CHANGE_INPUT',
    name: e.target.name,
    value: e.target.value
  })

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    <div>활성 사용자수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
