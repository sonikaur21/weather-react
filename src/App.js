import WeatherSearch from "./WeatherSearch";
export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <h2>
        <WeatherSearch />
      </h2>{" "}
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/sonikaur21" target="_blank">
          Sonia Kaur
        </a>{" "}
        is{" "}
        <a href="https://github.com/sonikaur21/weather-react" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://weatherreactprojectsonia.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
