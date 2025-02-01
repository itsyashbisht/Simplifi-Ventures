// CUSTOM IMPORTS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Studio from "./Pages/Studio";
import AppLayout from "./AppLayout";
import Resources from "./Pages/Resources";

// REACT-ROUTING
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
