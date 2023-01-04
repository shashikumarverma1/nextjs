import {useRouter} from "next/router"
import Nav from "../../componenet/Nav"
import Link from "next/link"
export async function getStaticPaths() {
  const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data=await res.json()
   const paths=data.map((e)=>{
    return {
      params :{ id :e.id.toString() }
    }
   })

  return {
    paths  ,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps=async(context)=>{
 const id=context.params.id ;
 const  res=await  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 const data=await res.json() ;
 return {
  props:{
    data
  }
 }
}

const pageNo = ({data}) => {
    const router=useRouter()
    const pageno=router.query.id
//  console.log(data)
 
 
  return (
    <div>
      <Nav/>
        <div className="text-center bg-green-200 p-2 h-24">
          <h1>name : {data.name}</h1>
          <h2>email : {data.email}</h2>

        </div>
 <span style={{color:"red" , marginLeft:"40vw" , backgroundColor:"aqua" , padding:20, marginTop:40 , borderRadius:"20%"}}><Link href="/">
   Go back to Home</Link></span>
    </div>
  )
}

export default pageNo