import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Cat1 from "./routes/cat1";
import Cat2 from "./routes/cat2";
import Cat3 from "./routes/cat3";
import Gall from "./routes/gall";
import Contact from "./routes/contact";

const rootElement = document.getElementById("root");
render(
  <App/>,
  rootElement
);