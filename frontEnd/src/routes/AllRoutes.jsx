import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
export const allRoutes = [
  { path: "/signup", element: <SignUp />, secure: false },
  { path: "/signin", element: <SignIn />, secure: false },
  { path: "/", element: <h1>shubham</h1>, secure: true },
];
