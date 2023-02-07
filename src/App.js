import "./styles/styles.css"
import freeCodeCampLogo from "./images/freecodecamp-logo.png"
import Counter from "./components/Counter.js"
import Button from "./components/Button.js"
import { useState } from "react"


function App() {

  const [clickAmount, setClickAmount] = useState(0);

  const manageClick = () =>{
    setClickAmount(clickAmount+1)
  }
  const resetCount = () => {
    setClickAmount(0)
  }
  return (
    <div className="App">
        <div className="freecodecamp-logo-container">
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt="Free code camp logo"
          />
        </div>
        <div className='main-container'>
          <Counter 
            clickAmount={clickAmount}
          />
          <Button 
            text= "Click"
            isClick= {true}
            manageClick={manageClick}/>
          <Button 
            text= "Reset"
            isClick= {false}
            manageClick={resetCount}/>
        </div>
    </div>
  );
}

export default App;
