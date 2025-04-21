import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/news",
        element: <h1>News</h1>,
    }
  ]);
  export default router;