function Converter({resultCelsius, resultFarenheit, image, symbol, onCelsiusChange, onFarenheitChange}) {

  return (
    <div className="converter-container">
      <div className="temp-container">
        <h1 className="title-name">Temperature Converter</h1>
        <img src={image} alt="Thermostat" className="temp-image"></img>
      </div>
      <div className="celsius-container">
        <input 
            className="celsius-input" type="number"
            placeholder="Temperature in celsius"
            value={resultCelsius}
            onChange={onCelsiusChange}
        />
        <div className="celsius-symbol">°C</div>
      </div>
      <img src={symbol} alt="Convert Symbol" className="convert-symbol" />
      <div className="farenheit-container">
        <input 
            className="farenheit-input" type="number"
            placeholder="Temperature in farenheit"
            value={resultFarenheit}
            onChange={onFarenheitChange}
        />
        <div className="farenheit-symbol">°F</div>
      </div>
    </div>
				
  );
}

export default Converter;