import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserGit = async () => {
      const apiUrl = "https://api.github.com/users/PauloBumba";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar usuário do GitHub");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erro ao carregar os dados do GitHub:", error);
      }
    };

    fetchUserGit();
  }, []);

  return (
    <>
      {data ? (
        <div id='container'>
          <h1>Dados do GitHub</h1>
          <p>Nome: {data?.name}</p>
          <img src={data?.avatar_url} alt="Imagem do GitHub" />
          <p>Aspiração: {data?.bio}</p>
          <a href={data?.html_url} target="_blank" rel="noopener noreferrer">Clique aqui para ir ao GitHub</a>
          <p>Localização: {data?.location}</p>
          <p>Formação: {data?.company}</p>
        </div>
      ) : (
        <div>
          <p>Erro ao carregar os dados do GitHub</p>
        </div>
      )}
    </>
  );
}

export default App;
