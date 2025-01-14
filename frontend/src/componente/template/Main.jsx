import React from "react";
import './Main.css'
import Header from'./Header'

const componente = props => (
     <React.Fragment>
        <Header {...props} />
        <main className="conteudo container-fluid">
          <div className="p-3 mt-3">
            {props.children}
          </div>
        </main>  
     </React.Fragment>
);

export default componente;