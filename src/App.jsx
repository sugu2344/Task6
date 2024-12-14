import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./components/Home";
import Cart from "./components/cart";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Navbar />,
      // loader: userloader;
      // hydrateFallBackElement:<div>Loading.....</div>
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "landingpage",
          element: <LandingPage />,
        },
      ],
    },
    // {
    //   path: "/Cart-Page",
    //   element: <Cart />,
    // },
  ];
  let router = createBrowserRouter(routes, {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
      v7_partialHydration: true,
      v7_startTransition: true,
    },
  });

  return (
    <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
  );
};

export default App;
