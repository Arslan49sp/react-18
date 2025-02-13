import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserPage from "./UserPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default routes;
