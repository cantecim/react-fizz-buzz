import React from 'react'
import {WithString, Text} from '../'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Test WithString Component', () => {
  it('is truthy', () => {
    expect(WithString).toBeTruthy()
    expect(Text).toBeTruthy()
  })

  it('render Text component', () => {
    const TextWithString = WithString(Text, 'Test')
    const text = Enzyme.shallow(<TextWithString />)
    expect(text.find(Text)).toBeTruthy()
    expect(text.find(Text).render().text()).toEqual('Test')
  })
})
