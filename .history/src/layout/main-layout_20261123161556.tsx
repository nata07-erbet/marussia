import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";
import { Footer } from "../components/footer";
import { useGetProfileQuery } from '../services/user-api';

function MainOutlet () {
   const { data: profileData, isLoading, error } = useGetProfileQuery();

    return (
        <SamplePage>
            <Header profileData={profileData}/>
            <Outlet textcon/>
            <Footer />
        </SamplePage>
    );
}

export { MainOutlet }