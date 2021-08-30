import { useState, useReducer , useCallback } from "react"


function reducer(state, action){
  switch (action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET_INPUT':
      return {
        ...action.initialState
      }
    default:
      throw new Error('useInput.js has error')
  }

}

function useInputs(initialForm){
  const [form, dispatch] = useReducer(reducer, initialForm)
  return [form, dispatch]
}

// function useInputs(initialForm){
//   const [form, setForm] = useState(initialForm);
//   const onChange = useCallback(e => {
//     const {name, value} = e.target
//     setForm(form => ({...form, [name]: value}))
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm])
  
//   return [form, onChange, reset]
// }

export default useInputs;