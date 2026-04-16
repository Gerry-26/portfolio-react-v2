function App() {
  const projetos = [
    {
      titulo: 'Projeto 1',
      descricao:
        'Página desenvolvida em React com foco em organização de componentes e layout responsivo.',
    },
    {
      titulo: 'Projeto 2',
      descricao:
        'Aplicação com interface moderna, destacando boas práticas de estruturação visual.',
    },
    {
      titulo: 'Projeto 3',
      descricao:
        'Exemplo de projeto para apresentação de portfólio com visual limpo e profissional.',
    },
  ]

  return (
    <div className="pagina">
      <header className="hero">
        <p className="tag">Atividade de Migração para React</p>
        <h1>Seu Nome Aqui</h1>
        <p className="descricao">
          Este portfólio foi desenvolvido em React como parte da atividade prática de migração,
          apresentando uma estrutura moderna, responsiva e organizada em componentes.
        </p>
        <div className="acoes">
          <a href="#projetos" className="botao primario">Ver projetos</a>
          <a href="#contato" className="botao secundario">Contato</a>
        </div>
      </header>

      <main>
        <section className="secao sobre">
          <h2>Sobre mim</h2>
          <p>
            Escreva aqui uma breve apresentação sobre você, sua formação, suas habilidades e
            seus objetivos na área de tecnologia. Você pode personalizar esse texto do seu jeito.
          </p>
        </section>

        <section className="secao" id="projetos">
          <h2>Projetos</h2>
          <div className="grid-projetos">
            {projetos.map((projeto, index) => (
              <article className="card" key={index}>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao habilidades">
          <h2>Habilidades</h2>
          <div className="lista-habilidades">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>GitHub</span>
            <span>Vercel</span>
          </div>
        </section>

        <section className="secao contato" id="contato">
          <h2>Contato</h2>
          <p>Email: seuemail@exemplo.com</p>
          <p>GitHub: github.com/seu-usuario</p>
          <p>LinkedIn: linkedin.com/in/seu-perfil</p>
        </section>
      </main>
    </div>
  )
}

export default App
