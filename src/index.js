import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import Oriental from "./Components/Oriental";
import Bakery from "./Components/Bakery";
import Elmoled from "./Components/Elmoled";
import Yamesh from "./Components/Yamesh";
import Gateax from "./Components/Gateax";
import Search from "./Components/Search";
import User from "./Components/User";
import CartPage from "./Components/CartPage";
import Register from "./Components/Register";
import Menu2 from "./Components/Menu2";
import ContineuShiping from "./Components/ContineuShiping";
import Thanks from "./Components/Thanks";
import ThanksRegisteration from "./Components/ThanksRegisteration";
import NewAccount from "./Components/NewAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "oriental",
    element: <Oriental />
  },
  {
    path: "bakery",
    element: <Bakery />
  },
  {
    path: "elmoled",
    element: <Elmoled />
  },
  {
    path: "yamesh",
    element: <Yamesh />
  },
  {
    path: "gateax",
    element: <Gateax />
  },
  {
    path: "search",
    element: <Search />
  },
  {
    path: "user",
    element: <User />
  },
  {
    path: "cart",
    element: <CartPage />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "menu",
    element: <Menu2 />
  },
  {
    path: "continue-shiping",
    element: <ContineuShiping />
  },
  {
    path: "thanks",
    element: <Thanks />
  },
  {
    path: "ths-reg",
    element: <ThanksRegisteration />
  },
  {
    path: "new-acc",
    element: <NewAccount />
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);