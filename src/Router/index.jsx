import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import SystemApp from "../Pages/SystemApp";
import Example from "../Pages/SystemApp/ExampleForm";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: SystemApp,
      },
      {
        path: "Example",
        Component: Example,
      },
    ],
  },
]);

export default Routes;
