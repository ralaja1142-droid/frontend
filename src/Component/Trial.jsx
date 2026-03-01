import React from 'react'
import { useEffect,useState } from 'react'

const Trial = () => {
  const [user,setUser] = useState ([]);
  useEffect (() => {
    fetchData()
  },[])

  const fetchData = async ()=> {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then (Response => Response.json())
    .then(result =>
      setUser(result.user)
    )
  }

  return (
    <>
 <table  style={{width:"100%" , border:"solid 4px blue"}}>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>address</th>
      </tr>
      
    </thead>
    <tbody >
        {
          user.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>

            </tr>
          ))
        }
        
      </tbody>
   </table>
    </>
  )
}

export default Trial