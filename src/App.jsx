import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    if (temperatureValue < 30) {
      const newTemperature = temperatureValue + 1
      setTemperatureValue(newTemperature);

      if (newTemperature >= 15) {
        setTemperatureColor('hot');
      }
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue > -30) {
          const newTemperature = temperatureValue - 1
      setTemperatureValue(newTemperature);

      if (newTemperature <= 15) {
        setTemperatureColor('cold');
      }
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}ºC</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
}

export default App;
