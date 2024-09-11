import {
    CheckoutWrapper,
    CheckoutTitle,
} from "@/modules/checkout/style";
import Handover from "@/modules/checkout/components/handover/Handover";
import { useState } from "react";
import ProductList from "@/modules/checkout/components/productlist/ProductList";
import MapButton from "@/modules/checkout/components/map/MapButton";

const Checkout = () => {
    const [selectedTab, setSelectedTab] = useState<'Pickup' | 'Delivery'>('Pickup');

    return (
        <CheckoutWrapper>
            <CheckoutTitle>Оформление заказа</CheckoutTitle>

            <Handover
                selectedTab={selectedTab}
                onSwap={setSelectedTab}
            />

            {selectedTab === 'Pickup' && <MapButton/>}
            {selectedTab === 'Delivery' && <div>Delivery</div>}

            <ProductList/>
        </CheckoutWrapper>
    )
};

export default Checkout;