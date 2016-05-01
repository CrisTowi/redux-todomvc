import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import TextInput from './TextInput'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <li className={'active'}>
        <div className={'view'}>
          <input className={'checkbox'} className={'toggle'} />
          <label htmlFor={'todo'}>
            {this.props.text}
          </label>
          <button className={'destroy'}></button>
          <TextInput />
        </div>
      </li>
    )
  }
}