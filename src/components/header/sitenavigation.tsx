import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import QuickSearch from "../../features/search/quick-search";

const SiteNavigation: React.FC = (): React.ReactNode => {
    return ( 
    <div className="flex items-center space-x-5 mx-3 text-white text-base">
        <a href="/">
            <FontAwesomeIcon icon={faHouse} />
        </a>
        <a href="/#">
            My Health Resources
        </a>
        <a href="/contact">
            Specialties
        </a>
        <a href="/#">
            Locations
        </a>
        <a href="/#">
            Patients & Visitors
        </a>
        <a href="/#">
            Careers
        </a>
        <a href="/#">
            About Us
        </a>
        <a href="/#">
            Find A Doctor
        </a>
        <a href="/#">
            Manage Your Account
        </a>
        <a href="/#">
            MyHealthOne
        </a>
        <a href="/#">
            ...
        </a>
        <QuickSearch className="w-24 rounded-sm overflow-hidden" />
    </div>
    );
}

export default SiteNavigation;