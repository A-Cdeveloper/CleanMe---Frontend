import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "../ui/Layout";
//import ProtectedRoute from "../ui/ProtectedRoute";
import AddProblem from "../pages/AddProblem";
import Homepage from "../pages/Homepage";
import ImpressumPage from "../pages/ImpressumPage";
import SingleProblem from "../pages/SingleProblem";
import Notifications from "../ui/Notifications";
import EditProblem from "../pages/EditProblem";
import useAuth from "../context/useAuth";

//import PageNotFound from "../pages/PageNotFound";

const mainRouter = [
  // { path: "/login", element: <LoginPage /> },
  {
    element: (
      // <ProtectedRoute>
      <Layout />
      // </ProtectedRoute>
    ),
    children: [
      { path: "/", index: true, element: <Homepage /> },
      {
        path: "problems",
        children: [
          { path: ":id", element: <SingleProblem /> },
          { path: "add", element: <AddProblem /> },
          { path: "edit/:id", element: <EditProblem /> },
        ],
      },
      { path: "/impressum", element: <ImpressumPage /> },
    ],
    // errorElement: <PageNotFound />,
  },
];

const router = createBrowserRouter(mainRouter);

const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <>
      <RouterProvider router={router} />
      <Notifications />
    </>
  );
};

export default AppRouter;
