import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { WeatherProvider } from "./context/WeatherContext.jsx";

// Lazy imports for route components
const Layout = lazy(() => import("./Layout.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <p className="text-xl">Loading app...</p>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </WeatherProvider>
  </StrictMode>
);
