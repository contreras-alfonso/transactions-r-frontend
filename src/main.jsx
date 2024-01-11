import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { TransactionLayout } from "./layouts/TransactionLayout";
import { TransactionsHome } from "./pages/TransactionsHome";
import { TransactionCustomer } from "./pages/TransactionCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TransactionLayout />,
    children: [
      {
        index: true,
        element: <TransactionsHome />,
      },
      {
        path: 'transactions/customer/:id',
        element: <TransactionCustomer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
