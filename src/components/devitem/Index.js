import React from 'react';

import './Style.css';

function DevItem({dev}){

    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_usename}`}>Acessar perfil do GIT</a>
            </header>
         </li>       
    );

}

export default DevItem;