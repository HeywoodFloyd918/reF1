import React from 'react'

interface MyProps {
  a:number,
  b:string,
}

export const TestComp = (props: MyProps) => {
  return (
    <div>
      
      <p>{props.a}</p>
      <p>{props.b}</p>
    
    </div>
  )
}