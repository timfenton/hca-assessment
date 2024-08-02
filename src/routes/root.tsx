import { Outlet } from "react-router-dom";
import SiteBanner from "../features/banner/sitebanner";
import SiteHeader from "../components/header/siteheader";
import SiteFooter from "../components/footer/footer";

const RootLayout: React.FC = (): React.ReactNode => {
    return (
        <div className="flex flex-col flex-shrink-0 items-center">
            <SiteHeader />
            <SiteBanner />
            <Outlet />
            <SiteFooter />
        </div>
    );
}

export default RootLayout;