import hcaLogoLight from '../../assets/hca-logo.svg'
import hcaLogoDark from '../../assets/hca-logo-dark.svg';
import { twMerge } from 'tailwind-merge';
import LinkOrAnchor from '../shared/link-or-anchor';

interface SiteLogoProps {
    routeOrLink?: string;
    theme?: 'dark' | 'light';
    className?: string;
}

const SiteLogo: React.FC<SiteLogoProps> = ({theme = 'light', routeOrLink = '/', className}): React.ReactNode => {
    const divClasses = twMerge("w-full", className);
    const logoSrc = theme === 'light' ? hcaLogoLight : hcaLogoDark;

    return (
        <>
            <LinkOrAnchor routeOrLink={routeOrLink}>
                <img src={logoSrc} alt="HCA Houston Healthcare logo" className={divClasses} />
            </LinkOrAnchor>
        </>
    );
}

export default SiteLogo;