import React, {useEffect, useState } from 'react';

const Demo = () => {

   const [user,setUser] = useState ([]) ;
    useEffect (()=>{
    fetchData();
   },[])

   const fetchData =async()=>{
     await fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then(result => setUser(result))
   };
  return (
    <>
    <table  style={{ width:"100%" , border: "2px solid gray" }}>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>address</th>
      </tr>
      
    </thead>

    <tbody >
        
         { user.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>

            </tr>
          ))}
        
        
      </tbody>
   </table>
   </>
  )
}

export default Demo