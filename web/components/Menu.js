import Link from 'next/link'

export function Menu() {
    return (
    <>
      <Link href="/home" legacyBehavior>
        <a>Home</a>
      </Link>
      &nbsp;/&nbsp;
      <Link href="/resume" legacyBehavior>
        <a>My Resume</a>
      </Link>
      &nbsp;/&nbsp;
      <Link href="/leverage" legacyBehavior>
        <a>Leverage Information Systems</a>
      </Link>
      &nbsp;/&nbsp;
      <Link href="/funProjects" legacyBehavior>
        <a>Fun Projects</a>
      </Link>
    </>
    )
}
