import { useState } from 'react'
import Converter from './components/TempConverter';
import Thermostat from './assets/thermostat.png'
import Convert from './assets/convert.png'
import './App.css'

function App() {
  const [celsius, setCelsius] = useState('');
  const [farenheit, setFarenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const val = e.target.value;
    setCelsius(val);
    setFarenheit(val === '' ? '' : ((val * 9/5) + 32).toFixed(2));
  };

  const handleFarenheitChange = (e) => {
    const val = e.target.value;
    setFarenheit(val);
    setCelsius(val === '' ? '' : ((val - 32) * 5/9).toFixed(2));
  };

  return (
    <>
      <Converter
        resultCelsius={celsius}
        resultFarenheit={farenheit} 
        image={Thermostat}
        symbol={Convert}
        onCelsiusChange={handleCelsiusChange}
        onFarenheitChange={handleFarenheitChange}
      />
    </>
  )
}

export default App