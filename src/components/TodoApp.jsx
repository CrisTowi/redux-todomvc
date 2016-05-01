import React, { Component } from 'react'

import TodoList from './TodoList'

export default class TodoApp extends Component {
  getItems() {
    return this.props.todos || []
  }

  render() {
    return (
      <div>
        <section className={'todoapp'}>
          <TodoList filter={this.props.filter} todos={this.props.todos}/>
        </section>
      </div>
    )
  }
}