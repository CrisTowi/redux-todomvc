import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    let items = this.props.todos.map((item) => {
      return (
        <TodoItem
          key={item.get('text')}
          text={item.get('text')}
        />
      )
    })

    return (
      <section className={'main'}>
        <ul className={'todo-list'}>
          {items}
        </ul>
      </section>
    )
  }
}