import React, { useContext, useRef, useCallback } from 'react'
import { InputDispatch } from './App'
import { UserDispatch } from './App'

function CreateUser() {
  const [form, formDispatch] = useContext(InputDispatch)
  const dispatch = useContext(UserDispatch)

  const { username, email } = form

  const nextId = useRef(4)

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    })
    formDispatch({
      type: 'RESET_INPUT',
      initialState: {
        username: '',
        email: '',
      },
    })
    nextId.current += 1
  }, [username, email, formDispatch])

  const onChange = (e) =>
    formDispatch({
      type: 'CHANGE_INPUT',
      name: e.target.name,
      value: e.target.value,
    })

  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser)
