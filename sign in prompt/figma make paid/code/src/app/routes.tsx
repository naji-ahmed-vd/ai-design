import { createBrowserRouter } from "react-router";
import SignIn from "./components/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
]);
