import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";
import { Footer } from "../components/footer";
import { useGetProfileQuery }

function MainOutlet () {
   

    return (
        <SamplePage>
            <Header {is}/>
            <Outlet />
            <Footer />
        </SamplePage>
    );
}

export { MainOutlet }