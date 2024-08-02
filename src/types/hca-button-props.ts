export interface HCAButtonProps {
    buttonAction: () => void,
    ariaLabel: string,
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
}