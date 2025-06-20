import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import KidsPage from "../Pages/KidsPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: KidsPage,
      },
    ],
  },
]);

export default Routes;
