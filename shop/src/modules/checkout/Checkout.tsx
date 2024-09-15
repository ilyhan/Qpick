import {
    CheckoutWrapper,
    CheckoutTitle,
    CheckoutMain,
    CheckoutInfo
} from "@/modules/checkout/style";
import Handover from "@/modules/checkout/components/handover/Handover";
import ProductList from "@/modules/checkout/components/productlist/ProductList";
import AccessibleStores from "@/modules/checkout/components/shopsChoose/AccessibleStores";
import UserForm from "@/modules/checkout/components/data/UserForm";
import AddressForm from "@/modules/checkout/components/delivery/AddressForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SideBar from "@/modules/checkout/components/SideBar";

const Checkout = () => {
    const selectedTab = useSelector((state: RootState) => state.order.type);

    return (
        <CheckoutWrapper>
            <CheckoutTitle>Оформление заказа</CheckoutTitle>

            <CheckoutMain>
                <CheckoutInfo>
                    <UserForm />

                    <Handover />

                    {selectedTab === 'Pickup' && <AccessibleStores />}
                    {selectedTab === 'Delivery' && <AddressForm />}

                    <ProductList />
                </CheckoutInfo>

                <SideBar/>
            </CheckoutMain>
        </CheckoutWrapper>
    )
};

export default Checkout;