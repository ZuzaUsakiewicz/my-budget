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
import Contact, { contactAction } from "./pages/Contact";
import FourOFour from "./pages/FourOFour";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareerError from "./pages/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}>
          Faq
        </Route>
        <Route path="contact" element={<Contact />} action={contactAction}>
          Contact
        </Route>
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<FourOFour />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
