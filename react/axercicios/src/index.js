import React from "react";
import ReactDOM from 'react-dom'

import Saudacao from "./componentes/Saudacao";

ReactDOM.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João" />
  </div>,
  document.getElementById("root"),
);
