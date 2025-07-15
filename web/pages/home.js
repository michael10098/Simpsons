import Link from 'next/link'

function HomePage() {
 return (
  <div>
   <h1>Welcome to the Simpsons script predictor!</h1>
   <Link href="/predictions" legacyBehavior>
    <a>View Simpsons Predictions</a>
   </Link>
  </div>
 )
}

export default HomePage