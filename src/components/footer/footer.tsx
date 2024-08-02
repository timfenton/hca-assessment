import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteLogo from "../header/logo-white";
import LinkOrAnchor from "../shared/link-or-anchor";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SiteFooter: React.FC = (): React.ReactNode => {
    return (
        <footer className="w-full">
            <div className="flex flex-row justify-center w-full bg-white mt-10">
                <div className="flex flex-row w-11/12 md:w-1/2 p-5 text-sm space-x-8 md:space-x-20">
                    <div className="flex flex-col w-1/4" >
                        <SiteLogo theme="dark" className="w-full -translate-x-4 my-5" />
                        <div className="flex flex-col my-5">
                            <span>HCA Houston Healthcare</span>
                            <span>3737 Buffalo Speedway</span>
                            <span>Suite 1400</span>
                            <span>Houston, TX 77098</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-1/3 md:w-1/4" >
                        <span>About Us</span>
                        <div className="flex flex-col my-5 underline text-slate-900 space-y-1 md:space-y-2">
                            <LinkOrAnchor routeOrLink="#">About HCA Houston</LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#">Phone Directory</LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#">Maps & Directions</LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#">Media Center</LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#">Contact Us</LinkOrAnchor>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-1/3 md:w-1/4" >
                        <span>Follow Us</span>
                        <div className="flex flex-col md:flex-row my-5 text-4xl space-y-2 md:space-y-0 md:space-x-3">
                            <LinkOrAnchor routeOrLink="#" ariaLabel="Facebook"><FontAwesomeIcon icon={faFacebook} /></LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#" ariaLabel="Instagram"><FontAwesomeIcon icon={faInstagram} /></LinkOrAnchor>
                            <LinkOrAnchor routeOrLink="#" ariaLabel="Twitter"><FontAwesomeIcon icon={faTwitter} /></LinkOrAnchor>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center w-full bg-zinc-900 relative text-white">
            <div className="flex flex-row w-11/12 md:w-1/2 p-5">
                <div className="flex flex-col w-1/3" >
                    <span className="text-xs text-gray-400">Copyright 1999-2021 <LinkOrAnchor routeOrLink="#" className="text-white underline">C-HCA, Inc.</LinkOrAnchor>; All rights reserved.</span>
                </div>
                <div className="relative w-2/3 text-xs whitespace-pre-wrap text-right">
                    <LinkOrAnchor routeOrLink="#">Notice of Privacy Practices</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Terms & Conditions</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Notice at Collections</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Do Not Sell My Personal Information</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Social Media Policy</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Acceptable Use Policy</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">HCA Nondiscrimination Notice</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Accessibility</LinkOrAnchor> | &nbsp;
                    <LinkOrAnchor routeOrLink="#">Responsible Disclosure</LinkOrAnchor>
                </div> 
            </div>
        </div>
        </footer>
    );
}

export default SiteFooter;