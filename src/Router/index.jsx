import { createBrowserRouter } from "react-router-dom";

import ViewDashBoard from "@/Context/Dashboard";
import DashBoard from "@/Pages/Dashboard";
import ViewAuthContext from "@/Context";
import OneItem from "@/Assets/OneItem";
import Form from "@/Pages/System/Form";
import SystemApp from "@/Pages/System";
import Login from "@/Pages/Login";
import Layout from "@/Layout";
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
          <ViewAuthContext>
            <ViewDashBoard>
              <Auth>
                <DashBoard />
              </Auth>
            </ViewDashBoard>
          </ViewAuthContext>
        ),
      },
      {
        path: "/dashboard/ticket/",
        Component: OneItem,
      },
    ],
  },
]);

export default Routes;
