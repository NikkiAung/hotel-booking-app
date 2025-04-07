import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloClient.ts";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./components/pages/HomePage.tsx";
import DetailPage from "./components/pages/DetailPage.tsx";
import RegisterPage from "./components/pages/RegisterPage.tsx";
import LoginPage from "./components/pages/Login.tsx";
import { Toaster } from "@/components/ui/sonner";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import DashboardPage from "./components/pages/DashboardPage.tsx";
import ProtectedPage from "./components/pages/ProtectedPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/room/:id",
        element: <DetailPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedPage>
            <ProfilePage />
          </ProtectedPage>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedPage roles={["admin"]}>
            <DashboardPage />
          </ProtectedPage>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </ApolloProvider>
  </StrictMode>
);
