import React from "react";
import ReactDOM from 'react-dom'

import  Pai from './componentes/Pai'
import Filho from "./componentes/Filho";

ReactDOM.render(
  <div>
    <Pai nome="PAulo" sobrenome="Silva">
      <Filho nome="PEdro" sobrenome="Silva" />
      <Filho nome="Jão" sobrenome="Silva" />
      <Filho nome="Debs" sobrenome="Silva" />
    </Pai>
  </div>,
  document.getElementById("root"),
);
