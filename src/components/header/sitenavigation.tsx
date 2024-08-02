import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import QuickSearch from "../../features/search/quick-search";
import LinkOrAnchor from "../shared/link-or-anchor";

const SiteNavigation: React.FC = (): React.ReactNode => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Menu Button for md and smaller screens */}
            <div className="flex items-center justify-between md:hidden mx-3 text-white text-base space-x-3">
                <LinkOrAnchor routeOrLink="/" aria-label="Home">
                    <FontAwesomeIcon icon={faHouse} />
                </LinkOrAnchor>
                <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Open Menu">
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex flex-col items-start space-y-5 p-5 text-lg">
                    <LinkOrAnchor routeOrLink="/" aria-label="Home">
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/my-health">
                        My Health Resources
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/specialties">
                        Specialties
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/locations">
                        Locations
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/patients-and-visitors">
                        Patients & Visitors
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/careers">
                        Careers
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/about">
                        About Us
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/find-a-doctor">
                        Find A Doctor
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/manage">
                        Manage Your Account
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/my-health-one">
                        MyHealthOne
                    </LinkOrAnchor>
                    <LinkOrAnchor routeOrLink="/more">
                        ...
                    </LinkOrAnchor>
                    <QuickSearch className="w-full rounded-sm overflow-hidden mt-3" />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-5 mx-3 text-white text-base">
                <LinkOrAnchor routeOrLink="/" aria-label="Home">
                    <FontAwesomeIcon icon={faHouse} />
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/my-health">
                    My Health Resources
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/specialties">
                    Specialties
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/locations">
                    Locations
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/patients-and-visitors">
                    Patients & Visitors
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/careers">
                    Careers
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/about">
                    About Us
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/find-a-doctor">
                    Find A Doctor
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/manage">
                    Manage Your Account
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/my-health-one">
                    MyHealthOne
                </LinkOrAnchor>
                <LinkOrAnchor routeOrLink="/more">
                    ...
                </LinkOrAnchor>
                <QuickSearch className="w-24 rounded-sm overflow-hidden" />
            </div>
        </div>
    );
}

export default SiteNavigation;
