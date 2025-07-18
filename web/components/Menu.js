import Link from 'next/link'

export function Menu() {
    return (
    <>
      <Link href="/home" legacyBehavior>
        <a>Home   </a>
      </Link>
      <Link href="/predictions" legacyBehavior>
        <a>Predictions</a>
      </Link>
    </>
    )
}
