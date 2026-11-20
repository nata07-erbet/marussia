import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";
import { Footer } from "../components/footer";
import { useGetProfileQuery } from '../services/user-api';

function MainOutlet () {
   const { data, isLoading, error } = useGetProfileQuery()

    return (
        <SamplePage>
            <Header {is}/>
            <Outlet />
            <Footer />
        </SamplePage>
    );
}

export { MainOutlet }