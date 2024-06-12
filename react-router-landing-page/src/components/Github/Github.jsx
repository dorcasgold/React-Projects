import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className='text-center m-4 bg-purple-800 text-emerald-100 p-4 text-3xl'>
      <h1>Github</h1>
      <p>name: {data[0].name}</p>
      <p>{data[0].username}</p>
      <p>{data[0].email}</p>
      <p>{data[0].phone}</p>
    </div>
  )
}
export default Github