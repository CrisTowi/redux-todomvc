import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getItems() {
    if(this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      )
    }

    return []
  }

  render() {
    let items = this.getItems().map((item) => {
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