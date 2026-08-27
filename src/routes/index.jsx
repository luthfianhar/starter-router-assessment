import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../pages/Home";
import Santri from "../pages/Santri";
import SantriDetail from "../pages/SantriDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "santri",
        element: <Santri />,
      },
      {
        path: "santri/:id",
        element: <SantriDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;