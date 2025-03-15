import React, { FC } from 'react'

interface MyProps {
    a:number,
    b:string,
}

const TestComp2:FC<MyProps> = ({a,b}) => {
  return (
    <div>
        <p>{a}</p>
        <p>{b}</p>
    </div>
  )
}

export default TestComp2