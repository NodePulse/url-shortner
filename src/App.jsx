import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Link from "./pages/Link";
import Auth from "./pages/Auth";
import Redirect from "./pages/Redirect";
import UrlProvider from "./context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <Redirect />,
      },
    ],
  },
]);

function App() {
  return <UrlProvider>
    <RouterProvider router={router}></RouterProvider>
  </UrlProvider>;
}

export default App;
