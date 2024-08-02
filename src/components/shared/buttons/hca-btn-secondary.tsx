import { HCAButtonProps } from "../../../types/hca-button-props";
import ButtonBase from "./button-base";

const HCAButtonSecondary: React.FC<HCAButtonProps> = ({buttonAction, ariaLabel, disabled = false, children, className}): React.ReactNode => {
    return (
        <ButtonBase onClick={buttonAction} buttonTheme='secondary' disabled={disabled} className={className} ariaLabel={ariaLabel} >
            {children}
        </ButtonBase>
    );
}

export default HCAButtonSecondary;