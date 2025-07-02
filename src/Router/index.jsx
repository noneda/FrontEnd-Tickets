import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import SystemApp from "../Pages/System";
// import Form from "../Pages/System/Form"; //TODO: This is a Example how are the Styles from ALL
import DashBoard from "../App/Dashboard";
import Login from "../Pages/Login";
import HelpDesk from "../Pages/System/HelpDesk";

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
        path: "/mesa-de-ayuda",
        Component: HelpDesk,
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
