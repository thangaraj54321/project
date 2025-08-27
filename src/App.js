import { useState } from "react";
import Square from "./Square";

function App() {
   const [colorValues,setColorValues] =useState('')
   const [hexValues,setHexValues] = useState('')
   const [isDarkText,setIsDarkText] =useState(true)






  return (
  <div className="App">
    <squre 
     colorValues={colorValues}
     hexValues={hexValues}
     isDarkText={isDarkText}
    />
    <input 
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
