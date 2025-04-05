import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <>
      <div>Charts</div>
      {children}
    </>
  )
}

export default layout