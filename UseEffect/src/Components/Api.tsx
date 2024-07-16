import React, { useEffect, useState } from "react";

export const Api: React.FC = () => {
    const [userData, setUserData] = useState<any>(null); // Estado para os dados do usuário buscados
    const [loading, setLoading] = useState(false); // Estado para o carregamento

    useEffect(() => {
        const fetchUser = async () => {
            const username = "PauloBumba";
            const url = `https://api.github.com/users/${username}`;
            try {
                setLoading(true);
                const response = await fetch(url);
                if (response.ok) {
                    throw new Error("Erro ao buscar o usuário");
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []); // useEffect é chamado apenas uma vez quando o componente é montado

    return (
        <>
            {loading ? (
                <p>Carregando...</p>
            ) : userData ? (
                <div>
                    <h2>Dados Do Usuário</h2>
                    <p>Nome: {userData.name}</p>
                    <p>
                        Blog: <a href={userData.blog}>{userData.blog}</a>
                    </p>
                    <p>
                        <img src={userData.avatar_url} alt="User Avatar" />
                    </p>
                </div>
            ) : (
                <p>Usuário não encontrado</p> // Mostrar mensagem se usuário não for encontrado
            )}
        </>
    );
};
