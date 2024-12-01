import "./style.css";
import typescriptLogo from "./assets/typescript.svg";
import jsLogo from "./assets/js-logo.png";
import { exampleFunction } from "./exampleFunction.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="${jsLogo}" class="logo" alt="Vite logo" />
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1 class="heading">Async JS • TS</h1>
    <h2><a href="https://www.youtube.com/@SimpleFrontendUA" class="sub-heading" target="_blank">Простий Фронтенд</a></h2>
    <div class="card">
      <button id="dummyButton" type="button">Click me</button>
    </div>
  </div>
`;

exampleFunction(document.querySelector<HTMLButtonElement>("#dummyButton")!);
