import Link from 'next/link'
import { Menu } from "../components/Menu.js"

function HomePage() {
 return (
  <div>
   <Menu/>
   <h1>Welcome to the Simpsons script predictor!</h1>
  </div>
 )
}

export default HomePage