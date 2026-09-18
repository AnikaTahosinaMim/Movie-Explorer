import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import MovieListing from "./components/MovieListing.jsx";
import Hero from "./components/Hero.jsx";
import Movies from "./components/movies.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component : Hero,
      },
      {
        path: "/MovieListing",
        Component: MovieListing,
      },
      {
        path: "/movies",
        Component : Movies,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
