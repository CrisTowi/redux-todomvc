import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class TodoHeader extends Component {
  constructor(props) {
    super(props)

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

  _handleKeyPress(e) {
    if(e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
      console.log(this.refs.addTodoInput.value)
      return this.props.addItem(
        this.refs.addTodoInput.value
      )
    }
  }

  render() {
    return (
      <header className={'header'}>
        <h1>todos</h1>
        <input
          className={'new-todo'}
          ref={'addTodoInput'}
          autoFocus={true}
          autoComplete={'off'}
          placeholder={'what needs to be done?'}
          onKeyPress={this._handleKeyPress}
        />
      </header>
    )
  }
}