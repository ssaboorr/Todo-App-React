import reactDom from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import theme from "./theme";

reactDom.render(
    <>
  <ColorModeScript initialColorMode={theme.config.initialColorMode}/> 
  <App/>
    </>
    
    , document.querySelector("#root"));
