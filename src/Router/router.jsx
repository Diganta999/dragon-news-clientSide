import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import News from "../Maincontent/News";
import SignInWithPass from "../Components/SignInWithPass/SignInWithPass";
import AllNews from "../Components/AllNews/AllNews";

// You need BOTH "/category" and "/category/:id"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/category", // ✅ this handles "/category"
        element: <AllNews />,
        loader: () => fetch('/news.json'), // ✅ Correct path for public folder
      },
      {
        path: "/category/:id", // ✅ this handles "/category/:id"
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
  {
    path: "*",
    element: <h1 className="mt-10 text-xl text-center">404 Not Found</h1>,  
  },
  {
    path:"/signin",
    element:<SignInWithPass></SignInWithPass>,
  }
  
]);

export default router;
