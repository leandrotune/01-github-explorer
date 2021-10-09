import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]) // esse estado vai amarzanar uma lista de repositórios 

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos') // busca a API de repositórios 
        .then(Response => Response.json())                    // converter esse dados em arquivo json
        .then(data => setRepositories(data))                  // mostra esses repositórios
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}