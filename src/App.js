import './App.css';
import "./styles/styles.css"
import freeCodeCampLogo from "./images/freecodecamp-logo.png"

function App() {
  return (
    <div className="App">
        <div className="freecodecamp-logo-container">
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt="Free code camp logo"
          />
        </div>
    </div>
  );
}

export default App;
