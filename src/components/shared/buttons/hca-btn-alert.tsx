import ButtonBase from "./button-base";
import { HCAButtonProps } from "../../../types/hca-button-props";

const HCAButtonAlert: React.FC<HCAButtonProps> = ({buttonAction, ariaLabel, disabled = false, children, className}): React.ReactNode => {

    return (
        <ButtonBase onClick={buttonAction} buttonTheme='alert' disabled={disabled} className={className} ariaLabel={ariaLabel} >
            {children}
        </ButtonBase>
    );
}

export default HCAButtonAlert;