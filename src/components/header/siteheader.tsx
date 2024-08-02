
import SiteLogo from './logo-white';
import SiteNavigation from './sitenavigation';

const SiteHeader: React.FC = (): React.ReactNode => {
    return (
        <nav className="bg-hca-accent-1 p-3 flex justify-between items-center w-full text-sm h-16">
            <div id="logo" className='flex items-center w-2/12'>
                <SiteLogo />
            </div>
            <SiteNavigation />
        </nav>
    );
};

export default SiteHeader;
