import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
