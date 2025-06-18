import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     Component: Layout,
  //     children: [
  //       {
  //         index: true,
  //         element: Home,
  //       },
  //     ],
  //   },
  {
    path: "/",
    Component: Layout,
  },
]);

export default Routes;
