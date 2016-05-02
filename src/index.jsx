import React from 'react'
import ReactDOM from 'react-dom'
import {List, Map} from 'immutable'

import TodoApp from './components/TodoApp'

require('../node_modules/todomvc-app-css/index.css')

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 1, text: 'Redux', status: 'active', editing: false}),
  Map({id: 1, text: 'Immutable', status: 'completed', editing: false})
)

const filter = 'all'

ReactDOM.render(
  <TodoApp filter={filter} todos={todos} />,
  document.getElementById('app')
)