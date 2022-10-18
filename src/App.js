import React from "react";
import ComponenteApi from "./Componentes/ComponenteApi/ComponenteApi";


class App extends React.Component {

  render() {
    return(
      <div className="container row m-2 justify-content-center align-items-center">
        <ComponenteApi/>
      </div>
    );
  }
}

export default App;