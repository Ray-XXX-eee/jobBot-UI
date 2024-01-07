import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./pages/Dashboard/components/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./pages/Dashboard/components/PostList";
import CreatePost from "./pages/Dashboard/components/CreatePost";
import Test from "./test/Test";
import PrivateRoute from "./pages/PrivateRoute";
import ContextProvider from "./store/AppContext";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/test", element: <Test /> },
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ContextProvider>
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      { path: "/post-job", element: <CreatePost /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
