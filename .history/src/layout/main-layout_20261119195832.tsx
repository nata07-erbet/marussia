import { SamplePage } from "../pages/sample-page";


function MainOutlet () {
    return (
        <SamplePage>
            <Header />
            <Outlet />
        </SamplePage>
    );
}

export { MainOutlet }