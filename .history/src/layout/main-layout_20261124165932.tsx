import { Outlet } from "react-router";
import { Header } from "../components/header";
import { SamplePage } from "../pages/sample-page";
import { Footer } from "../components/footer";
import { useGetProfileQuery } from '../services/user-api';

function MainOutlet () {
   const { data } = useGetProfileQuery();

    return (
        <SamplePage>
            <Header profileData={profileData}/>
            <Outlet context={{ data }}/>
            <Footer />
        </SamplePage>
    );
}

export { MainOutlet }