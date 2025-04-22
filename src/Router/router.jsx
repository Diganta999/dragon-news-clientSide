import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import News from "../Maincontent/News";

// You need BOTH "/category" and "/category/:id"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "category", // ✅ this handles "/category"
        element: <h2 className="mt-10 text-xl text-center">Please select a category.</h2>,
      },
      {
        path: "category/:id", // ✅ this handles "/category/:id"
        element: <News />,
        loader: () => fetch('/news.json'),
 // ✅ Correct path for public folder
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
]);

export default router;
