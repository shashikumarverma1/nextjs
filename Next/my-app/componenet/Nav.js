import React from 'react'
import Link from "next/link"
const product = () => {
  return (
    <div className='m-5'>
       <ul style={{display:"flex"}}>
      <li className='m-2 w-24'>
        <Link className="bg-green-800 p-2 rounded m-2 text-aqua-800" href="/home">Home</Link>
      </li >
      <li className='m-2 w-24'>
        <Link className="bg-blue-800 p-2 rounded m-2" href="/about">about</Link>
      </li>
      <li className='m-2 w-24'>
        <Link className="bg-blue-800 p-2 rounded m-2" href="/blog">blog</Link>
      </li>
      <li className='m-2 w-24'>
        <Link className="bg-blue-800 p-2 rounded m-2" href="/blog/blogs">blog/blog1</Link>
      </li>
      <li className='m-2'>
      <Link className="bg-blue-800 p-2 rounded m-2" href="/blog/blog2">blog/blog2</Link>
      </li>
    </ul>
    </div>
  )
}

export default product