import MainPage from "@/modules/MainPage";
import Cart from "@/modules/cart/Cart";
import Catalog from "@/modules/catalog/Catalog";
import Wishlist from "@/modules/wishlist/Wishlist";
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
          <Route path="catalog" element={<Catalog/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="wishlist" element={<Wishlist/>} />
        </Route>
        <Route path="*" element={<Navigate to="qpick/catalog" replace />} />
      </>
    )
  );

  return (
    <RouterProvider router={shopProvider}/>
  );
}
