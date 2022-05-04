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
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cat1" element={<Cat1 />} />
        <Route path="cat2" element={<Cat2 />} />
        <Route path="cat3" element={<Cat3 />} />
        <Route path="gall" element={<Gall />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);