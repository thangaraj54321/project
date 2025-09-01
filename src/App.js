import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

function App() {
   const [colorValues,setColorValues] =useState('')
   const [hexValues,setHexValues] = useState('')
   const [isDarkText,setIsDarkText] =useState(true)
  return (
  <div className="App">
    <Square 
     colorValues={colorValues}
     hexValues={hexValues}
     isDarkText={isDarkText}
    />
     <Input
       colorValues={colorValues}
       setColorValues={setColorValues}
       setHexValues={setHexValues}
       isDarkText={isDarkText}
       setIsDarkText={setIsDarkText}
     />

  </div>

  );
}

export default App;
