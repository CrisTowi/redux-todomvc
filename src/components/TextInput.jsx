import React, { Component } from 'react'

export default class TextInput extends Component {
  render() {
    return (
      <input className={'edit'}
        autoFocus={true}
        type={'text'} />
    )
  }
}