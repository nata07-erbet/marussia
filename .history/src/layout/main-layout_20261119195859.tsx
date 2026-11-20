import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";


function MainOutlet () {
    return (
        <SamplePage>
            <Header />
            <Outlet />
            <F
        </SamplePage>
    );
}

export { MainOutlet }