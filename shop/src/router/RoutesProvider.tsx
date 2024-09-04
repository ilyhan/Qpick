import MainPage from "@/modules/MainPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
  const shopProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="qpick/" element={<MainPage/>}>
          <Route path="catalog" element={<div>dcsdcsdc234342<br/>sdcsdcsdc23d</div>} />
          <Route path="cart" element={<div>cart</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/reg" replace />} />
      </>
    )
  );

  return (
    <RouterProvider router={shopProvider}/>
  );
}
