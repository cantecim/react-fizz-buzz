import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => {
  return (
    <div>{props.content}</div>
  )
}

Text.propTypes = {
  content: PropTypes.string.isRequired
}

Text.defaultProps = {
  content: ''
}

export default Text
