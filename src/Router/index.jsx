import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import SystemApp from "../Pages/SystemApp";
import Form from "../Pages/SystemApp/Form";

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
        path: "form/:name",
        Component: Form,
      },
    ],
  },
]);

export default Routes;
