import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'http://github.com/unform/unform'
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]) // esse estado vai amarzanar uma lista de repositórios 

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos') // busca a API de repositórios 
        .then(Response => Response.json())                    // converter esse dados em arquivo json
        .then(data => setRepositories(data))                  // mostra esses repositórios
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}