import React, { Component } from 'react'

import TextInput from './TextInput'

export default class TodoItem extends Component {
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