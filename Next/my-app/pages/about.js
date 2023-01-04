import Nav from "../componenet/Nav"
import Image from "next/image"
import {bgaqua ,textred , m_2} from '../styles/Home.module.css'
const about = () => {
  
  return (
    <div className={`${m_2}`}>
        <Nav/>
      <h1 className={`${bgaqua}  ${textred} ` }>coclo</h1>
      <h1 className="">bg</h1>
      <Image src="/sk_verma.jpg" width="200" height="100" alt="sk"/>
    
      about</div>
  )
}

export default about