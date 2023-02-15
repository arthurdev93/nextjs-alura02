import Link from 'next/link'
import { useRouter } from 'next/router';

//o nome [id] do arquivo permite a geração de novas paginas de posts 

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Página de post!

      <ul>
        <li>
          <Link href="/">
            <a>Ir para a home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
