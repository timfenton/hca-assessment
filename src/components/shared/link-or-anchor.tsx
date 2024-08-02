import { Link } from "react-router-dom";

interface LinkOrAnchorProps {
    routeOrLink: string;
    children: React.ReactNode;
    ariaLabel?: string;
    className?: string;
}

const LinkOrAnchor: React.FC<LinkOrAnchorProps> = ({children, routeOrLink, ariaLabel, className}): React.ReactElement => {
    const isRoute = !routeOrLink.startsWith('http');

    if (isRoute) {
        return (
            <Link to={routeOrLink} className={className} aria-label={ariaLabel}>
                {children}
            </Link>
        );
    } else {
        return (
            <a href={routeOrLink} className={className} aria-label={ariaLabel}>
                {children}
            </a>
        );
    }
}

export default LinkOrAnchor;