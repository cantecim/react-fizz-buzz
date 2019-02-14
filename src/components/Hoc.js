import WithString from './WithString'

const Hoc = (WrappedComponent, content) => {
  if (content % 3 === 0 && content % 5 === 0) {
    return WithString(WrappedComponent, 'FizzBuzz')
  } else if (content % 3 === 0) {
    return WithString(WrappedComponent, 'Fizz')
  } else if (content % 5 === 0) {
    return WithString(WrappedComponent, 'Buzz')
  } else {
    return WithString(WrappedComponent, content)
  }
}

export default Hoc
