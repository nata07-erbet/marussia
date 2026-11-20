import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";
import { Footer } from "../components/footer";
import { usePostLoginMutation } from '../services/auth-api';

function MainOutlet () {
   

    return (
        <SamplePage>
            <Header />
            <Outlet />
            <Footer />
        </SamplePage>
    );
}

export { MainOutlet }