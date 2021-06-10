import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <WeatherWidget city="Йошкар-Ола" precipitation="Дождливо" temperature="+30" wind="20m/s" humidity="50%"/>
      <WeatherWidget city="Йошкар-Ола" precipitation="Дождливо" temperature="+30" wind="20m/s" humidity="50%"/>
      <WeatherWidget city="Йошкар-Ола" precipitation="Дождливо" temperature="+30" wind="20m/s" humidity="50%"/>
    </div>
  );
}

export default App;
