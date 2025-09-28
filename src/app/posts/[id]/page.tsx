import React from 'react'

function page({params}:any) {
   const id = params.id;
   console.log(id)
  return (
    <div>{id}</div>
  )
}

export default page