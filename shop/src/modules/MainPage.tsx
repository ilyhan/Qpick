import { Outlet } from "react-router-dom";
import { Container } from "@/common/styles/GlobalStyle";
import NavSection from "@/common/components/navsection/NavSection";
import Footer from "@/common/components/footer/Footer";

const MainPage = () => {
    return (
        <Container>
            <NavSection />
            <Outlet />
            <Footer />
        </Container>
    )
};

export default MainPage;