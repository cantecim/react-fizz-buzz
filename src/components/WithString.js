import React from 'react'

const WithString = (InnerComponent, content) => {
  const withString = () => {
    return <InnerComponent content={String(content)} />
  }

  return withString
}

export default WithString
