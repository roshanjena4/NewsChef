import React from 'react'
import spinner from './loading.gif'
const Loading = () => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center my-3">
        <img src={spinner} alt="Loading..." />
      </div>
    </>
  )
}

export default Loading
