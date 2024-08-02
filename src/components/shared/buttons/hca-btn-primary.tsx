import { HCAButtonProps } from "../../../types/hca-button-props";
import ButtonBase from "./button-base";

const HCAButtonPrimary: React.FC<HCAButtonProps> = ({buttonAction, ariaLabel, disabled = false, children, className}): React.ReactNode => {
    return (
        <ButtonBase onClick={buttonAction} buttonTheme='primary' disabled={disabled} className={className} ariaLabel={ariaLabel} >
            {children}
        </ButtonBase>
    );
}

export default HCAButtonPrimary;