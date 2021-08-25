import React, {useRef, useState} from 'react';
import './App.css'
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'lix@example.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current) //4
    nextId.current += 1;
  }

  return (
    <>
    <CreateUser username = {username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}/>
    <UserList users={users}/>
    </>
  );
}

export default App;
