import Link from 'next/link'

function HomePage() {
  return (
    <div>
      Welcome to Next.js!

      <img src="/images/avatar.png" />

      <ul>
        <li>
          <Link href="/sobre">
            <a>Ir para a /sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
//tag Link permite o comportamento de SPA, só muda o trecho que precisa mudar
export default HomePage
