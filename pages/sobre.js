function SobrePage() {
  return (
    <div>
      Você está na página sobre

      <ul>
        <li>
          <a href="/">Ir para a Home</a>
        </li>
      </ul>
    </div>
  )
}
//como aqui não tem a tag Link (assim como no "index.js", ele da um refresh na página toda, ou seja = mais lentidão)
export default SobrePage;
