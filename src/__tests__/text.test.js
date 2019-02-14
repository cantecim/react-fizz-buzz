import React from 'react'
import { Text } from '../'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Text Component', () => {
  it('is truthy', () => {
    expect(Text).toBeTruthy()
  })

  it('render text', () => {
    const text = Enzyme.shallow(<Text content={'Test'} />)
    expect(text.text()).toEqual('Test')
  })
})
