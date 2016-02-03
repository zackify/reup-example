import React from 'react'

export default ({ actions, store}) => {
  return (
    <ul>
      <input 
        type="text" 
        placeholder="New Todo"
        onKeyDown={event => newTodo(event, actions)} 
      />
      {store.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

const newTodo = (event, actions) => {
  if(event.keyCode !== 13) return 
  actions.addItem(event.target.value)
  event.target.value = ''
}