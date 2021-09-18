import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
      </div>
      <div>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
