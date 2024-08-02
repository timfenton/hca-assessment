import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import QuickSearch from "../../features/search/quick-search";

const SiteNavigation: React.FC = (): React.ReactNode => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Menu Button for md and smaller screens */}
            <div className="flex items-center justify-between md:hidden mx-3 text-white text-base space-x-3">
                <a href="/">
                    <FontAwesomeIcon icon={faHouse} />
                </a>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex flex-col items-start space-y-5 p-5">
                    <a href="/" className="text-lg">
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </a>
                    <a href="/#" className="text-lg">
                        My Health Resources
                    </a>
                    <a href="/contact" className="text-lg">
                        Specialties
                    </a>
                    <a href="/#" className="text-lg">
                        Locations
                    </a>
                    <a href="/#" className="text-lg">
                        Patients & Visitors
                    </a>
                    <a href="/#" className="text-lg">
                        Careers
                    </a>
                    <a href="/#" className="text-lg">
                        About Us
                    </a>
                    <a href="/#" className="text-lg">
                        Find A Doctor
                    </a>
                    <a href="/#" className="text-lg">
                        Manage Your Account
                    </a>
                    <a href="/#" className="text-lg">
                        MyHealthOne
                    </a>
                    <a href="/#" className="text-lg">
                        ...
                    </a>
                    <QuickSearch className="w-full rounded-sm overflow-hidden mt-3" />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-5 mx-3 text-white text-base">
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
        </div>
    );
}

export default SiteNavigation;
