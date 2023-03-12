import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}>
          Faq
        </Route>
        <Route path="contact" element={<Contact />}>
          Contact
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
