import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";
import SystemApp from "@/Pages/System";
// import Form from "@/Pages/System/Form"; //TODO: This is a Example how are the Styles from ALL
import DashBoard from "@/Pages/Dashboard";
import Login from "@/Pages/Login";
import Form from "@/Pages/System/Form";

import Auth from "./Auth";

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
        path: "/form/:name",
        Component: Form,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/dashboard",
        element: (
          <Auth>
            <DashBoard />
          </Auth>
        ),
      },
    ],
  },
]);

export default Routes;
