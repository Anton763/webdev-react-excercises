import React from 'react';
import   './index.css';

function WeatherWidget({city,precipitation,temperature,wind,humidity}) {

  return (
    <div className="widget">
      <div className="widget-item">
        <p className="widget-item__key">Город: </p>
        <span className="widget-item__value">{city}</span>
      </div>
      <div className="widget-item">
        <p className="widget-item__key">Осадки: </p>
        <span className="widget-item__value">{precipitation}</span>
      </div>
      <div className="widget-item">
        <p className="widget-item__key">Температура: </p>
        <span className="widget-item__value">{temperature}</span>
      </div>
      <div className="widget-item">
        <p className="widget-item__key">Скорость ветра: </p>
        <span className="widget-item__value">{wind}</span>
      </div>
      <div className="widget-item">
        <p className="widget-item__key">Влажность: </p>
        <span className="widget-item__value">{humidity}</span>
      </div>
    </div>
  );
}
export default WeatherWidget;