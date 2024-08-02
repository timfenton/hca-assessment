import { twMerge } from "tailwind-merge";

interface ButtonBaseProps {
    buttonTheme: 'primary' | 'secondary' | 'alert' | 'search',
    onClick: () => void;
    disabled?: boolean;
    ariaLabel: string;
    className?: string;
    children: React.ReactNode;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({buttonTheme, onClick, disabled = false, ariaLabel, className, children}): React.ReactElement => {
    const themeClasses = {
        primary: 'bg-hca-accent-1 hover:bg-white text-white hover:text-hca-accent-1 hover:border hover:border-hca-accent-1',
        secondary: 'bg-white border border-hca-accent-1 text-hca-accent-1 hover:bg-hca-accent-1 hover:text-white',
        alert: 'bg-hca-alert-light border border-hca-alert-light-border',
        search: 'bg-white border-left p-x-2',
    };

    const buttonClasses = twMerge('px-3 py-2 ', themeClasses[buttonTheme], className);

    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            aria-label= {ariaLabel}
            className={buttonClasses}
        >
            {children}
        </button>
    );
}

export default ButtonBase;