import "./styles/styles.css"
import freeCodeCampLogo from "./images/freecodecamp-logo.png"
import Counter from "./components/Counter.js"
import Button from "./components/Button.js"


function App() {
  const manageClick = () =>{
    console.log("click")
  }
  const resetCount = () => {
    console.log("reset")
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
            clickAmount="5"
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
