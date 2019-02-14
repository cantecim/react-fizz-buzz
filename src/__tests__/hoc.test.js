import React from 'react'
import {Hoc, Text, WithString} from '../'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Test WithString Component', () => {
  it('is truthy', () => {
    expect(Hoc).toBeTruthy()
    expect(Text).toBeTruthy()
  })

  it('writes Fizz', () => {
    const HocComponent = Hoc(Text, 3)
    const text = Enzyme.shallow(<HocComponent />)
    expect(text.find(Text)).toBeTruthy()
    expect(text.find(Text).render().text()).toEqual('Fizz')
  })

  it('writes Buzz', () => {
    const HocComponent = Hoc(Text, 5)
    const text = Enzyme.shallow(<HocComponent />)
    expect(text.find(Text)).toBeTruthy()
    expect(text.find(Text).render().text()).toEqual('Buzz')
  })

  it('writes FizzBuzz', () => {
    const HocComponent = Hoc(Text, 0)
    const text = Enzyme.shallow(<HocComponent />)
    expect(text.find(Text)).toBeTruthy()
    expect(text.find(Text).render().text()).toEqual('FizzBuzz')
  })

  it('writes content itself', () => {
    const HocComponent = Hoc(Text, 2)
    const text = Enzyme.shallow(<HocComponent />)
    expect(text.find(Text)).toBeTruthy()
    expect(text.find(Text).render().text()).toEqual('2')
  })

})
