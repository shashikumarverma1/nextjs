import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
const pagenotfound = () => {
    const router = useRouter()
     useEffect(()=>{
      setTimeout(()=>{  router.push("/")},5000)
     },[])
  return (
    <div className="m-5">404
        <Link className="bg-blue-800 p-2 rounded" href="/">back to home</Link>
        <button className="text-blue-800" >go back to home</button>
    </div>
  )
}

export default pagenotfound