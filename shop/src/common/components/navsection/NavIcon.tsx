import { NavIconWrapper, NavIconStyle, CountProducts } from "@/common/components/navsection/style";
import { useEffect, useState } from "react";

interface NavIconProps {
    icon: string;
    link: string;
    alt: string;
};

const NavIcon = ({ icon, link, alt}: NavIconProps) => {
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            console.log('23')

            if (event.key === 'cart') {
                console.log('23')
                setItemCount(event.newValue ? JSON.parse(event.newValue).lenght : itemCount);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // return () => {
        //     window.removeEventListener('storage', handleStorageChange);
        // };
    },  []);

    return (
        <NavIconWrapper to={link}>
            <NavIconStyle src={icon} alt={alt}/>
            {itemCount > 0 && (
                <CountProducts>
                    {itemCount}
                </CountProducts>
            )}
        </NavIconWrapper>
    );
};

export default NavIcon;