import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">Weather App</h1>
        <h2>
          <Weather defaultCity="tokyo" />
        </h2>{" "}
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sonikaur21"
            target="_blank"
            rel="noreferrer"
          >
            Sonia Kaur
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/sonikaur21/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weatherreactprojectsonia.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
