import React from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';


function App() {
  return (
   <div id= "app" >
     <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GIT</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">  
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">         

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
          
            <div className="input-block">
              <label htmlFor="longetude">Longetide</label>
              <input name="longetude" id="longetude" required></input>
          </div>

         </div>

         <button type="submit">Salvar</button>
        </form>
     </aside>
     <main>
       <ul>
         <li className="dev-item">
            <header>
                <img src="" alt=""></img>
            </header>

         </li>
       </ul>

     </main>

   </div>
  );
}

export default App;
