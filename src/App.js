import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast'
import SevenDay from './Components/SevenDay/SevenDay'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
      </div>
      <div>
        <SevenDay />
      </div>
    </div>
  );
}

export default App;
