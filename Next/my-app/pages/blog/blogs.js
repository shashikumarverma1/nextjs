import React from 'react'
import Link from "next/link"
import Nav from "../../componenet/Nav"
import {useRouter} from "next/router"
export async function getStaticProps() {
     const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data=await res.json()
    // console.log(data)
     return {
    props: {
      data:data
    }, // will be passed to the page component as props
  }
}
const blog1 = ({data}) => {
  const router =useRouter()
  // const pageno=router.query.pageno
  // console.log(data)
  return (
    <div className='m-5'>
      <Nav/>
      blog1
      {
        data.map((e)=>{
          // console.log(e)
          return (
            <div key={e.id} className="rounded" onClick={()=>{
              // console.log(e)
            
            }}>
           <div  style={{display :"flex" , 
            backgroundColor:"aqua" ,
            margin :20 ,
            padding:10
            }} >
           <Link href={`/blog/${e.id}`} style={{display:"flex"}}> 
             <h1>{e.id}</h1>
              <h1>{e.name}</h1>
              <h1>{e.username}</h1>
             </Link>
           </div>
            </div>
          )
        })
      }
      </div>
  )
}

export default blog1