import { Link } from "react-router-dom";

interface LinkOrAnchorProps {
    routeOrLink: string;
    children: React.ReactNode;
    className?: string;
}

const LinkOrAnchor: React.FC<LinkOrAnchorProps> = ({children, routeOrLink, className}): React.ReactElement => {
    const isRoute = !routeOrLink.startsWith('http');

    if (isRoute) {
        return (
            <Link to={routeOrLink} className={className}>
                {children}
            </Link>
        );
    } else {
        return (
            <a href={routeOrLink} className={className}>
                {children}
            </a>
        );
    }
}

export default LinkOrAnchor;