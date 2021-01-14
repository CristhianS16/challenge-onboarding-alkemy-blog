import React from 'react'

const Wrapper = ({children}) => {
    return (
      <div className="container p-3 text-center">
          {children}
      </div>
    )
}

export default Wrapper;
