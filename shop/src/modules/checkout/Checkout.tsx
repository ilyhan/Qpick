import {
    CheckoutWrapper,
    CheckoutTitle,
    CheckoutMain,
    CheckoutInfo
} from "@/modules/checkout/style";
import Handover from "@/modules/checkout/components/handover/Handover";
import { useState } from "react";
import ProductList from "@/modules/checkout/components/productlist/ProductList";
import AccessibleStores from "@/modules/checkout/components/shopsChoose/AccessibleStores";
import TotalSideBar from "@/common/components/sidebar/TotalSideBar";
import UserForm from "@/modules/checkout/components/data/UserForm";
import AddressForm from "@/modules/checkout/components/delivery/AddressForm";

const Checkout = () => {
    const [selectedTab, setSelectedTab] = useState<'Pickup' | 'Delivery'>('Pickup');

    return (
        <CheckoutWrapper>
            <CheckoutTitle>Оформление заказа</CheckoutTitle>

            <CheckoutMain>
                <CheckoutInfo>
                    <UserForm/>

                    <Handover
                        selectedTab={selectedTab}
                        onSwap={setSelectedTab}
                    />

                    {selectedTab === 'Pickup' && <AccessibleStores />}
                    {selectedTab === 'Delivery' && <AddressForm/>}

                    <ProductList />
                </CheckoutInfo>

                <TotalSideBar
                    price={1234}
                    text="Купить все"
                />
            </CheckoutMain>
        </CheckoutWrapper>
    )
};

export default Checkout;