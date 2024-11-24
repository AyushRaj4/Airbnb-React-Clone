import { pageIcons } from "./navData";
import { HomeLayout, IndexPage, OtherPages, Wishlists, Login } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const pages = pageIcons.map(({ title }, index) => {
    return {
      path: index ? title.toLowerCase() : "/",
      element: index ? <OtherPages /> : <IndexPage />,
      index: index ? false : true,
    };
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <h1>jhbh </h1>,
      children: [
        ...pages,
        {
          path: "/wishlists",
          element: <Wishlists />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
