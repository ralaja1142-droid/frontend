
import { useState } from "react"

const Hello = () => {
  const [count , setCount ]=  useState(0);
  const add = ()=> setCount (count+1);
  return (
    <>
    Count : {count}
    <li>
      <button onClick={add}>Add</button>
    </li>
    </>
  )
}

export default Hello