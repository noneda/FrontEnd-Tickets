import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./base.css";
import Routes from "@/Router";
import ViewGlobalContext from "@/Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ViewGlobalContext>
      <RouterProvider router={Routes} />
    </ViewGlobalContext>
  </StrictMode>
);
