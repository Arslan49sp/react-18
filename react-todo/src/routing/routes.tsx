import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserPage from "./UserPage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "./LoginPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default routes;
