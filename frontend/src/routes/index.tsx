import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layouts/AppLayout";
import DashBoard from "../pages/Dashboard";
import Appointments from "../pages/Appointments";
import WorkOrder from "../pages/WorkOrder";
import Clients from "../pages/Clients";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import Settings from "../pages/Settings";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "/agenda",
        element: <Appointments />,
      },
      {
        path: "/ordens-de-servico",
        element: <WorkOrder />,
      },
      {
        path:"/clientes",
        element: <Clients />
      },
      {
        path: "/servicos",
        element: <Services />,
      },
      {
        path: "/produtos",
        element: <Products />,
      },
      {
        path: "/vendas",
        element: <Sales />,
      },
      {
        path: "/compras",
        element: <Purchases />,
      },
      {
        path: "/configuracoes",
        element: <Settings />,
      },
    ],
  },
]);