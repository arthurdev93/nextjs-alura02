import Link from 'next/link'
import { useRouter } from 'next/router';

//o nome [id] do arquivo permite a geração de novas paginas de posts 

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Id do post atual: {router.query.id}
      <ul>
        <li>
          <Link href={`${router.query.id}/comentarios`}>
            <a>Ir para comentarios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
