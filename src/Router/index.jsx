import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import SystemApp from "../Pages/System";
import Form from "../Pages/System/Form";
import DashBoard from "../App/Dashboard";
import Login from "../Pages/Login";

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
        path: "form",
        Component: Form,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "dashboard",
        Component: DashBoard,
      },
    ],
  },
]);

export default Routes;
