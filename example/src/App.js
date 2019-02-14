import React, { Component } from 'react'

import {
  Text,
  Hoc
} from 'fizz-buzz'

export default class App extends Component {
  renderContent() {
    const content = []

    for (let i = 0; i <= 20; i++) {
      const TextComponent = Hoc(Text, i)
      content.push(<TextComponent key={i} />)
    }

    return content
  }

  render () {
    return this.renderContent()
  }
}
