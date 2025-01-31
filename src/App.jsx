import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./AppLayout";
import Team from "./Pages/Team";
import Studio from "./Pages/Studio";
import Resources from "./Pages/Resources";

const ROUTER = createBrowserRouter([
  {
    // PARENT ROUTE
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/studio",
        element: <Studio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={ROUTER} />;
}

export default App;
