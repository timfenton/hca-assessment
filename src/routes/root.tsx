import { Outlet } from "react-router-dom";
import SiteBanner from "../features/banner/sitebanner";
import SiteHeader from "../components/header/siteheader";
import SiteFooter from "../components/footer/footer";

const RootLayout: React.FC = (): React.ReactNode => {
    return (
        <>
            <SiteHeader />
            <SiteBanner />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <SiteFooter />
        </>
    );
}

export default RootLayout;